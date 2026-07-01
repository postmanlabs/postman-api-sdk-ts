import { z } from 'zod';

/**
 * Zod schema for the CommentUpdatedCreatedObjectData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const commentUpdatedCreatedObjectData = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    threadId: z.number().optional(),
    createdBy: z.number().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    body: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CommentUpdatedCreatedObjectData} commentUpdatedCreatedObjectData
 * @property {number} - The comment's ID.
 * @property {number} - The comment's thread ID.
 * @property {number} - The user ID of the user who created the comment.
 * @property {string} - The date and time at which the comment was created.
 * @property {string} - The date and time when the comment was last updated.
 * @property {string} - The contents of the comment.
 */
export type CommentUpdatedCreatedObjectData = z.infer<typeof commentUpdatedCreatedObjectData>;

/**
 * Zod schema for mapping API responses to the CommentUpdatedCreatedObjectData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const commentUpdatedCreatedObjectDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      threadId: z.number().optional(),
      createdBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      body: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      threadId: data['threadId'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      body: data['body'],
    }));
});

/**
 * Zod schema for mapping the CommentUpdatedCreatedObjectData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const commentUpdatedCreatedObjectDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      threadId: z.number().optional(),
      createdBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      body: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      threadId: data['threadId'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      body: data['body'],
    }));
});
