import { z } from 'zod';

/**
 * Zod schema for the GetWorkspacesWorkspaceData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getWorkspacesWorkspaceData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    type: z.string().optional(),
    visibility: z.string().optional(),
    createdBy: z.string().optional(),
    about: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  });
});

/**
 * Information about the workspace.
 * @typedef {GetWorkspacesWorkspaceData} getWorkspacesWorkspaceData
 * @property {string} id - The workspace's ID.
 * @property {string} name - The workspace's name.
 * @property {WorkspaceType} type - The type of workspace.
 * @property {WorkspaceVisibility} visibility - The workspace's visibility. [Visibility](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/managing-workspaces/#changing-workspace-visibility) determines who can access the workspace:
- `personal` — Only you can access the workspace.
- `team` — All team members can access the workspace.
- `private` — Only invited team members can access the workspace ([``Team`` and ``Enterprise`` plans only](https://www.postman.com/pricing)).
- `public` — Everyone can access the workspace.
- `partner` — Only invited team members and [partners](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) can access the workspace ([``Team`` and ``Enterprise`` plans only](https://www.postman.com/pricing)).

 * @property {string} createdBy - The user who created the workspace. The response only returns workspaces that you have access to.
 * @property {string} about - A brief summary about the workspace.
 * @property {string} createdAt - The date and time at which the workspace was created.
 * @property {string} updatedAt - The date and time at which the workspace was last updated.
 */
export type GetWorkspacesWorkspaceData = z.infer<typeof getWorkspacesWorkspaceData>;

/**
 * Zod schema for mapping API responses to the GetWorkspacesWorkspaceData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWorkspacesWorkspaceDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      type: z.string().optional(),
      visibility: z.string().optional(),
      createdBy: z.string().optional(),
      about: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      type: data['type'],
      visibility: data['visibility'],
      createdBy: data['createdBy'],
      about: data['about'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the GetWorkspacesWorkspaceData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWorkspacesWorkspaceDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      type: z.string().optional(),
      visibility: z.string().optional(),
      createdBy: z.string().optional(),
      about: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      type: data['type'],
      visibility: data['visibility'],
      createdBy: data['createdBy'],
      about: data['about'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
