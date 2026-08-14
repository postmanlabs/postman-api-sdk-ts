import { z } from 'zod';

/**
 * Zod schema for the Schedule model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const schedule = z.lazy(() => {
  return z.object({
    cron: z.string().optional(),
    nextRun: z.string().optional(),
    timezone: z.string().optional(),
  });
});

/**
 * Information about the monitor's schedule.
 * @typedef {Schedule} schedule
 * @property {string} cron - The monitor's POSIX cron frequency value.
 * @property {string} nextRun - The date and time of monitor's next scheduled run.
 * @property {string} timezone - The monitor's timezone.
 */
export type Schedule = z.infer<typeof schedule>;

/**
 * Zod schema for mapping API responses to the Schedule application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scheduleResponse = z.lazy(() => {
  return z
    .object({
      cron: z.string().optional(),
      nextRun: z.string().optional(),
      timezone: z.string().optional(),
    })
    .transform((data) => ({
      cron: data['cron'],
      nextRun: data['nextRun'],
      timezone: data['timezone'],
    }));
});

/**
 * Zod schema for mapping the Schedule application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scheduleRequest = z.lazy(() => {
  return z
    .object({
      cron: z.string().optional(),
      nextRun: z.string().optional(),
      timezone: z.string().optional(),
    })
    .transform((data) => ({
      cron: data['cron'],
      nextRun: data['nextRun'],
      timezone: data['timezone'],
    }));
});
