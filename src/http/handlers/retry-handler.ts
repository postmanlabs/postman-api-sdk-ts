import { Request } from '../transport/request';
import { HttpResponse, RequestHandler, HttpMethod } from '../types';
import { HttpError } from '../error';

/**
 * Request handler that automatically retries failed requests.
 * Supports configurable retry attempts, exponential backoff with jitter, and specific status codes or HTTP methods to retry.
 */
export class RetryHandler implements RequestHandler {
  /** Next handler in the chain */
  next?: RequestHandler;

  /**
   * Handles a standard HTTP request with retry logic.
   * Retries failed requests based on the configured retry settings.
   * Implements exponential backoff with optional jitter between retry attempts.
   * @template T - The expected response data type
   * @param request - The HTTP request to process
   * @returns A promise that resolves to the HTTP response
   * @throws Error if no next handler is set, or if all retry attempts fail
   */
  async handle<T>(request: Request): Promise<HttpResponse<T>> {
    if (!this.next) {
      throw new Error('No next handler set in retry handler.');
    }

    const maxAttempts = request.config.retry?.attempts ?? 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        return await this.next.handle<T>(request);
      } catch (error: any) {
        if (!this.shouldRetry(error, request) || attempt === maxAttempts) {
          throw error;
        }
        const delayMs = this.calculateDelay(attempt, request);
        await this.delay(delayMs);
      }
    }

    throw new Error('Error retrying request.');
  }

  /**
   * Handles a streaming HTTP request with retry logic.
   * @template T - The expected response data type for each chunk
   * @param request - The HTTP request to process
   * @returns An async generator that yields HTTP responses
   * @throws Error if no next handler is set, or if all retry attempts fail
   */
  async *stream<T>(request: Request): AsyncGenerator<HttpResponse<T>> {
    if (!this.next) {
      throw new Error('No next handler set in retry handler.');
    }

    const maxAttempts = request.config.retry?.attempts ?? 3;

    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        yield* this.next.stream<T>(request);
        return;
      } catch (error: any) {
        if (!this.shouldRetry(error, request) || attempt === maxAttempts) {
          throw error;
        }
        const delayMs = this.calculateDelay(attempt, request);
        await this.delay(delayMs);
      }
    }

    throw new Error('Error retrying request.');
  }

  /**
   * Determines if an error should trigger a retry.
   * Checks both HTTP status codes and HTTP methods against the configured retry settings.
   * By default, retries all 5xx server errors and specific 4xx client errors (408 Timeout, 429 Rate Limit).
   * @param error - The error to check
   * @param request - The HTTP request being retried
   * @returns True if the request should be retried, false otherwise
   */
  private shouldRetry(error: Error, request: Request): boolean {
    if (!(error instanceof HttpError)) {
      return false;
    }

    const httpMethodsToRetry = request.config.retry?.httpMethodsToRetry ?? [
      'GET',
      'POST',
      'PUT',
      'DELETE',
      'PATCH',
      'HEAD',
      'OPTIONS',
    ];

    const shouldRetryStatus = request.config.retry?.statusCodesToRetry
      ? request.config.retry.statusCodesToRetry.includes(error.metadata.status)
      : error.metadata.status >= 500 || [408, 429].includes(error.metadata.status);

    const shouldRetryMethod = httpMethodsToRetry.includes(request.method as HttpMethod);

    return shouldRetryStatus && shouldRetryMethod;
  }

  /**
   * Calculates the delay before the next retry attempt using exponential backoff.
   * Optionally adds jitter to prevent thundering herd problems.
   * @param attempt - The current retry attempt number (1-indexed)
   * @param request - The HTTP request being retried
   * @returns The delay in milliseconds, capped at the configured maximum delay
   */
  private calculateDelay(attempt: number, request: Request): number {
    const baseDelay = request.config.retry?.delayMs ?? 150;
    const backoffFactor = request.config.retry?.backoffFactor ?? 2;
    const maxDelay = request.config.retry?.maxDelayMs ?? 5000;
    const jitter = request.config.retry?.jitterMs ?? 50;

    // Calculate exponential backoff: initialDelay * (backoffFactor ^ (attempt - 1))
    let delay = baseDelay * Math.pow(backoffFactor, attempt - 1);

    // Cap at max delay
    delay = Math.min(delay, maxDelay);

    // Add jitter: random value between 0 and jitter
    if (jitter > 0) {
      delay += Math.random() * jitter;
    }

    return Math.floor(delay);
  }

  /**
   * Delays execution for a specified duration before retrying.
   * @param delayMs - The delay in milliseconds
   * @returns A promise that resolves after the delay
   */
  private delay(delayMs: number): Promise<void> {
    if (delayMs <= 0) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), delayMs);
    });
  }
}
