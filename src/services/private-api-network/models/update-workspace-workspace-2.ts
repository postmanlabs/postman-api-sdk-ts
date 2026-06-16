import { z } from 'zod';

/**
 * Zod schema for the UpdateWorkspaceWorkspace2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateWorkspaceWorkspace2 = z.lazy(() => {
  return z.object({
    parentFolderId: z.number().optional(),
  });
});

/**
 *
 * @typedef  {UpdateWorkspaceWorkspace2} updateWorkspaceWorkspace2
 * @property {number} - The workspace's new parent folder ID.
 */
export type UpdateWorkspaceWorkspace2 = z.infer<typeof updateWorkspaceWorkspace2>;

/**
 * Zod schema for mapping API responses to the UpdateWorkspaceWorkspace2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceWorkspace2Response = z.lazy(() => {
  return z
    .object({
      parentFolderId: z.number().optional(),
    })
    .transform((data) => ({
      parentFolderId: data['parentFolderId'],
    }));
});

/**
 * Zod schema for mapping the UpdateWorkspaceWorkspace2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceWorkspace2Request = z.lazy(() => {
  return z
    .object({
      parentFolderId: z.number().optional(),
    })
    .transform((data) => ({
      parentFolderId: data['parentFolderId'],
    }));
});
