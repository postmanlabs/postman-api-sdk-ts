import { z } from 'zod';

/**
 * Zod schema for the CreateSpecVersionTag model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createSpecVersionTag = z.lazy(() => {
  return z.object({
    name: z.string(),
  });
});

/**
 * @typedef {CreateSpecVersionTag} createSpecVersionTag
 * @property {string} name - The version tag's name.
 */
export type CreateSpecVersionTag = z.infer<typeof createSpecVersionTag>;

/**
 * Zod schema for mapping API responses to the CreateSpecVersionTag application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSpecVersionTagResponse1 = z.lazy(() => {
  return z
    .object({
      name: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the CreateSpecVersionTag application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSpecVersionTagRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});
