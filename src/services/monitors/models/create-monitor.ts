import { z } from 'zod';
import {
  CreateMonitorMonitor,
  createMonitorMonitor,
  createMonitorMonitorRequest,
  createMonitorMonitorResponse,
} from './create-monitor-monitor';

/**
 * Zod schema for the CreateMonitor model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createMonitor = z.lazy(() => {
  return z.object({
    monitor: createMonitorMonitor.optional(),
  });
});

/**
 * @typedef {CreateMonitor} createMonitor
 * @property {CreateMonitorMonitor} monitor - Information about the monitor.
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
      monitor: createMonitorMonitorResponse.optional(),
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
      monitor: createMonitorMonitorRequest.optional(),
    })
    .transform((data) => ({
      monitor: data['monitor'],
    }));
});
