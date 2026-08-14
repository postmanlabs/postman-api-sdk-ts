import { z } from 'zod';
import {
  SuccessfulResponseData3,
  successfulResponseData3,
  successfulResponseData3Request,
  successfulResponseData3Response,
} from './successful-response-data-3';
import {
  SuccessfulResponseMeta3,
  successfulResponseMeta3,
  successfulResponseMeta3Request,
  successfulResponseMeta3Response,
} from './successful-response-meta-3';

/**
 * Zod schema for the GetSecretTypesOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getSecretTypesOkResponse = z.lazy(() => {
  return z.object({
    data: z.array(successfulResponseData3).optional(),
    meta: successfulResponseMeta3.optional(),
  });
});

/**
 * @typedef {GetSecretTypesOkResponse} getSecretTypesOkResponse
 * @property {SuccessfulResponseData3[]} data
 * @property {SuccessfulResponseMeta3} meta
 */
export type GetSecretTypesOkResponse = z.infer<typeof getSecretTypesOkResponse>;

/**
 * Zod schema for mapping API responses to the GetSecretTypesOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSecretTypesOkResponseResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(successfulResponseData3Response).optional(),
      meta: successfulResponseMeta3Response.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetSecretTypesOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSecretTypesOkResponseRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(successfulResponseData3Request).optional(),
      meta: successfulResponseMeta3Request.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
