import { z } from 'zod';
import {
  CreateApiCollectionData,
  createApiCollectionData,
  createApiCollectionDataRequest,
  createApiCollectionDataResponse,
} from './create-api-collection-data';

/**
 * Zod schema for the CreateApiCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createApiCollection = z.lazy(() => {
  return z.object({
    data: createApiCollectionData.optional(),
    operationType: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CreateApiCollection} createApiCollection
 * @property {CreateApiCollectionData} - Information about the collection's contents, such as requests and responses. For a complete list of values, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @property {CreateApiCollectionOperationType} - The `CREATE_NEW` method.
 */
export type CreateApiCollection = z.infer<typeof createApiCollection>;

/**
 * Zod schema for mapping API responses to the CreateApiCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiCollectionResponse = z.lazy(() => {
  return z
    .object({
      data: createApiCollectionDataResponse.optional(),
      operationType: z.string().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      operationType: data['operationType'],
    }));
});

/**
 * Zod schema for mapping the CreateApiCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiCollectionRequest = z.lazy(() => {
  return z
    .object({
      data: createApiCollectionDataRequest.optional(),
      operationType: z.string().optional(),
    })
    .transform((data) => ({
      data: data['data'],
      operationType: data['operationType'],
    }));
});
