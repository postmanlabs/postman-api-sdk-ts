import { z } from 'zod';
import {
  SearchDetectedSecretsRequestMeta,
  searchDetectedSecretsRequestMeta,
  searchDetectedSecretsRequestMetaRequest,
  searchDetectedSecretsRequestMetaResponse,
} from './search-detected-secrets-request-meta';
import {
  SearchDetectedSecretsRequestData,
  searchDetectedSecretsRequestData,
  searchDetectedSecretsRequestDataRequest,
  searchDetectedSecretsRequestDataResponse,
} from './search-detected-secrets-request-data';

/**
 * Zod schema for the SearchDetectedSecretsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchDetectedSecretsRequest = z.lazy(() => {
  return z.object({
    meta: searchDetectedSecretsRequestMeta.optional(),
    data: z.array(searchDetectedSecretsRequestData).optional(),
  });
});

/**
 *
 * @typedef  {SearchDetectedSecretsRequest} searchDetectedSecretsRequest
 * @property {SearchDetectedSecretsRequestMeta} - The response's meta information for paginated results.
 * @property {SearchDetectedSecretsRequestData[]}
 */
export type SearchDetectedSecretsRequest = z.infer<typeof searchDetectedSecretsRequest>;

/**
 * Zod schema for mapping API responses to the SearchDetectedSecretsRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchDetectedSecretsRequestResponse = z.lazy(() => {
  return z
    .object({
      meta: searchDetectedSecretsRequestMetaResponse.optional(),
      data: z.array(searchDetectedSecretsRequestDataResponse).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the SearchDetectedSecretsRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchDetectedSecretsRequestRequest = z.lazy(() => {
  return z
    .object({
      meta: searchDetectedSecretsRequestMetaRequest.optional(),
      data: z.array(searchDetectedSecretsRequestDataRequest).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
