import { z } from 'zod';
import {
  TaskResourcesResources1,
  taskResourcesResources1,
  taskResourcesResources1Request,
  taskResourcesResources1Response,
} from './task-resources-resources-1';

/**
 * Zod schema for the Details1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const details1 = z.lazy(() => {
  return z.object({
    resources: z.array(taskResourcesResources1).optional(),
  });
});

/**
 * Information about the task's resources.
 * @typedef  {Details1} details1 - Information about the task's resources. - Information about the task's resources.
 * @property {TaskResourcesResources1[]}
 */
export type Details1 = z.infer<typeof details1>;

/**
 * Zod schema for mapping API responses to the Details1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const details1Response = z.lazy(() => {
  return z
    .object({
      resources: z.array(taskResourcesResources1Response).optional(),
    })
    .transform((data) => ({
      resources: data['resources'],
    }));
});

/**
 * Zod schema for mapping the Details1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const details1Request = z.lazy(() => {
  return z
    .object({
      resources: z.array(taskResourcesResources1Request).optional(),
    })
    .transform((data) => ({
      resources: data['resources'],
    }));
});
