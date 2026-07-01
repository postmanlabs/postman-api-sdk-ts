import { z } from 'zod';
import {
  SuccessfulResponseMonitors,
  successfulResponseMonitors,
  successfulResponseMonitorsRequest,
  successfulResponseMonitorsResponse,
} from './successful-response-monitors';
import {
  SuccessfulResponseMeta5,
  successfulResponseMeta5,
  successfulResponseMeta5Request,
  successfulResponseMeta5Response,
} from './successful-response-meta-5';

/**
 * Zod schema for the GetMonitorsOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMonitorsOkResponse = z.lazy(() => {
  return z.object({
    monitors: z.array(successfulResponseMonitors).optional(),
    meta: successfulResponseMeta5.optional(),
  });
});

/**
 *
 * @typedef  {GetMonitorsOkResponse} getMonitorsOkResponse
 * @property {SuccessfulResponseMonitors[]} - A list of monitors.
 * @property {SuccessfulResponseMeta5} - The response's meta information for paginated results.
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
      monitors: z.array(successfulResponseMonitorsResponse).optional(),
      meta: successfulResponseMeta5Response.optional(),
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
      monitors: z.array(successfulResponseMonitorsRequest).optional(),
      meta: successfulResponseMeta5Request.optional(),
    })
    .transform((data) => ({
      monitors: data['monitors'],
      meta: data['meta'],
    }));
});
