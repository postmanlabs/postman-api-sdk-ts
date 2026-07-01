import { z } from 'zod';
import { DataInfo, dataInfo, dataInfoRequest, dataInfoResponse } from './data-info';

/**
 * Zod schema for the CreateApiCollectionData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createApiCollectionData = z.lazy(() => {
  return z.object({
    info: dataInfo.optional(),
    item: z.array(z.any()).optional(),
  });
});

/**
 * Information about the collection's contents, such as requests and responses. For a complete list of values, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @typedef  {CreateApiCollectionData} createApiCollectionData - Information about the collection's contents, such as requests and responses. For a complete list of values, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). - Information about the collection's contents, such as requests and responses. For a complete list of values, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @property {DataInfo} - Information about the collection.
 * @property {any[]} - Information about the requests and responses in the collection. For a complete list of values, refer to the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 */
export type CreateApiCollectionData = z.infer<typeof createApiCollectionData>;

/**
 * Zod schema for mapping API responses to the CreateApiCollectionData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiCollectionDataResponse = z.lazy(() => {
  return z
    .object({
      info: dataInfoResponse.optional(),
      item: z.array(z.any()).optional(),
    })
    .transform((data) => ({
      info: data['info'],
      item: data['item'],
    }));
});

/**
 * Zod schema for mapping the CreateApiCollectionData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiCollectionDataRequest = z.lazy(() => {
  return z
    .object({
      info: dataInfoRequest.optional(),
      item: z.array(z.any()).optional(),
    })
    .transform((data) => ({
      info: data['info'],
      item: data['item'],
    }));
});
