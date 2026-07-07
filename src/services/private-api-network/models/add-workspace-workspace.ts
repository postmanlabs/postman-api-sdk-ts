import { z } from 'zod';

/**
 * Zod schema for the AddWorkspaceWorkspace model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addWorkspaceWorkspace = z.lazy(() => {
  return z.object({
    id: z.string(),
    parentFolderId: z.number().optional(),
  });
});

/**
 *
 * @typedef  {AddWorkspaceWorkspace} addWorkspaceWorkspace
 * @property {string} - The workspace's ID.
 * @property {number} - The `0` value.
 */
export type AddWorkspaceWorkspace = z.infer<typeof addWorkspaceWorkspace>;

/**
 * Zod schema for mapping API responses to the AddWorkspaceWorkspace application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addWorkspaceWorkspaceResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      parentFolderId: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      parentFolderId: data['parentFolderId'],
    }));
});

/**
 * Zod schema for mapping the AddWorkspaceWorkspace application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addWorkspaceWorkspaceRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      parentFolderId: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      parentFolderId: data['parentFolderId'],
    }));
});
