import { z } from 'zod';

/**
 * Zod schema for the WorkspaceMonitors model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceMonitors = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    uid: z.string().optional(),
    deactivated: z.boolean().optional(),
  });
});

/**
 * Information about the monitor.
 * @typedef  {WorkspaceMonitors} workspaceMonitors - Information about the monitor. - Information about the monitor.
 * @property {string} - The monitor's ID.
 * @property {string} - The monitor's name.
 * @property {string} - The monitor's unique ID.
 * @property {boolean} - If true, the monitor is not active.
 */
export type WorkspaceMonitors = z.infer<typeof workspaceMonitors>;

/**
 * Zod schema for mapping API responses to the WorkspaceMonitors application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceMonitorsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      uid: z.string().optional(),
      deactivated: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
      deactivated: data['deactivated'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceMonitors application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceMonitorsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      uid: z.string().optional(),
      deactivated: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      uid: data['uid'],
      deactivated: data['deactivated'],
    }));
});
