import { z } from 'zod';

/**
 * Zod schema for the UpdateWorkspaceRolesData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateWorkspaceRolesData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    user: z.array(z.string()).optional(),
    group: z.array(z.string()).optional(),
    displayName: z.string().optional(),
  });
});

/**
 * @typedef {UpdateWorkspaceRolesData} updateWorkspaceRolesData
 * @property {string} id - The role's ID.
 * @property {string[]} user - A list of user IDs assigned to the role.
 * @property {string[]} group - A list of user group IDs assigned to the role.
 * @property {string} displayName - The role's display name.
 */
export type UpdateWorkspaceRolesData = z.infer<typeof updateWorkspaceRolesData>;

/**
 * Zod schema for mapping API responses to the UpdateWorkspaceRolesData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceRolesDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      user: z.array(z.string()).optional(),
      group: z.array(z.string()).optional(),
      displayName: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      user: data['user'],
      group: data['group'],
      displayName: data['displayName'],
    }));
});

/**
 * Zod schema for mapping the UpdateWorkspaceRolesData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceRolesDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      user: z.array(z.string()).optional(),
      group: z.array(z.string()).optional(),
      displayName: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      user: data['user'],
      group: data['group'],
      displayName: data['displayName'],
    }));
});
