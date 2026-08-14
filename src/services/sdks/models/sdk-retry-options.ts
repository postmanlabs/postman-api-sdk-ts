import { z } from 'zod';

/**
 * Zod schema for the SdkRetryOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sdkRetryOptions = z.lazy(() => {
  return z.object({
    enabled: z.boolean().optional(),
    maxAttempts: z.number().optional(),
    retryDelay: z.number(),
    maxDelay: z.number().gte(0).optional(),
    backOffFactor: z.number().gt(0).optional(),
    retryDelayJitter: z.number().gte(0).optional(),
    httpCodesToRetry: z.array(z.number()).optional(),
    httpMethodsToRetry: z.array(z.string()).optional(),
  });
});

/**
 * Retry behavior baked into the generated SDK's HTTP client. A power-user option; sensible defaults apply for any field left unset.
 * @typedef {SdkRetryOptions} sdkRetryOptions
 * @property {boolean} enabled - If true, the generated SDK includes retry behavior.
 * @property {number} maxAttempts - The maximum number of attempts to try before giving up.
 * @property {number} retryDelay - The base wait between attempts, in milliseconds.
 * @property {number} maxDelay - The maximum wait between attempts, in milliseconds.
 * @property {number} backOffFactor - The exponent base used to compute exponential backoff between attempts.
 * @property {number} retryDelayJitter - The maximum random jitter added to wait times, in milliseconds.
 * @property {number[]} httpCodesToRetry - A list of HTTP status codes that the SDK attempts its retries on.
 * @property {HttpMethodsToRetry[]} httpMethodsToRetry - A list of the HTTP methods that the SDK attempts its retries on.
 */
export type SdkRetryOptions = z.infer<typeof sdkRetryOptions>;

/**
 * Zod schema for mapping API responses to the SdkRetryOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkRetryOptionsResponse = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
      maxAttempts: z.number().optional(),
      retryDelay: z.number(),
      maxDelay: z.number().gte(0).optional(),
      backOffFactor: z.number().gt(0).optional(),
      retryDelayJitter: z.number().gte(0).optional(),
      httpCodesToRetry: z.array(z.number()).optional(),
      httpMethodsToRetry: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
      maxAttempts: data['maxAttempts'],
      retryDelay: data['retryDelay'],
      maxDelay: data['maxDelay'],
      backOffFactor: data['backOffFactor'],
      retryDelayJitter: data['retryDelayJitter'],
      httpCodesToRetry: data['httpCodesToRetry'],
      httpMethodsToRetry: data['httpMethodsToRetry'],
    }));
});

/**
 * Zod schema for mapping the SdkRetryOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkRetryOptionsRequest = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
      maxAttempts: z.number().optional(),
      retryDelay: z.number(),
      maxDelay: z.number().gte(0).optional(),
      backOffFactor: z.number().gt(0).optional(),
      retryDelayJitter: z.number().gte(0).optional(),
      httpCodesToRetry: z.array(z.number()).optional(),
      httpMethodsToRetry: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
      maxAttempts: data['maxAttempts'],
      retryDelay: data['retryDelay'],
      maxDelay: data['maxDelay'],
      backOffFactor: data['backOffFactor'],
      retryDelayJitter: data['retryDelayJitter'],
      httpCodesToRetry: data['httpCodesToRetry'],
      httpMethodsToRetry: data['httpMethodsToRetry'],
    }));
});
