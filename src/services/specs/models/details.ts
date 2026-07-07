import { z } from 'zod';
import {
  TaskResourcesResources2,
  taskResourcesResources2,
  taskResourcesResources2Request,
  taskResourcesResources2Response,
} from './task-resources-resources-2';

/**
 * Zod schema for the Details model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const details = z.lazy(() => {
  return z.object({
    resources: z.array(taskResourcesResources2).optional(),
  });
});

/**
 * Information about the task's resources.
 * @typedef  {Details} details - Information about the task's resources. - Information about the task's resources.
 * @property {TaskResourcesResources2[]}
 */
export type Details = z.infer<typeof details>;

/**
 * Zod schema for mapping API responses to the Details application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const detailsResponse = z.lazy(() => {
  return z
    .object({
      resources: z.array(taskResourcesResources2Response).optional(),
    })
    .transform((data) => ({
      resources: data['resources'],
    }));
});

/**
 * Zod schema for mapping the Details application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const detailsRequest = z.lazy(() => {
  return z
    .object({
      resources: z.array(taskResourcesResources2Request).optional(),
    })
    .transform((data) => ({
      resources: data['resources'],
    }));
});
