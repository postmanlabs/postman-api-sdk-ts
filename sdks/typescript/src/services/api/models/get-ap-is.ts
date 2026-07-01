import { z } from 'zod';
import { Apis, apis, apisRequest, apisResponse } from './apis';
import {
  GetApIsMeta,
  getApIsMeta,
  getApIsMetaRequest,
  getApIsMetaResponse,
} from './get-ap-is-meta';

/**
 * Zod schema for the GetApIs model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApIs = z.lazy(() => {
  return z.object({
    apis: z.array(apis).optional(),
    meta: getApIsMeta.optional(),
  });
});

/**
 * Information about the API schema.
 * @typedef  {GetApIs} getApIs - Information about the API schema. - Information about the API schema.
 * @property {Apis[]}
 * @property {GetApIsMeta} - The response's meta information for paginated results.
 */
export type GetApIs = z.infer<typeof getApIs>;

/**
 * Zod schema for mapping API responses to the GetApIs application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApIsResponse = z.lazy(() => {
  return z
    .object({
      apis: z.array(apisResponse).optional(),
      meta: getApIsMetaResponse.optional(),
    })
    .transform((data) => ({
      apis: data['apis'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetApIs application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApIsRequest = z.lazy(() => {
  return z
    .object({
      apis: z.array(apisRequest).optional(),
      meta: getApIsMetaRequest.optional(),
    })
    .transform((data) => ({
      apis: data['apis'],
      meta: data['meta'],
    }));
});
