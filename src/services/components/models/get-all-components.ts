import { z } from 'zod';
import {
  GetSpecVersionTagsMeta,
  getSpecVersionTagsMeta,
  getSpecVersionTagsMetaRequest,
  getSpecVersionTagsMetaResponse,
} from '../../common/get-spec-version-tags-meta';
import {
  ComponentData,
  componentData,
  componentDataRequest,
  componentDataResponse,
} from './component-data';

/**
 * Zod schema for the GetAllComponents model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAllComponents = z.lazy(() => {
  return z.object({
    meta: getSpecVersionTagsMeta.optional(),
    data: z.array(componentData).optional(),
  });
});

/**
 * @typedef {GetAllComponents} getAllComponents
 * @property {GetSpecVersionTagsMeta} meta
 * @property {ComponentData[]} data - A list of components.
 */
export type GetAllComponents = z.infer<typeof getAllComponents>;

/**
 * Zod schema for mapping API responses to the GetAllComponents application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAllComponentsResponse = z.lazy(() => {
  return z
    .object({
      meta: getSpecVersionTagsMetaResponse.optional(),
      data: z.array(componentDataResponse).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetAllComponents application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAllComponentsRequest = z.lazy(() => {
  return z
    .object({
      meta: getSpecVersionTagsMetaRequest.optional(),
      data: z.array(componentDataRequest).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
