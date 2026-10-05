import { z } from 'zod';

/**
 * Zod schema for the WriteResult model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const writeResult = z.lazy(() => {
  return z.object({
    id: z.string(),
  });
});

/**
 * Information about the updated or created resource.
 * @typedef {WriteResult} writeResult
 * @property {string} id - The resource's ID.
 */
export type WriteResult = z.infer<typeof writeResult>;

/**
 * Zod schema for mapping API responses to the WriteResult application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const writeResultResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the WriteResult application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const writeResultRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
