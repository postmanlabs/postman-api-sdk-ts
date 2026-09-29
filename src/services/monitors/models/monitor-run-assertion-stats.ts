import { z } from 'zod';

/**
 * Zod schema for the MonitorRunAssertionStats model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRunAssertionStats = z.lazy(() => {
  return z.object({
    total: z.number().optional(),
    failed: z.number().optional(),
  });
});

/**
 * Information about the monitor's tests.
 * @typedef {MonitorRunAssertionStats} monitorRunAssertionStats
 * @property {number} total - The total number of tests performed.
 * @property {number} failed - The total number of test failures.
 */
export type MonitorRunAssertionStats = z.infer<typeof monitorRunAssertionStats>;

/**
 * Zod schema for mapping API responses to the MonitorRunAssertionStats application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunAssertionStatsResponse = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      failed: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
      failed: data['failed'],
    }));
});

/**
 * Zod schema for mapping the MonitorRunAssertionStats application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunAssertionStatsRequest = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
      failed: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
      failed: data['failed'],
    }));
});
