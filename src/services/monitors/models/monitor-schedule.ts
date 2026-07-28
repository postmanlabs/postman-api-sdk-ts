import { z } from 'zod';

/**
 * Zod schema for the MonitorSchedule model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorSchedule = z.lazy(() => {
  return z.object({
    cron: z.string().optional(),
    timezone: z.string().optional(),
  });
});

/**
 * Information about the monitor's schedule.
 * @typedef  {MonitorSchedule} monitorSchedule - Information about the monitor's schedule. - Information about the monitor's schedule.
 * @property {string} - The monitor's run frequency, based on the given POSIX cron pattern. For example:
- Every 5 minutes — ``/5 ` ` ` *`
- Every 30 minutes — ``/30 ` ` ` *`
- Every hour — `0 `/1 ` ` ``
- Every 6 hours — `0 `/6 ` ` ``
- Every day at 5 pm — `0 17 ` ` *`
- Every Monday at 12 pm — `0 12 ` ` MON`
- Every weekday (Mon — Fri) at 6 am — `0 6 ` ` MON-FRI`

 * @property {string} - The monitor's [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
 */
export type MonitorSchedule = z.infer<typeof monitorSchedule>;

/**
 * Zod schema for mapping API responses to the MonitorSchedule application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorScheduleResponse = z.lazy(() => {
  return z
    .object({
      cron: z.string().optional(),
      timezone: z.string().optional(),
    })
    .transform((data) => ({
      cron: data['cron'],
      timezone: data['timezone'],
    }));
});

/**
 * Zod schema for mapping the MonitorSchedule application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorScheduleRequest = z.lazy(() => {
  return z
    .object({
      cron: z.string().optional(),
      timezone: z.string().optional(),
    })
    .transform((data) => ({
      cron: data['cron'],
      timezone: data['timezone'],
    }));
});
