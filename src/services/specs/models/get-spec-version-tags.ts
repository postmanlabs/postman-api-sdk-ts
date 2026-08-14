import { z } from 'zod';
import {
  GetSpecVersionTagsData,
  getSpecVersionTagsData,
  getSpecVersionTagsDataRequest,
  getSpecVersionTagsDataResponse,
} from './get-spec-version-tags-data';
import {
  GetSpecVersionTagsMeta,
  getSpecVersionTagsMeta,
  getSpecVersionTagsMetaRequest,
  getSpecVersionTagsMetaResponse,
} from '../../common/get-spec-version-tags-meta';

/**
 * Zod schema for the GetSpecVersionTags model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getSpecVersionTags = z.lazy(() => {
  return z.object({
    data: z.array(getSpecVersionTagsData).optional(),
    meta: getSpecVersionTagsMeta.optional(),
  });
});

/**
 * @typedef {GetSpecVersionTags} getSpecVersionTags
 * @property {GetSpecVersionTagsData[]} data - A list of the specification's version tags.
 * @property {GetSpecVersionTagsMeta} meta
 */
export type GetSpecVersionTags = z.infer<typeof getSpecVersionTags>;

/**
 * Zod schema for mapping API responses to the GetSpecVersionTags application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecVersionTagsResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(getSpecVersionTagsDataResponse).optional(),
      meta: getSpecVersionTagsMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetSpecVersionTags application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecVersionTagsRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(getSpecVersionTagsDataRequest).optional(),
      meta: getSpecVersionTagsMetaRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
