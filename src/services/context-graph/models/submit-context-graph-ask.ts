import { z } from 'zod';

/**
 * Zod schema for the SubmitContextGraphAsk model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const submitContextGraphAsk = z.lazy(() => {
  return z.object({
    query: z.string().min(1).max(2000),
    includeAnswer: z.boolean().optional(),
  });
});

/**
 * @typedef {SubmitContextGraphAsk} submitContextGraphAsk
 * @property {string} query - The natural-language question to answer against the graph.
 * @property {boolean} includeAnswer - Whether to include the prose answer in the result. If `false`, the result's `answer` property is `null` and the result's other properties are unaffected.
 */
export type SubmitContextGraphAsk = z.infer<typeof submitContextGraphAsk>;

/**
 * Zod schema for mapping API responses to the SubmitContextGraphAsk application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const submitContextGraphAskResponse1 = z.lazy(() => {
  return z
    .object({
      query: z.string().min(1).max(2000),
      includeAnswer: z.boolean().optional(),
    })
    .transform((data) => ({
      query: data['query'],
      includeAnswer: data['includeAnswer'],
    }));
});

/**
 * Zod schema for mapping the SubmitContextGraphAsk application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const submitContextGraphAskRequest = z.lazy(() => {
  return z
    .object({
      query: z.string().min(1).max(2000),
      includeAnswer: z.boolean().optional(),
    })
    .transform((data) => ({
      query: data['query'],
      includeAnswer: data['includeAnswer'],
    }));
});
