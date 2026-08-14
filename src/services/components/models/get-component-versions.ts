import { z } from 'zod';
import {
  GetSpecVersionTagsMeta,
  getSpecVersionTagsMeta,
  getSpecVersionTagsMetaRequest,
  getSpecVersionTagsMetaResponse,
} from '../../common/get-spec-version-tags-meta';
import {
  ComponentVersionData,
  componentVersionData,
  componentVersionDataRequest,
  componentVersionDataResponse,
} from './component-version-data';

/**
 * Zod schema for the GetComponentVersions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getComponentVersions = z.lazy(() => {
  return z.object({
    meta: getSpecVersionTagsMeta.optional(),
    data: z.array(componentVersionData).optional(),
  });
});

/**
 * @typedef {GetComponentVersions} getComponentVersions
 * @property {GetSpecVersionTagsMeta} meta
 * @property {ComponentVersionData[]} data - A list of the component's versions.
 */
export type GetComponentVersions = z.infer<typeof getComponentVersions>;

/**
 * Zod schema for mapping API responses to the GetComponentVersions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getComponentVersionsResponse = z.lazy(() => {
  return z
    .object({
      meta: getSpecVersionTagsMetaResponse.optional(),
      data: z.array(componentVersionDataResponse).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetComponentVersions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getComponentVersionsRequest = z.lazy(() => {
  return z
    .object({
      meta: getSpecVersionTagsMetaRequest.optional(),
      data: z.array(componentVersionDataRequest).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
