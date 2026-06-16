import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseTask model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseTask = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    status: z.string().optional(),
  });
});

/**
 * Information about the merge task.
 * @typedef  {SuccessfulResponseTask} successfulResponseTask - Information about the merge task. - Information about the merge task.
 * @property {string} - The task's ID.
 * @property {string} - The task's status.
 */
export type SuccessfulResponseTask = z.infer<typeof successfulResponseTask>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseTask application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseTaskResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseTask application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseTaskRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      status: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      status: data['status'],
    }));
});
