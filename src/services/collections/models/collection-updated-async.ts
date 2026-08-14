import { z } from 'zod';
import {
  CollectionUpdatedAsyncTask,
  collectionUpdatedAsyncTask,
  collectionUpdatedAsyncTaskRequest,
  collectionUpdatedAsyncTaskResponse,
} from './collection-updated-async-task';

/**
 * Zod schema for the CollectionUpdatedAsync model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionUpdatedAsync = z.lazy(() => {
  return z.object({
    task: collectionUpdatedAsyncTask.optional(),
  });
});

/**
 * @typedef {CollectionUpdatedAsync} collectionUpdatedAsync
 * @property {CollectionUpdatedAsyncTask} task
 */
export type CollectionUpdatedAsync = z.infer<typeof collectionUpdatedAsync>;

/**
 * Zod schema for mapping API responses to the CollectionUpdatedAsync application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionUpdatedAsyncResponse = z.lazy(() => {
  return z
    .object({
      task: collectionUpdatedAsyncTaskResponse.optional(),
    })
    .transform((data) => ({
      task: data['task'],
    }));
});

/**
 * Zod schema for mapping the CollectionUpdatedAsync application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionUpdatedAsyncRequest = z.lazy(() => {
  return z
    .object({
      task: collectionUpdatedAsyncTaskRequest.optional(),
    })
    .transform((data) => ({
      task: data['task'],
    }));
});
