import { z } from 'zod';

/**
 * Zod schema for the CreateUpdateMonitorResponseMonitor model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createUpdateMonitorResponseMonitor = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    active: z.boolean().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the monitor.
 * @typedef {CreateUpdateMonitorResponseMonitor} createUpdateMonitorResponseMonitor
 * @property {string} id - The monitor's ID.
 * @property {string} name - The monitor's name.
 * @property {boolean} active - If true, the monitor is active and makes calls to the specified URL.
 * @property {string} uid - The monitor's unique ID.
 */
export type CreateUpdateMonitorResponseMonitor = z.infer<typeof createUpdateMonitorResponseMonitor>;

/**
 * Zod schema for mapping API responses to the CreateUpdateMonitorResponseMonitor application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateMonitorResponseMonitorResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      active: z.boolean().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      active: data['active'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the CreateUpdateMonitorResponseMonitor application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateMonitorResponseMonitorRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      active: z.boolean().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      active: data['active'],
      uid: data['uid'],
    }));
});
