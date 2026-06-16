import { z } from 'zod';

/**
 * Zod schema for the ReviewedBy model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const reviewedBy = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    name: z.string().optional(),
    username: z.string().optional(),
  });
});

/**
 * Information about the user who reviewed the pull request review.
 * @typedef  {ReviewedBy} reviewedBy - Information about the user who reviewed the pull request review. - Information about the user who reviewed the pull request review.
 * @property {number} - The user's ID.
 * @property {string} - The user's name.
 * @property {string} - The user's username.
 */
export type ReviewedBy = z.infer<typeof reviewedBy>;

/**
 * Zod schema for mapping API responses to the ReviewedBy application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const reviewedByResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      name: z.string().optional(),
      username: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      username: data['username'],
    }));
});

/**
 * Zod schema for mapping the ReviewedBy application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const reviewedByRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      name: z.string().optional(),
      username: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      username: data['username'],
    }));
});
