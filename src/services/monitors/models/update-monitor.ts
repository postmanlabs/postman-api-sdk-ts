import { z } from 'zod';
import {
  UpdateMonitorPayload,
  updateMonitorPayload,
  updateMonitorPayloadRequest,
  updateMonitorPayloadResponse,
} from './update-monitor-payload';

/**
 * Zod schema for the UpdateMonitor model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateMonitor = z.lazy(() => {
  return z.object({
    monitor: updateMonitorPayload.optional(),
  });
});

/**
 * @typedef {UpdateMonitor} updateMonitor
 * @property {UpdateMonitorPayload} monitor - Information about the monitor.
 */
export type UpdateMonitor = z.infer<typeof updateMonitor>;

/**
 * Zod schema for mapping API responses to the UpdateMonitor application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMonitorResponse = z.lazy(() => {
  return z
    .object({
      monitor: updateMonitorPayloadResponse.optional(),
    })
    .transform((data) => ({
      monitor: data['monitor'],
    }));
});

/**
 * Zod schema for mapping the UpdateMonitor application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateMonitorRequest = z.lazy(() => {
  return z
    .object({
      monitor: updateMonitorPayloadRequest.optional(),
    })
    .transform((data) => ({
      monitor: data['monitor'],
    }));
});
