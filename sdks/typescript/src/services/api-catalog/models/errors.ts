import { z } from 'zod';

/**
 * Zod schema for the Errors model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errors = z.lazy(() => {
  return z.object({
    totalErrors: z.number(),
    errorRatePct: z.number(),
    breakdown: z.any(),
  });
});

/**
 * Information about the endpoint's errors.
 * @typedef  {Errors} errors - Information about the endpoint's errors. - Information about the endpoint's errors.
 * @property {number} - The total number of 4xx and 5xx responses.
 * @property {number} - The percentage of requests that resulted in errors.
 * @property {any} - The error counts, keyed by the HTTP status code.
 */
export type Errors = z.infer<typeof errors>;

/**
 * Zod schema for mapping API responses to the Errors application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorsResponse = z.lazy(() => {
  return z
    .object({
      totalErrors: z.number(),
      errorRatePct: z.number(),
      breakdown: z.any(),
    })
    .transform((data) => ({
      totalErrors: data['totalErrors'],
      errorRatePct: data['errorRatePct'],
      breakdown: data['breakdown'],
    }));
});

/**
 * Zod schema for mapping the Errors application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorsRequest = z.lazy(() => {
  return z
    .object({
      totalErrors: z.number(),
      errorRatePct: z.number(),
      breakdown: z.any(),
    })
    .transform((data) => ({
      totalErrors: data['totalErrors'],
      errorRatePct: data['errorRatePct'],
      breakdown: data['breakdown'],
    }));
});
