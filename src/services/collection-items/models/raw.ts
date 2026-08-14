import { z } from 'zod';

/**
 * Zod schema for the Raw model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const raw = z.lazy(() => {
  return z.object({
    language: z.string().optional(),
  });
});

/**
 * Options for the `raw` data mode.
 * @typedef {Raw} raw
 * @property {string} language - The raw mode data's language type.
 */
export type Raw = z.infer<typeof raw>;

/**
 * Zod schema for mapping API responses to the Raw application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rawResponse = z.lazy(() => {
  return z
    .object({
      language: z.string().optional(),
    })
    .transform((data) => ({
      language: data['language'],
    }));
});

/**
 * Zod schema for mapping the Raw application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const rawRequest = z.lazy(() => {
  return z
    .object({
      language: z.string().optional(),
    })
    .transform((data) => ({
      language: data['language'],
    }));
});
