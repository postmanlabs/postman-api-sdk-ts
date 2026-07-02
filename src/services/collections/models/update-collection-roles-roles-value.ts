import { z } from 'zod';

/**
 * Zod schema for the UpdateCollectionRolesRolesValue model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateCollectionRolesRolesValue = z.lazy(() => {
  return z.object({
    id: z.number(),
    role: z.string(),
  });
});

/**
 * Information about the updated role.
 * @typedef  {UpdateCollectionRolesRolesValue} updateCollectionRolesRolesValue - Information about the updated role. - Information about the updated role.
 * @property {number} - The user, group, or team's ID.
 * @property {ValueRole} - The role type:
- `VIEWER` — Can view, fork, and export collections.
- `EDITOR` — Can edit collections directly.
 */
export type UpdateCollectionRolesRolesValue = z.infer<typeof updateCollectionRolesRolesValue>;

/**
 * Zod schema for mapping API responses to the UpdateCollectionRolesRolesValue application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionRolesRolesValueResponse = z.lazy(() => {
  return z
    .object({
      id: z.number(),
      role: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      role: data['role'],
    }));
});

/**
 * Zod schema for mapping the UpdateCollectionRolesRolesValue application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionRolesRolesValueRequest = z.lazy(() => {
  return z
    .object({
      id: z.number(),
      role: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      role: data['role'],
    }));
});
