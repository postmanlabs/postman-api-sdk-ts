import { z } from 'zod';
import {
  GetApiVersionsMeta,
  getApiVersionsMeta,
  getApiVersionsMetaRequest,
  getApiVersionsMetaResponse,
} from './get-api-versions-meta';
import {
  ApiVersionDataSchema,
  apiVersionDataSchema,
  apiVersionDataSchemaRequest,
  apiVersionDataSchemaResponse,
} from './api-version-data-schema';

/**
 * Zod schema for the GetApiVersions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiVersions = z.lazy(() => {
  return z.object({
    meta: getApiVersionsMeta.optional(),
    versions: z.array(apiVersionDataSchema).optional(),
  });
});

/**
 *
 * @typedef  {GetApiVersions} getApiVersions
 * @property {GetApiVersionsMeta} - The response's meta information for paginated results.
 * @property {ApiVersionDataSchema[]} - A list of the API's versions.
 */
export type GetApiVersions = z.infer<typeof getApiVersions>;

/**
 * Zod schema for mapping API responses to the GetApiVersions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiVersionsResponse = z.lazy(() => {
  return z
    .object({
      meta: getApiVersionsMetaResponse.optional(),
      versions: z.array(apiVersionDataSchemaResponse).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      versions: data['versions'],
    }));
});

/**
 * Zod schema for mapping the GetApiVersions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiVersionsRequest = z.lazy(() => {
  return z
    .object({
      meta: getApiVersionsMetaRequest.optional(),
      versions: z.array(apiVersionDataSchemaRequest).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      versions: data['versions'],
    }));
});
