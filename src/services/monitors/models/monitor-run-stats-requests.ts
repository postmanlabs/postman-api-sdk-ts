import { z } from 'zod';

/**
 * Zod schema for the MonitorRunStatsRequests model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRunStatsRequests = z.lazy(() => {
  return z.object({
    total: z.number().optional(),
    failed: z.number().optional(),
  });
});

/**
 * Information about the monitor's requests.
 * @typedef {MonitorRunStatsRequests} monitorRunStatsRequests
 * @property {number} total - The total number of requests.
 * @property {number} failed - The number of request failures.
 */
export type MonitorRunStatsRequests = z.infer<typeof monitorRunStatsRequests>;

/**
 * Zod schema for mapping API responses to the MonitorRunStatsRequests application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunStatsRequestsResponse = z.lazy(() => {
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
 * Zod schema for mapping the MonitorRunStatsRequests application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunStatsRequestsRequest = z.lazy(() => {
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
