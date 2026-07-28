import { z } from 'zod';
import {
  SearchMetaData,
  searchMetaData,
  searchMetaDataRequest,
  searchMetaDataResponse,
} from './search-meta-data';
import {
  SearchPostmanResourcesResponseData,
  searchPostmanResourcesResponseData,
  searchPostmanResourcesResponseDataRequest,
  searchPostmanResourcesResponseDataResponse,
} from './search-postman-resources-response-data';

/**
 * Zod schema for the SearchPostmanResourcesResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchPostmanResourcesResponse = z.lazy(() => {
  return z.object({
    meta: searchMetaData.optional(),
    data: z.array(searchPostmanResourcesResponseData).optional(),
  });
});

/**
 *
 * @typedef  {SearchPostmanResourcesResponse} searchPostmanResourcesResponse
 * @property {SearchMetaData} - Pagination metadata for the search results.
 * @property {SearchPostmanResourcesResponseData[]} - A list of Postman elements that match the search query and filters.
 */
export type SearchPostmanResourcesResponse = z.infer<typeof searchPostmanResourcesResponse>;

/**
 * Zod schema for mapping API responses to the SearchPostmanResourcesResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchPostmanResourcesResponseResponse = z.lazy(() => {
  return z
    .object({
      meta: searchMetaDataResponse.optional(),
      data: z.array(searchPostmanResourcesResponseDataResponse).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the SearchPostmanResourcesResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchPostmanResourcesResponseRequest = z.lazy(() => {
  return z
    .object({
      meta: searchMetaDataRequest.optional(),
      data: z.array(searchPostmanResourcesResponseDataRequest).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
