import { z } from 'zod';

/**
 * Zod schema for the CollectionUpdatedAsyncTask model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionUpdatedAsyncTask = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    status: z.string().optional(),
  });
});

/**
 * @typedef {CollectionUpdatedAsyncTask} collectionUpdatedAsyncTask
 * @property {string} id - The collection update task's ID. Use this value to get the update's status with the GET `/collection-updates-tasks/{taskId}` endpoint.
 * @property {string} status - The task's current status.
 */
export type CollectionUpdatedAsyncTask = z.infer<typeof collectionUpdatedAsyncTask>;

/**
 * Zod schema for mapping API responses to the CollectionUpdatedAsyncTask application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionUpdatedAsyncTaskResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the CollectionUpdatedAsyncTask application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionUpdatedAsyncTaskRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
    }));
});
