import { z } from 'zod';
import {
  CreateMonitorPayload,
  createMonitorPayload,
  createMonitorPayloadRequest,
  createMonitorPayloadResponse,
} from './create-monitor-payload';

/**
 * Zod schema for the CreateMonitor model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createMonitor = z.lazy(() => {
  return z.object({
    monitor: createMonitorPayload.optional(),
  });
});

/**
 * @typedef {CreateMonitor} createMonitor
 * @property {CreateMonitorPayload} monitor - Information about the monitor.
 */
export type CreateMonitor = z.infer<typeof createMonitor>;

/**
 * Zod schema for mapping API responses to the CreateMonitor application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMonitorResponse = z.lazy(() => {
  return z
    .object({
      monitor: createMonitorPayloadResponse.optional(),
    })
    .transform((data) => ({
      monitor: data['monitor'],
    }));
});

/**
 * Zod schema for mapping the CreateMonitor application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createMonitorRequest = z.lazy(() => {
  return z
    .object({
      monitor: createMonitorPayloadRequest.optional(),
    })
    .transform((data) => ({
      monitor: data['monitor'],
    }));
});
