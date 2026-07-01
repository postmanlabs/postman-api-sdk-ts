import { z } from 'zod';

/**
 * Zod schema for the Patch model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const patch = z.lazy(() => {
  return z.object({
    supported: z.boolean().optional(),
  });
});

/**
 * Information about patch configuration.
 * @typedef  {Patch} patch - Information about patch configuration. - Information about patch configuration.
 * @property {boolean} - If true, the feature is supported.
 */
export type Patch = z.infer<typeof patch>;

/**
 * Zod schema for mapping API responses to the Patch application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchResponse = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});

/**
 * Zod schema for mapping the Patch application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchRequest = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});
