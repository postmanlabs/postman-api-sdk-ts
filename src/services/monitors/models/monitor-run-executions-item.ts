import { z } from 'zod';

/**
 * Zod schema for the MonitorRunExecutionsItem model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const monitorRunExecutionsItem = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
  });
});

/**
 * Information about the executed item.
 * @typedef  {MonitorRunExecutionsItem} monitorRunExecutionsItem - Information about the executed item. - Information about the executed item.
 * @property {string} - The executed item's name.
 */
export type MonitorRunExecutionsItem = z.infer<typeof monitorRunExecutionsItem>;

/**
 * Zod schema for mapping API responses to the MonitorRunExecutionsItem application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunExecutionsItemResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the MonitorRunExecutionsItem application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const monitorRunExecutionsItemRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});
