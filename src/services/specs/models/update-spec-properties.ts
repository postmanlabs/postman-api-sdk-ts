import { z } from 'zod';

/**
 * Zod schema for the UpdateSpecProperties model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateSpecProperties = z.lazy(() => {
  return z.object({
    name: z.string(),
  });
});

/**
 *
 * @typedef  {UpdateSpecProperties} updateSpecProperties
 * @property {string} - The spec's name.
 */
export type UpdateSpecProperties = z.infer<typeof updateSpecProperties>;

/**
 * Zod schema for mapping API responses to the UpdateSpecProperties application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateSpecPropertiesResponse1 = z.lazy(() => {
  return z
    .object({
      name: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the UpdateSpecProperties application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateSpecPropertiesRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});
