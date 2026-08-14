import { z } from 'zod';

/**
 * Zod schema for the CreateFolder model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createFolder = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    folder: z.string().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * Information about the collection folder. For a complete list of properties, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v1.0.0/draft-07/collection.json).

**Note:**

It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a folder with a blank name.

 * @typedef {CreateFolder} createFolder
 * @property {string} name - The folder's name. It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a folder with a blank name.
 * @property {string} folder - The ID of a folder in which to create the folder.
 */
export type CreateFolder = z.infer<typeof createFolder>;

/**
 * Zod schema for mapping API responses to the CreateFolder application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createFolderResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      folder: z.string().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>(['name', 'folder']);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        name: data['name'],
        folder: data['folder'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the CreateFolder application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createFolderRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      folder: z.string().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      name: data['name'],
      folder: data['folder'],
    }));
});
