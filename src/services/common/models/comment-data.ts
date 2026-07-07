import { z } from 'zod';

/**
 * Zod schema for the CommentData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const commentData = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    threadId: z.number().optional(),
    status: z.string().optional(),
    createdBy: z.number().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    body: z.string().optional(),
  });
});

/**
 * Information about the comment.
 * @typedef  {CommentData} commentData - Information about the comment. - Information about the comment.
 * @property {number} - The comment's ID.
 * @property {number} - The comment's thread ID.
 * @property {CommentDataStatus} - The comment's current status.
 * @property {number} - The user ID of the user who created the comment.
 * @property {string} - The date and time at which the comment was created.
 * @property {string} - The date and time when the comment was last updated.
 * @property {string} - The contents of the comment.
 */
export type CommentData = z.infer<typeof commentData>;

/**
 * Zod schema for mapping API responses to the CommentData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const commentDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      threadId: z.number().optional(),
      status: z.string().optional(),
      createdBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      body: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      threadId: data['threadId'],
      status: data['status'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      body: data['body'],
    }));
});

/**
 * Zod schema for mapping the CommentData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const commentDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      threadId: z.number().optional(),
      status: z.string().optional(),
      createdBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      body: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      threadId: data['threadId'],
      status: data['status'],
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      body: data['body'],
    }));
});
