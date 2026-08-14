import { z } from 'zod';

/**
 * Zod schema for the GenerateSpecFromCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const generateSpecFromCollection = z.lazy(() => {
  return z.object({
    name: z.string(),
    type: z.string().optional(),
    format: z.string().optional(),
  });
});

/**
 * @typedef {GenerateSpecFromCollection} generateSpecFromCollection
 * @property {string} name - The API specification's name.
 * @property {GenerateSpecFromCollectionType} type - The specification's type.
 * @property {Format} format - The format of the API specification.
 */
export type GenerateSpecFromCollection = z.infer<typeof generateSpecFromCollection>;

/**
 * Zod schema for mapping API responses to the GenerateSpecFromCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateSpecFromCollectionResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      type: z.string().optional(),
      format: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      format: data['format'],
    }));
});

/**
 * Zod schema for mapping the GenerateSpecFromCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateSpecFromCollectionRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      type: z.string().optional(),
      format: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      format: data['format'],
    }));
});
