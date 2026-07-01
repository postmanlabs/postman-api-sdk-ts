import { z } from 'zod';
import {
  GetApiCollectionInfo,
  getApiCollectionInfo,
  getApiCollectionInfoRequest,
  getApiCollectionInfoResponse,
} from './get-api-collection-info';

/**
 * Zod schema for the GetApiCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCollection = z.lazy(() => {
  return z.object({
    item: z.array(z.any()).optional(),
    info: getApiCollectionInfo.optional(),
    auth: z.any().optional(),
    variable: z.array(z.any()).optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 *
 * @typedef  {GetApiCollection} getApiCollection
 * @property {any[]} - A list of the collection's contents.
 * @property {GetApiCollectionInfo} - Information about the collection.
 * @property {any} - The collection's auth information. For a complete list of values, refer to the ``Auth`` entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @property {any[]} - A list of the collection's variables.
 */
export type GetApiCollection = z.infer<typeof getApiCollection>;

/**
 * Zod schema for mapping API responses to the GetApiCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCollectionResponse = z.lazy(() => {
  return z
    .object({
      item: z.array(z.any()).optional(),
      info: getApiCollectionInfoResponse.optional(),
      auth: z.any().optional(),
      variable: z.array(z.any()).optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>(['item', 'info', 'auth', 'variable']);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        item: data['item'],
        info: data['info'],
        auth: data['auth'],
        variable: data['variable'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the GetApiCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCollectionRequest = z.lazy(() => {
  return z
    .object({
      item: z.array(z.any()).optional(),
      info: getApiCollectionInfoRequest.optional(),
      auth: z.any().optional(),
      variable: z.array(z.any()).optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      item: data['item'],
      info: data['info'],
      auth: data['auth'],
      variable: data['variable'],
    }));
});
