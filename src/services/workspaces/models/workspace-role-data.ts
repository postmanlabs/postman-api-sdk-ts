import { z } from 'zod';

/**
 * Zod schema for the WorkspaceRoleData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceRoleData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    description: z.string().optional(),
    displayName: z.string().optional(),
  });
});

/**
 * Information about the role.
 * @typedef {WorkspaceRoleData} workspaceRoleData
 * @property {string} id - The role's ID.
 * @property {string} description - The role's description.
 * @property {string} displayName - The role's display name.
 */
export type WorkspaceRoleData = z.infer<typeof workspaceRoleData>;

/**
 * Zod schema for mapping API responses to the WorkspaceRoleData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceRoleDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      description: z.string().optional(),
      displayName: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      description: data['description'],
      displayName: data['displayName'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceRoleData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceRoleDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      description: z.string().optional(),
      displayName: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      description: data['description'],
      displayName: data['displayName'],
    }));
});
