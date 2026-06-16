import { z } from 'zod';

/**
 * Zod schema for the TaskResourcesResources model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const taskResourcesResources = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    url: z.string().optional(),
  });
});

/**
 *
 * @typedef  {TaskResourcesResources} taskResourcesResources
 * @property {string} - The ID of the assigned resource.
 * @property {string} - The task's assigned resource URL.
 */
export type TaskResourcesResources = z.infer<typeof taskResourcesResources>;

/**
 * Zod schema for mapping API responses to the TaskResourcesResources application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskResourcesResourcesResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      url: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      url: data['url'],
    }));
});

/**
 * Zod schema for mapping the TaskResourcesResources application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskResourcesResourcesRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      url: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      url: data['url'],
    }));
});
