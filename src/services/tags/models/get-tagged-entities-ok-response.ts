import { z } from 'zod';
import {
  SuccessfulResponseData1,
  successfulResponseData1,
  successfulResponseData1Request,
  successfulResponseData1Response,
} from './successful-response-data-1';
import {
  SuccessfulResponseMeta1,
  successfulResponseMeta1,
  successfulResponseMeta1Request,
  successfulResponseMeta1Response,
} from './successful-response-meta-1';

/**
 * Zod schema for the GetTaggedEntitiesOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getTaggedEntitiesOkResponse = z.lazy(() => {
  return z.object({
    data: successfulResponseData1.optional(),
    meta: successfulResponseMeta1.optional(),
  });
});

/**
 * @typedef {GetTaggedEntitiesOkResponse} getTaggedEntitiesOkResponse
 * @property {SuccessfulResponseData1} data - An object containing the paginated elements.
 * @property {SuccessfulResponseMeta1} meta - The response's pagination information.
 */
export type GetTaggedEntitiesOkResponse = z.infer<typeof getTaggedEntitiesOkResponse>;

/**
 * Zod schema for mapping API responses to the GetTaggedEntitiesOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTaggedEntitiesOkResponseResponse = z.lazy(() => {
  return z
    .object({
      data: successfulResponseData1Response.optional(),
      meta: successfulResponseMeta1Response.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetTaggedEntitiesOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTaggedEntitiesOkResponseRequest = z.lazy(() => {
  return z
    .object({
      data: successfulResponseData1Request.optional(),
      meta: successfulResponseMeta1Request.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
