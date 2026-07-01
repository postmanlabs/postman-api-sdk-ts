import { z } from 'zod';

/**
 * Zod schema for the RunInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const runInfo = z.lazy(() => {
  return z.object({
    monitorId: z.string().optional(),
    status: z.string().optional(),
    message: z.string().optional(),
  });
});

/**
 * Information about the monitor.
 * @typedef  {RunInfo} runInfo - Information about the monitor. - Information about the monitor.
 * @property {string} - The monitor's ID.
 * @property {string} - The monitor run's status.
 * @property {string} - A message that details the monitor run's current status.
 */
export type RunInfo = z.infer<typeof runInfo>;

/**
 * Zod schema for mapping API responses to the RunInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const runInfoResponse = z.lazy(() => {
  return z
    .object({
      monitorId: z.string().optional(),
      status: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      monitorId: data['monitorId'],
      status: data['status'],
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the RunInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const runInfoRequest = z.lazy(() => {
  return z
    .object({
      monitorId: z.string().optional(),
      status: z.string().optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      monitorId: data['monitorId'],
      status: data['status'],
      message: data['message'],
    }));
});
