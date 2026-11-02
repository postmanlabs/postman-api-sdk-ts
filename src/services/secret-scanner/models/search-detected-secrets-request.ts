import { z } from 'zod';
import {
  MetaLimitNextCursorTotalIncludeParam,
  metaLimitNextCursorTotalIncludeParam,
  metaLimitNextCursorTotalIncludeParamRequest,
  metaLimitNextCursorTotalIncludeParamResponse,
} from './meta-limit-next-cursor-total-include-param';
import {
  DetectedSecretsData,
  detectedSecretsData,
  detectedSecretsDataRequest,
  detectedSecretsDataResponse,
} from './detected-secrets-data';

/**
 * Zod schema for the SearchDetectedSecretsRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchDetectedSecretsRequest = z.lazy(() => {
  return z.object({
    meta: metaLimitNextCursorTotalIncludeParam.optional(),
    data: z.array(detectedSecretsData).optional(),
  });
});

/**
 * @typedef {SearchDetectedSecretsRequest} searchDetectedSecretsRequest
 * @property {MetaLimitNextCursorTotalIncludeParam} meta - The response's meta information for paginated results.
 * @property {DetectedSecretsData[]} data - A list of detected secrets that match the search criteria.
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
      meta: metaLimitNextCursorTotalIncludeParamResponse.optional(),
      data: z.array(detectedSecretsDataResponse).optional(),
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
      meta: metaLimitNextCursorTotalIncludeParamRequest.optional(),
      data: z.array(detectedSecretsDataRequest).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      data: data['data'],
    }));
});
