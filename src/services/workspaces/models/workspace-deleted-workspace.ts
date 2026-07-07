import { z } from 'zod';

/**
 * Zod schema for the WorkspaceDeletedWorkspace model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceDeletedWorkspace = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
  });
});

/**
 * Information about the deleted workspace.
 * @typedef  {WorkspaceDeletedWorkspace} workspaceDeletedWorkspace - Information about the deleted workspace. - Information about the deleted workspace.
 * @property {string} - The workspace's ID.
 */
export type WorkspaceDeletedWorkspace = z.infer<typeof workspaceDeletedWorkspace>;

/**
 * Zod schema for mapping API responses to the WorkspaceDeletedWorkspace application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceDeletedWorkspaceResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceDeletedWorkspace application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceDeletedWorkspaceRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
    }));
});
