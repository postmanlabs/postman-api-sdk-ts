import { z } from 'zod';

/**
 * Zod schema for the TaskResourcesResources1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const taskResourcesResources1 = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    url: z.string().optional(),
  });
});

/**
 *
 * @typedef  {TaskResourcesResources1} taskResourcesResources1
 * @property {string} - The ID of the assigned resource.
 * @property {string} - The task's assigned resource URL.
 */
export type TaskResourcesResources1 = z.infer<typeof taskResourcesResources1>;

/**
 * Zod schema for mapping API responses to the TaskResourcesResources1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskResourcesResources1Response = z.lazy(() => {
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
 * Zod schema for mapping the TaskResourcesResources1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskResourcesResources1Request = z.lazy(() => {
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
