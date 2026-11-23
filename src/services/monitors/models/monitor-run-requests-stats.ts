import { z } from 'zod';

/**
 * Zod schema for the MonitorRunRequestsStats model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRunRequestsStats = z.lazy(() => {
  return z.object({
    total: z.number().optional(),
    failed: z.number().optional(),
  });
});

/**
 * Information about the monitor's requests.
 * @typedef {MonitorRunRequestsStats} monitorRunRequestsStats
 * @property {number} total - The total number of requests.
 * @property {number} failed - The number of request failures.
 */
export type MonitorRunRequestsStats = z.infer<typeof monitorRunRequestsStats>;

/**
 * Zod schema for mapping API responses to the MonitorRunRequestsStats application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunRequestsStatsResponse = z.lazy(() => {
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
 * Zod schema for mapping the MonitorRunRequestsStats application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunRequestsStatsRequest = z.lazy(() => {
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
