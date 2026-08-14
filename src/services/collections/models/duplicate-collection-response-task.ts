import { z } from 'zod';

/**
 * Zod schema for the DuplicateCollectionResponseTask model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const duplicateCollectionResponseTask = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    status: z.string().optional(),
    reason: z.string().optional().nullable(),
  });
});

/**
 * @typedef {DuplicateCollectionResponseTask} duplicateCollectionResponseTask
 * @property {string} id - The duplication task's ID.
 * @property {TaskStatus} status - The status of the collection duplication task.
 * @property {string} reason - If the task failed, the reason why it failed to complete.
 */
export type DuplicateCollectionResponseTask = z.infer<typeof duplicateCollectionResponseTask>;

/**
 * Zod schema for mapping API responses to the DuplicateCollectionResponseTask application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const duplicateCollectionResponseTaskResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: z.string().optional(),
      reason: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
      reason: data['reason'],
    }));
});

/**
 * Zod schema for mapping the DuplicateCollectionResponseTask application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const duplicateCollectionResponseTaskRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: z.string().optional(),
      reason: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
      reason: data['reason'],
    }));
});
