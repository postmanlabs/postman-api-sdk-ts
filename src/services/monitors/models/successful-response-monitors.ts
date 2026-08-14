import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseMonitors model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseMonitors = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    active: z.boolean().optional(),
    uid: z.string().optional(),
    owner: z.number().optional(),
    collectionUid: z.string().optional(),
    environmentUid: z.string().optional(),
  });
});

/**
 * Information about the monitor.
 * @typedef {SuccessfulResponseMonitors} successfulResponseMonitors
 * @property {string} id - The monitor's ID.
 * @property {string} name - The monitor's name.
 * @property {boolean} active - Whether the monitor is active (`true`) or inactive (`false`).
 * @property {string} uid - The monitor's unique ID.
 * @property {number} owner - The ID of the user that created the monitor.
 * @property {string} collectionUid - The unique ID of the monitor's associated collection.
 * @property {string} environmentUid - The unique ID of the monitor's associated environment.
 */
export type SuccessfulResponseMonitors = z.infer<typeof successfulResponseMonitors>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseMonitors application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMonitorsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      active: z.boolean().optional(),
      uid: z.string().optional(),
      owner: z.number().optional(),
      collectionUid: z.string().optional(),
      environmentUid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      active: data['active'],
      uid: data['uid'],
      owner: data['owner'],
      collectionUid: data['collectionUid'],
      environmentUid: data['environmentUid'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseMonitors application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMonitorsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      active: z.boolean().optional(),
      uid: z.string().optional(),
      owner: z.number().optional(),
      collectionUid: z.string().optional(),
      environmentUid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      active: data['active'],
      uid: data['uid'],
      owner: data['owner'],
      collectionUid: data['collectionUid'],
      environmentUid: data['environmentUid'],
    }));
});
