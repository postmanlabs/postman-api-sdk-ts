import { z } from 'zod';
import {
  SuccessfulResponseTask,
  successfulResponseTask,
  successfulResponseTaskRequest,
  successfulResponseTaskResponse,
} from './successful-response-task';

/**
 * Zod schema for the AsyncMergePullCollectionForkOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const asyncMergePullCollectionForkOkResponse = z.lazy(() => {
  return z.object({
    task: successfulResponseTask.optional(),
  });
});

/**
 *
 * @typedef  {AsyncMergePullCollectionForkOkResponse} asyncMergePullCollectionForkOkResponse
 * @property {SuccessfulResponseTask} - Information about the merge task.
 */
export type AsyncMergePullCollectionForkOkResponse = z.infer<
  typeof asyncMergePullCollectionForkOkResponse
>;

/**
 * Zod schema for mapping API responses to the AsyncMergePullCollectionForkOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const asyncMergePullCollectionForkOkResponseResponse = z.lazy(() => {
  return z
    .object({
      task: successfulResponseTaskResponse.optional(),
    })
    .transform((data) => ({
      task: data['task'],
    }));
});

/**
 * Zod schema for mapping the AsyncMergePullCollectionForkOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const asyncMergePullCollectionForkOkResponseRequest = z.lazy(() => {
  return z
    .object({
      task: successfulResponseTaskRequest.optional(),
    })
    .transform((data) => ({
      task: data['task'],
    }));
});
