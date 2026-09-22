import { z } from 'zod';

/**
 * Zod schema for the UpdateWorkspaceWorkspace model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateWorkspaceWorkspace = z.lazy(() => {
  return z.object({
    parentFolderId: z.number().optional(),
  });
});

/**
 * Information about the workspace fields to update.
 * @typedef {UpdateWorkspaceWorkspace} updateWorkspaceWorkspace
 * @property {number} parentFolderId - The workspace's new parent folder ID.
 */
export type UpdateWorkspaceWorkspace = z.infer<typeof updateWorkspaceWorkspace>;

/**
 * Zod schema for mapping API responses to the UpdateWorkspaceWorkspace application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceWorkspaceResponse = z.lazy(() => {
  return z
    .object({
      parentFolderId: z.number().optional(),
    })
    .transform((data) => ({
      parentFolderId: data['parentFolderId'],
    }));
});

/**
 * Zod schema for mapping the UpdateWorkspaceWorkspace application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceWorkspaceRequest = z.lazy(() => {
  return z
    .object({
      parentFolderId: z.number().optional(),
    })
    .transform((data) => ({
      parentFolderId: data['parentFolderId'],
    }));
});
