import { z } from 'zod';

/**
 * Zod schema for the CollectionRolesInfoTeam model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRolesInfoTeam = z.lazy(() => {
  return z.object({
    role: z.string().optional(),
    id: z.number().optional(),
  });
});

/**
 * Information about the team role.
 * @typedef  {CollectionRolesInfoTeam} collectionRolesInfoTeam - Information about the team role. - Information about the team role.
 * @property {TeamRole} - The role type:
- `VIEWER` — Can view, fork, and export collections.
- `EDITOR` — Can edit collections directly.

 * @property {number} - The role's ID.
 */
export type CollectionRolesInfoTeam = z.infer<typeof collectionRolesInfoTeam>;

/**
 * Zod schema for mapping API responses to the CollectionRolesInfoTeam application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRolesInfoTeamResponse = z.lazy(() => {
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
 * Zod schema for mapping the CollectionRolesInfoTeam application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRolesInfoTeamRequest = z.lazy(() => {
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
