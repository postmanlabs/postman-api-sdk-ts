import { z } from 'zod';

/**
 * Zod schema for the TaskCreated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const taskCreated = z.lazy(() => {
  return z.object({
    taskId: z.string().optional(),
    url: z.string().optional(),
  });
});

/**
 * @typedef {TaskCreated} taskCreated
 * @property {string} taskId - The created task ID. You can use this ID to track the status of the task.
 * @property {string} url - The URL to get or poll the status of a generated spec task.
 */
export type TaskCreated = z.infer<typeof taskCreated>;

/**
 * Zod schema for mapping API responses to the TaskCreated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskCreatedResponse = z.lazy(() => {
  return z
    .object({
      taskId: z.string().optional(),
      url: z.string().optional(),
    })
    .transform((data) => ({
      taskId: data['taskId'],
      url: data['url'],
    }));
});

/**
 * Zod schema for mapping the TaskCreated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taskCreatedRequest = z.lazy(() => {
  return z
    .object({
      taskId: z.string().optional(),
      url: z.string().optional(),
    })
    .transform((data) => ({
      taskId: data['taskId'],
      url: data['url'],
    }));
});
