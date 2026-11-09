import { z } from 'zod';
import {
  GetMonitorsData,
  getMonitorsData,
  getMonitorsDataRequest,
  getMonitorsDataResponse,
} from './get-monitors-data';
import {
  MetaNetCursorLimit,
  metaNetCursorLimit,
  metaNetCursorLimitRequest,
  metaNetCursorLimitResponse,
} from './meta-net-cursor-limit';

/**
 * Zod schema for the GetMonitorsOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMonitorsOkResponse = z.lazy(() => {
  return z.object({
    monitors: z.array(getMonitorsData).optional(),
    meta: metaNetCursorLimit.optional(),
  });
});

/**
 * @typedef {GetMonitorsOkResponse} getMonitorsOkResponse
 * @property {GetMonitorsData[]} monitors - A list of monitors.
 * @property {MetaNetCursorLimit} meta - The response's meta information for paginated results.
 */
export type GetMonitorsOkResponse = z.infer<typeof getMonitorsOkResponse>;

/**
 * Zod schema for mapping API responses to the GetMonitorsOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMonitorsOkResponseResponse = z.lazy(() => {
  return z
    .object({
      monitors: z.array(getMonitorsDataResponse).optional(),
      meta: metaNetCursorLimitResponse.optional(),
    })
    .transform((data) => ({
      monitors: data['monitors'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetMonitorsOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMonitorsOkResponseRequest = z.lazy(() => {
  return z
    .object({
      monitors: z.array(getMonitorsDataRequest).optional(),
      meta: metaNetCursorLimitRequest.optional(),
    })
    .transform((data) => ({
      monitors: data['monitors'],
      meta: data['meta'],
    }));
});
