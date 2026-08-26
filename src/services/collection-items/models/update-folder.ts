import { z } from 'zod';

/**
 * Zod schema for the UpdateFolder model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateFolder = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    additionalProperties: z.record(z.string(), z.unknown()).optional(),
  });
});

/**
 * The folder properties to update. For a complete list of properties, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v1.0.0/draft-07/collection.json).
 * @typedef {UpdateFolder} updateFolder
 * @property {string} name - The folder's name.
 * @property {string} description - The folder's description.
 */
export type UpdateFolder = z.infer<typeof updateFolder>;

/**
 * Zod schema for mapping API responses to the UpdateFolder application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateFolderResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>(['name', 'description']);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        name: data['name'],
        description: data['description'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the UpdateFolder application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateFolderRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional(),
      additionalProperties: z.record(z.string(), z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      name: data['name'],
      description: data['description'],
    }));
});
