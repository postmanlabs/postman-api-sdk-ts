import { z } from 'zod';

/**
 * Zod schema for the GetSpecVersionTagsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getSpecVersionTagsData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
  });
});

/**
 * Information about the version tag.
 * @typedef {GetSpecVersionTagsData} getSpecVersionTagsData
 * @property {string} id - The version tag's ID.
 * @property {string} name - The version tag's name.
 */
export type GetSpecVersionTagsData = z.infer<typeof getSpecVersionTagsData>;

/**
 * Zod schema for mapping API responses to the GetSpecVersionTagsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecVersionTagsDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the GetSpecVersionTagsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecVersionTagsDataRequest = z.lazy(() => {
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
