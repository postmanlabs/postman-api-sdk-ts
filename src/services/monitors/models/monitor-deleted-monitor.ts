import { z } from 'zod';

/**
 * Zod schema for the MonitorDeletedMonitor model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorDeletedMonitor = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the monitor.
 * @typedef  {MonitorDeletedMonitor} monitorDeletedMonitor - Information about the monitor. - Information about the monitor.
 * @property {string} - The monitor's ID.
 * @property {string} - The monitor's unique ID.
 */
export type MonitorDeletedMonitor = z.infer<typeof monitorDeletedMonitor>;

/**
 * Zod schema for mapping API responses to the MonitorDeletedMonitor application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorDeletedMonitorResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the MonitorDeletedMonitor application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorDeletedMonitorRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      uid: data['uid'],
    }));
});
