import { z } from 'zod';
import {
  TaggedUsers,
  taggedUsers,
  taggedUsersRequest,
  taggedUsersResponse,
} from '../api/models/tagged-users';

/**
 * Zod schema for the CommentUpdate model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const commentUpdate = z.lazy(() => {
  return z.object({
    body: z.string(),
    tags: taggedUsers.optional(),
  });
});

/**
 * Information about the comment.
 * @typedef  {CommentUpdate} commentUpdate - Information about the comment. - Information about the comment.
 * @property {string} - The contents of the comment.
 * @property {TaggedUsers} - Information about users tagged in the `body` comment.
 */
export type CommentUpdate = z.infer<typeof commentUpdate>;

/**
 * Zod schema for mapping API responses to the CommentUpdate application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const commentUpdateResponse = z.lazy(() => {
  return z
    .object({
      body: z.string(),
      tags: taggedUsersResponse.optional(),
    })
    .transform((data) => ({
      body: data['body'],
      tags: data['tags'],
    }));
});

/**
 * Zod schema for mapping the CommentUpdate application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const commentUpdateRequest = z.lazy(() => {
  return z
    .object({
      body: z.string(),
      tags: taggedUsersRequest.optional(),
    })
    .transform((data) => ({
      body: data['body'],
      tags: data['tags'],
    }));
});
