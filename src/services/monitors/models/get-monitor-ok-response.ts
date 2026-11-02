import { z } from 'zod';
import {
  GetMonitorData,
  getMonitorData,
  getMonitorDataRequest,
  getMonitorDataResponse,
} from './get-monitor-data';

/**
 * Zod schema for the GetMonitorOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMonitorOkResponse = z.lazy(() => {
  return z.object({
    monitor: getMonitorData.optional(),
  });
});

/**
 * @typedef {GetMonitorOkResponse} getMonitorOkResponse
 * @property {GetMonitorData} monitor - Information about the monitor.
 */
export type GetMonitorOkResponse = z.infer<typeof getMonitorOkResponse>;

/**
 * Zod schema for mapping API responses to the GetMonitorOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMonitorOkResponseResponse = z.lazy(() => {
  return z
    .object({
      monitor: getMonitorDataResponse.optional(),
    })
    .transform((data) => ({
      monitor: data['monitor'],
    }));
});

/**
 * Zod schema for mapping the GetMonitorOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMonitorOkResponseRequest = z.lazy(() => {
  return z
    .object({
      monitor: getMonitorDataRequest.optional(),
    })
    .transform((data) => ({
      monitor: data['monitor'],
    }));
});
