import { ZodError } from 'zod';
import { Request } from '../transport/request';
import { ContentType, HttpResponse, RequestHandler } from '../types';
import { ValidationError } from '../errors/validation-error';

/**
 * Request handler that validates and serializes request bodies based on content type.
 * Supports JSON, XML, text, binary, form data, and multipart form data.
 */
export class RequestValidationHandler implements RequestHandler {
  /** Next handler in the chain */
  next?: RequestHandler;

  /**
   * Handles a standard HTTP request with validation.
   * @template T - The expected response data type
   * @param request - The HTTP request to validate
   * @returns A promise that resolves to the HTTP response
   * @throws Error if no next handler is set
   */
  async handle<T>(request: Request): Promise<HttpResponse<T>> {
    if (!this.next) {
      throw new Error('No next handler set in ContentTypeHandler.');
    }

    this.validateRequest(request);

    return this.next.handle<T>(request);
  }

  /**
   * Handles a streaming HTTP request with validation.
   * @template T - The expected response data type for each chunk
   * @param request - The HTTP request to validate
   * @returns An async generator that yields HTTP responses
   * @throws Error if no next handler is set
   */
  async *stream<T>(request: Request): AsyncGenerator<HttpResponse<T>> {
    if (!this.next) {
      throw new Error('No next handler set in ContentTypeHandler.');
    }

    this.validateRequest(request);

    yield* this.next.stream<T>(request);
  }

  /**
   * Validates and serializes the request body based on its content type.
   * @param request - The HTTP request to validate
   * @throws ValidationError if Zod schema validation fails
   */
  validateRequest(request: Request): void {
    const requestValidationEnabled = request.config.validation?.requestValidation ?? true;

    if (
      request.requestContentType === ContentType.Text ||
      request.requestContentType === ContentType.Image ||
      request.requestContentType === ContentType.Binary
    ) {
      request.body = request.body;
    } else if (request.requestContentType === ContentType.FormUrlEncoded) {
      request.body = this.toFormUrlEncoded(request, requestValidationEnabled);
    } else if (request.requestContentType === ContentType.MultipartFormData) {
      request.body = this.toFormData(request.body, request.filename, request.filenames);
    } else {
      // ContentType.Json and everything else (arbitrary/unrecognized content types) serialize the
      // same way: validate-then-stringify, or stringify as-is when validation is disabled.
      request.body = requestValidationEnabled
        ? JSON.stringify(this.validateBody(request, request.body))
        : JSON.stringify(request.body);
    }
  }

  /**
   * Validates a request body against its schema.
   * @throws ValidationError if Zod schema validation fails
   */
  private validateBody(request: Request, body: unknown): unknown {
    if (!request.requestSchema) {
      return body;
    }
    try {
      return request.requestSchema.parse(body);
    } catch (error) {
      if (error instanceof ZodError) {
        throw new ValidationError(error, body);
      }
      throw error;
    }
  }

  /**
   * Converts request body to URL-encoded form data format.
   * @param request - The HTTP request with body to convert
   * @param requestValidationEnabled - Whether to validate the body against its schema first
   * @returns URL-encoded string representation of the body
   */
  toFormUrlEncoded(request: Request, requestValidationEnabled: boolean): string {
    if (request.body === undefined) {
      return '';
    }

    if (typeof request.body === 'string') {
      return request.body;
    }

    if (request.body instanceof URLSearchParams) {
      return request.body.toString();
    }

    const validatedBody = requestValidationEnabled
      ? this.validateBody(request, request.body)
      : request.body;

    if (validatedBody instanceof FormData) {
      const params = new URLSearchParams();
      validatedBody.forEach((value, key) => {
        if (value != null) {
          params.append(key, value.toString());
        }
      });
      return params.toString();
    }

    if (
      typeof validatedBody === 'object' &&
      validatedBody !== null &&
      !Array.isArray(validatedBody)
    ) {
      const params = new URLSearchParams();
      for (const [key, value] of Object.entries(validatedBody)) {
        if (value != null) {
          params.append(key, `${value}`);
        }
      }
      return params.toString();
    }

    return '';
  }

  /**
   * Converts request body to multipart form data format.
   * Handles files (ArrayBuffer), arrays, and regular values.
   * @param body - The request body object
   * @param filename - Optional filename for single file uploads
   * @param filenames - Optional filenames array for array of file uploads
   * @returns FormData object with serialized body
   */
  toFormData(body: Record<string, any>, filename?: string, filenames?: string[]): FormData {
    const formData = new FormData();

    Object.keys(body).forEach((key: any) => {
      const value: any = body[key];
      if (Array.isArray(value)) {
        value.forEach((v, i) => {
          if (v instanceof ArrayBuffer) {
            // For arrays of files, use the corresponding filename from filenames array
            const fileFilename = filenames && filenames[i] ? filenames[i] : `${key}[${i}]`;
            formData.append(`${key}[${i}]`, new Blob([v]), fileFilename);
          } else {
            formData.append(`${key}[${i}]`, v);
          }
        });
      } else if (value instanceof ArrayBuffer) {
        // For single files, use the provided filename or fallback to the key name
        const fileFilename = filename || key;
        formData.append(key, new Blob([value]), fileFilename);
      } else {
        formData.append(key, value);
      }
    });

    return formData;
  }
}
