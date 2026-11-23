import { z } from 'zod';

/**
 * Zod schema for the DeleteMonitorData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const deleteMonitorData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the monitor.
 * @typedef {DeleteMonitorData} deleteMonitorData
 * @property {string} id - The monitor's ID.
 * @property {string} uid - The monitor's unique ID.
 */
export type DeleteMonitorData = z.infer<typeof deleteMonitorData>;

/**
 * Zod schema for mapping API responses to the DeleteMonitorData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const deleteMonitorDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the DeleteMonitorData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const deleteMonitorDataRequest = z.lazy(() => {
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
