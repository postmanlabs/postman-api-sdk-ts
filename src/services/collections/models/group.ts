import { z } from 'zod';

/**
 * Zod schema for the Group model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const group = z.lazy(() => {
  return z.object({
    role: z.string().optional(),
    id: z.number().optional(),
  });
});

/**
 * Information about the group role.
 * @typedef  {Group} group - Information about the group role. - Information about the group role.
 * @property {GroupRole} - The role type:
- `VIEWER` — Can view, fork, and export collections.
- `EDITOR` — Can edit collections directly.

 * @property {number} - The role's ID.
 */
export type Group = z.infer<typeof group>;

/**
 * Zod schema for mapping API responses to the Group application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const groupResponse = z.lazy(() => {
  return z
    .object({
      role: z.string().optional(),
      id: z.number().optional(),
    })
    .transform((data) => ({
      role: data['role'],
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the Group application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const groupRequest = z.lazy(() => {
  return z
    .object({
      role: z.string().optional(),
      id: z.number().optional(),
    })
    .transform((data) => ({
      role: data['role'],
      id: data['id'],
    }));
});
