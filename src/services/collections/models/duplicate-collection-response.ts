import { z } from 'zod';
import {
  DuplicateCollectionResponseTask,
  duplicateCollectionResponseTask,
  duplicateCollectionResponseTaskRequest,
  duplicateCollectionResponseTaskResponse,
} from './duplicate-collection-response-task';

/**
 * Zod schema for the DuplicateCollectionResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const duplicateCollectionResponse = z.lazy(() => {
  return z.object({
    task: duplicateCollectionResponseTask.optional(),
  });
});

/**
 *
 * @typedef  {DuplicateCollectionResponse} duplicateCollectionResponse
 * @property {DuplicateCollectionResponseTask}
 */
export type DuplicateCollectionResponse = z.infer<typeof duplicateCollectionResponse>;

/**
 * Zod schema for mapping API responses to the DuplicateCollectionResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const duplicateCollectionResponseResponse = z.lazy(() => {
  return z
    .object({
      task: duplicateCollectionResponseTaskResponse.optional(),
    })
    .transform((data) => ({
      task: data['task'],
    }));
});

/**
 * Zod schema for mapping the DuplicateCollectionResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const duplicateCollectionResponseRequest = z.lazy(() => {
  return z
    .object({
      task: duplicateCollectionResponseTaskRequest.optional(),
    })
    .transform((data) => ({
      task: data['task'],
    }));
});
