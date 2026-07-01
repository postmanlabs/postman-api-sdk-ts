import { z } from 'zod';

/**
 * Zod schema for the WorkspaceUpdatedWorkspace model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceUpdatedWorkspace = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
  });
});

/**
 * Information about the updated workspace.
 * @typedef  {WorkspaceUpdatedWorkspace} workspaceUpdatedWorkspace - Information about the updated workspace. - Information about the updated workspace.
 * @property {string} - The workspace's ID.
 * @property {string} - The workspace's name.
 */
export type WorkspaceUpdatedWorkspace = z.infer<typeof workspaceUpdatedWorkspace>;

/**
 * Zod schema for mapping API responses to the WorkspaceUpdatedWorkspace application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceUpdatedWorkspaceResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceUpdatedWorkspace application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceUpdatedWorkspaceRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});
