import { z } from 'zod';

/**
 * Zod schema for the Usage model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const usage = z.lazy(() => {
  return z.object({
    steps: z.number(),
    outputTokens: z.number().optional(),
  });
});

/**
 * A summary of the resources the ask consumed.
 * @typedef {Usage} usage
 * @property {number} steps - The number of tool calls the ask made.
 * @property {number} outputTokens - The number of LLM output tokens the ask consumed. This property is only present if the value is known.
 */
export type Usage = z.infer<typeof usage>;

/**
 * Zod schema for mapping API responses to the Usage application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const usageResponse = z.lazy(() => {
  return z
    .object({
      steps: z.number(),
      outputTokens: z.number().optional(),
    })
    .transform((data) => ({
      steps: data['steps'],
      outputTokens: data['outputTokens'],
    }));
});

/**
 * Zod schema for mapping the Usage application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const usageRequest = z.lazy(() => {
  return z
    .object({
      steps: z.number(),
      outputTokens: z.number().optional(),
    })
    .transform((data) => ({
      steps: data['steps'],
      outputTokens: data['outputTokens'],
    }));
});
