import { z } from 'zod';
import {
  TaggedUsers,
  taggedUsers,
  taggedUsersRequest,
  taggedUsersResponse,
} from '../collections/models/tagged-users';

/**
 * Zod schema for the CommentCreate model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const commentCreate = z.lazy(() => {
  return z.object({
    body: z.string(),
    threadId: z.number().optional(),
    tags: taggedUsers.optional(),
  });
});

/**
 * Information about the comment.
 * @typedef  {CommentCreate} commentCreate - Information about the comment. - Information about the comment.
 * @property {string} - The contents of the comment.
 * @property {number} - The comment's thread ID. To create a reply on an existing comment, include this property.
 * @property {TaggedUsers} - Information about users tagged in the `body` comment.
 */
export type CommentCreate = z.infer<typeof commentCreate>;

/**
 * Zod schema for mapping API responses to the CommentCreate application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const commentCreateResponse = z.lazy(() => {
  return z
    .object({
      body: z.string(),
      threadId: z.number().optional(),
      tags: taggedUsersResponse.optional(),
    })
    .transform((data) => ({
      body: data['body'],
      threadId: data['threadId'],
      tags: data['tags'],
    }));
});

/**
 * Zod schema for mapping the CommentCreate application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const commentCreateRequest = z.lazy(() => {
  return z
    .object({
      body: z.string(),
      threadId: z.number().optional(),
      tags: taggedUsersRequest.optional(),
    })
    .transform((data) => ({
      body: data['body'],
      threadId: data['threadId'],
      tags: data['tags'],
    }));
});
