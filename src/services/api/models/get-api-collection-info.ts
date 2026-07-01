import { z } from 'zod';

/**
 * Zod schema for the GetApiCollectionInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCollectionInfo = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    schema: z.string().optional(),
    _postmanId: z.string().optional(),
    description: z.string().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * Information about the collection.
 * @typedef  {GetApiCollectionInfo} getApiCollectionInfo - Information about the collection. - Information about the collection.
 * @property {string} - The collection's name.
 * @property {string} - A URL to the collection's schema.
 * @property {string} - The collection's Postman ID.
 * @property {string} - The collection's description.
 */
export type GetApiCollectionInfo = z.infer<typeof getApiCollectionInfo>;

/**
 * Zod schema for mapping API responses to the GetApiCollectionInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCollectionInfoResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      schema: z.string().optional(),
      _postman_id: z.string().optional(),
      description: z.string().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>(['name', 'schema', '_postman_id', 'description']);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        name: data['name'],
        schema: data['schema'],
        _postmanId: data['_postman_id'],
        description: data['description'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the GetApiCollectionInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCollectionInfoRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      schema: z.string().optional(),
      _postmanId: z.string().optional(),
      description: z.string().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      name: data['name'],
      schema: data['schema'],
      _postman_id: data['_postmanId'],
      description: data['description'],
    }));
});
