import { z } from 'zod';
import {
  CustomFunctionSummary,
  customFunctionSummary,
  customFunctionSummaryRequest,
  customFunctionSummaryResponse,
} from './custom-function-summary';
import {
  GetSpecVersionTagsMeta,
  getSpecVersionTagsMeta,
  getSpecVersionTagsMetaRequest,
  getSpecVersionTagsMetaResponse,
} from '../../common/get-spec-version-tags-meta';

/**
 * Zod schema for the CustomFunctionList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const customFunctionList = z.lazy(() => {
  return z.object({
    data: z.array(customFunctionSummary).optional(),
    meta: getSpecVersionTagsMeta.optional(),
  });
});

/**
 * A paginated list of custom function summaries.
 * @typedef {CustomFunctionList} customFunctionList
 * @property {CustomFunctionSummary[]} data - A list of custom functions.
 * @property {GetSpecVersionTagsMeta} meta - The response's meta information for paginated results.
 */
export type CustomFunctionList = z.infer<typeof customFunctionList>;

/**
 * Zod schema for mapping API responses to the CustomFunctionList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const customFunctionListResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(customFunctionSummaryResponse).optional(),
      meta: getSpecVersionTagsMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the CustomFunctionList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const customFunctionListRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(customFunctionSummaryRequest).optional(),
      meta: getSpecVersionTagsMetaRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
