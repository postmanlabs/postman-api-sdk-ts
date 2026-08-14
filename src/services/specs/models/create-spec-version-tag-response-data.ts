import { z } from 'zod';

/**
 * Zod schema for the CreateSpecVersionTagResponseData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createSpecVersionTagResponseData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
  });
});

/**
 * Information about the created version tag.
 * @typedef {CreateSpecVersionTagResponseData} createSpecVersionTagResponseData
 * @property {string} id - The version tag's ID.
 * @property {string} name - The version tag's name.
 */
export type CreateSpecVersionTagResponseData = z.infer<typeof createSpecVersionTagResponseData>;

/**
 * Zod schema for mapping API responses to the CreateSpecVersionTagResponseData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSpecVersionTagResponseDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the CreateSpecVersionTagResponseData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSpecVersionTagResponseDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});
