import { z } from 'zod';
import {
  SuccessfulResponseData2,
  successfulResponseData2,
  successfulResponseData2Request,
  successfulResponseData2Response,
} from './successful-response-data-2';
import {
  SuccessfulResponseMeta2,
  successfulResponseMeta2,
  successfulResponseMeta2Request,
  successfulResponseMeta2Response,
} from './successful-response-meta-2';

/**
 * Zod schema for the GetDetectedSecretsLocationsOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getDetectedSecretsLocationsOkResponse = z.lazy(() => {
  return z.object({
    data: z.array(successfulResponseData2).optional(),
    meta: successfulResponseMeta2.optional(),
  });
});

/**
 *
 * @typedef  {GetDetectedSecretsLocationsOkResponse} getDetectedSecretsLocationsOkResponse
 * @property {SuccessfulResponseData2[]}
 * @property {SuccessfulResponseMeta2}
 */
export type GetDetectedSecretsLocationsOkResponse = z.infer<
  typeof getDetectedSecretsLocationsOkResponse
>;

/**
 * Zod schema for mapping API responses to the GetDetectedSecretsLocationsOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getDetectedSecretsLocationsOkResponseResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(successfulResponseData2Response).optional(),
      meta: successfulResponseMeta2Response.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetDetectedSecretsLocationsOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getDetectedSecretsLocationsOkResponseRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(successfulResponseData2Request).optional(),
      meta: successfulResponseMeta2Request.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
