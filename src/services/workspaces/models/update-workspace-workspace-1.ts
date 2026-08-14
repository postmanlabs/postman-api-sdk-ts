import { z } from 'zod';

/**
 * Zod schema for the UpdateWorkspaceWorkspace1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateWorkspaceWorkspace1 = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    type: z.string().optional(),
    description: z.string().optional(),
    about: z.string().optional(),
  });
});

/**
 * @typedef {UpdateWorkspaceWorkspace1} updateWorkspaceWorkspace1
 * @property {string} name - The workspace's new name.
 * @property {UpdateWorkspaceWorkspaceType} type - The new workspace visibility [type](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility). This property does not support the following workspace visibility changes:
- `private` to `public`, `public` to `private`, and `private` to `personal` for Free and Basic [plans](https://www.postman.com/pricing/).
- `public` to `personal` for team users.

 * @property {string} description - The new workspace description.
 * @property {string} about - A brief summary about the workspace.
 */
export type UpdateWorkspaceWorkspace1 = z.infer<typeof updateWorkspaceWorkspace1>;

/**
 * Zod schema for mapping API responses to the UpdateWorkspaceWorkspace1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceWorkspace1Response = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      type: z.string().optional(),
      description: z.string().optional(),
      about: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      description: data['description'],
      about: data['about'],
    }));
});

/**
 * Zod schema for mapping the UpdateWorkspaceWorkspace1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceWorkspace1Request = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      type: z.string().optional(),
      description: z.string().optional(),
      about: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      description: data['description'],
      about: data['about'],
    }));
});
