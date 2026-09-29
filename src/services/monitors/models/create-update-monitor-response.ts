import { z } from 'zod';
import {
  CreateUpdateMonitorResponseData,
  createUpdateMonitorResponseData,
  createUpdateMonitorResponseDataRequest,
  createUpdateMonitorResponseDataResponse,
} from './create-update-monitor-response-data';

/**
 * Zod schema for the CreateUpdateMonitorResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createUpdateMonitorResponse = z.lazy(() => {
  return z.object({
    monitor: createUpdateMonitorResponseData.optional(),
  });
});

/**
 * @typedef {CreateUpdateMonitorResponse} createUpdateMonitorResponse
 * @property {CreateUpdateMonitorResponseData} monitor - Information about the monitor.
 */
export type CreateUpdateMonitorResponse = z.infer<typeof createUpdateMonitorResponse>;

/**
 * Zod schema for mapping API responses to the CreateUpdateMonitorResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateMonitorResponseResponse = z.lazy(() => {
  return z
    .object({
      monitor: createUpdateMonitorResponseDataResponse.optional(),
    })
    .transform((data) => ({
      monitor: data['monitor'],
    }));
});

/**
 * Zod schema for mapping the CreateUpdateMonitorResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateMonitorResponseRequest = z.lazy(() => {
  return z
    .object({
      monitor: createUpdateMonitorResponseDataRequest.optional(),
    })
    .transform((data) => ({
      monitor: data['monitor'],
    }));
});
