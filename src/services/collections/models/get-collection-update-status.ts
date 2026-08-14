import { z } from 'zod';

/**
 * Zod schema for the GetCollectionUpdateStatus model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getCollectionUpdateStatus = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    status: z.string().optional(),
  });
});

/**
 * @typedef {GetCollectionUpdateStatus} getCollectionUpdateStatus
 * @property {string} id - The task's ID.
 * @property {GetCollectionUpdateStatusStatus} status - The task's current status.
 */
export type GetCollectionUpdateStatus = z.infer<typeof getCollectionUpdateStatus>;

/**
 * Zod schema for mapping API responses to the GetCollectionUpdateStatus application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getCollectionUpdateStatusResponse = z.lazy(() => {
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
 * Zod schema for mapping the GetCollectionUpdateStatus application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getCollectionUpdateStatusRequest = z.lazy(() => {
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
