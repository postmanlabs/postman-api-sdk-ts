import { z } from 'zod';
import {
  CommentData,
  commentData,
  commentDataRequest,
  commentDataResponse,
} from '../api/models/comment-data';

/**
 * Zod schema for the CommentResponseObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const commentResponseObject = z.lazy(() => {
  return z.object({
    data: z.array(commentData).optional(),
  });
});

/**
 *
 * @typedef  {CommentResponseObject} commentResponseObject
 * @property {CommentData[]} - A list of comments.
 */
export type CommentResponseObject = z.infer<typeof commentResponseObject>;

/**
 * Zod schema for mapping API responses to the CommentResponseObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const commentResponseObjectResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(commentDataResponse).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the CommentResponseObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const commentResponseObjectRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(commentDataRequest).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
