import { z } from 'zod';

/**
 * Zod schema for the WorkspaceRolesData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceRolesData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    user: z.array(z.string()).optional(),
    usergroup: z.array(z.string()).optional(),
    partner: z.array(z.string()).optional(),
    displayName: z.string().optional(),
  });
});

/**
 *
 * @typedef  {WorkspaceRolesData} workspaceRolesData
 * @property {string} - The role's ID.
 * @property {string[]} - A list of user IDs assigned to the role.
 * @property {string[]} - A list of user group IDs assigned to the role.
 * @property {string[]} - A list of partner IDs assigned to the role.
 * @property {string} - The role's display name.
 */
export type WorkspaceRolesData = z.infer<typeof workspaceRolesData>;

/**
 * Zod schema for mapping API responses to the WorkspaceRolesData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceRolesDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      user: z.array(z.string()).optional(),
      usergroup: z.array(z.string()).optional(),
      partner: z.array(z.string()).optional(),
      displayName: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      user: data['user'],
      usergroup: data['usergroup'],
      partner: data['partner'],
      displayName: data['displayName'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceRolesData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceRolesDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      user: z.array(z.string()).optional(),
      usergroup: z.array(z.string()).optional(),
      partner: z.array(z.string()).optional(),
      displayName: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      user: data['user'],
      usergroup: data['usergroup'],
      partner: data['partner'],
      displayName: data['displayName'],
    }));
});
