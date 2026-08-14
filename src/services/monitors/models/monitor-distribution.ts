import { z } from 'zod';

/**
 * Zod schema for the MonitorDistribution model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorDistribution = z.lazy(() => {
  return z.object({
    region: z.string().optional(),
  });
});

/**
 * @typedef {MonitorDistribution} monitorDistribution
 * @property {Region} region - The assigned distribution region.
 */
export type MonitorDistribution = z.infer<typeof monitorDistribution>;

/**
 * Zod schema for mapping API responses to the MonitorDistribution application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorDistributionResponse = z.lazy(() => {
  return z
    .object({
      region: z.string().optional(),
    })
    .transform((data) => ({
      region: data['region'],
    }));
});

/**
 * Zod schema for mapping the MonitorDistribution application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorDistributionRequest = z.lazy(() => {
  return z
    .object({
      region: z.string().optional(),
    })
    .transform((data) => ({
      region: data['region'],
    }));
});
