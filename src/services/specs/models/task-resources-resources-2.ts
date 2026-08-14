import { z } from 'zod';

/**
 * Zod schema for the TaskResourcesResources2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const taskResourcesResources2 = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    url: z.string().optional(),
  });
});

/**
 * @typedef {TaskResourcesResources2} taskResourcesResources2
 * @property {string} id - The ID of the assigned resource.
 * @property {string} url - The task's assigned resource URL.
 */
export type TaskResourcesResources2 = z.infer<typeof taskResourcesResources2>;

/**
 * Zod schema for mapping API responses to the TaskResourcesResources2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskResourcesResources2Response = z.lazy(() => {
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
 * Zod schema for mapping the TaskResourcesResources2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskResourcesResources2Request = z.lazy(() => {
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
