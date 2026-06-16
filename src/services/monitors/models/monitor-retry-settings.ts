import { z } from 'zod';

/**
 * Zod schema for the MonitorRetrySettings model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRetrySettings = z.lazy(() => {
  return z.object({
    attempts: z.number().gte(1).lte(2).optional(),
  });
});

/**
 * Information about the monitor's retry settings.
 * @typedef  {MonitorRetrySettings} monitorRetrySettings - Information about the monitor's retry settings. - Information about the monitor's retry settings.
 * @property {number} - The number of times to reattempt a monitor run if it fails or errors. This may impact your [monitor usage](https://learning.postman.com/docs/monitoring-your-api/monitor-usage/#view-monitor-usage).
 */
export type MonitorRetrySettings = z.infer<typeof monitorRetrySettings>;

/**
 * Zod schema for mapping API responses to the MonitorRetrySettings application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRetrySettingsResponse = z.lazy(() => {
  return z
    .object({
      attempts: z.number().gte(1).lte(2).optional(),
    })
    .transform((data) => ({
      attempts: data['attempts'],
    }));
});

/**
 * Zod schema for mapping the MonitorRetrySettings application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRetrySettingsRequest = z.lazy(() => {
  return z
    .object({
      attempts: z.number().gte(1).lte(2).optional(),
    })
    .transform((data) => ({
      attempts: data['attempts'],
    }));
});
