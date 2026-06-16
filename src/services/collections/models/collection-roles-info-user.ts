import { z } from 'zod';
import { UserRole, userRole } from './user-role';

/**
 * Zod schema for the CollectionRolesInfoUser model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRolesInfoUser = z.lazy(() => {
  return z.object({
    role: userRole.optional(),
    id: z.number().optional(),
  });
});

/**
 * Information about the user role.
 * @typedef  {CollectionRolesInfoUser} collectionRolesInfoUser - Information about the user role. - Information about the user role.
 * @property {UserRole} - The role type:
- `VIEWER` — Can view, fork, and export collections.
- `EDITOR` — Can edit collections directly.

 * @property {number} - The role's ID.
 */
export type CollectionRolesInfoUser = z.infer<typeof collectionRolesInfoUser>;

/**
 * Zod schema for mapping API responses to the CollectionRolesInfoUser application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRolesInfoUserResponse = z.lazy(() => {
  return z
    .object({
      role: userRole.optional(),
      id: z.number().optional(),
    })
    .transform((data) => ({
      role: data['role'],
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the CollectionRolesInfoUser application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRolesInfoUserRequest = z.lazy(() => {
  return z
    .object({
      role: userRole.optional(),
      id: z.number().optional(),
    })
    .transform((data) => ({
      role: data['role'],
      id: data['id'],
    }));
});
