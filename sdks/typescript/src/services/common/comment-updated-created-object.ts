import { z } from 'zod';
import {
  CommentUpdatedCreatedObjectData,
  commentUpdatedCreatedObjectData,
  commentUpdatedCreatedObjectDataRequest,
  commentUpdatedCreatedObjectDataResponse,
} from '../api/models/comment-updated-created-object-data';

/**
 * Zod schema for the CommentUpdatedCreatedObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const commentUpdatedCreatedObject = z.lazy(() => {
  return z.object({
    data: commentUpdatedCreatedObjectData.optional(),
  });
});

/**
 *
 * @typedef  {CommentUpdatedCreatedObject} commentUpdatedCreatedObject
 * @property {CommentUpdatedCreatedObjectData}
 */
export type CommentUpdatedCreatedObject = z.infer<typeof commentUpdatedCreatedObject>;

/**
 * Zod schema for mapping API responses to the CommentUpdatedCreatedObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const commentUpdatedCreatedObjectResponse = z.lazy(() => {
  return z
    .object({
      data: commentUpdatedCreatedObjectDataResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the CommentUpdatedCreatedObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const commentUpdatedCreatedObjectRequest = z.lazy(() => {
  return z
    .object({
      data: commentUpdatedCreatedObjectDataRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
