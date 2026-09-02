import { z } from 'zod';

/**
 * Zod schema for the CreateWorkspaceData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createWorkspaceData = z.lazy(() => {
  return z.object({
    name: z.string(),
    type: z.string(),
    description: z.string().optional(),
    about: z.string().optional(),
    teamId: z.string().optional(),
  });
});

/**
 * Information about the workspace.
 * @typedef {CreateWorkspaceData} createWorkspaceData
 * @property {string} name - The workspace's name.
 * @property {CreateWorkspaceDataType} type - The type of workspace:
- `personal`
- `private` — Private workspaces are available on Postman [``Team`` and ``Enterprise`` plans](https://www.postman.com/pricing).
- `public`
- `team`
- `partner` — [Partner Workspaces](https://learning.postman.com/docs/collaborating-in-postman/using-workspaces/partner-workspaces/) are available on Postman [``Team`` and ``Enterprise`` plans](https://www.postman.com/pricing)).

 * @property {string} description - The workspace's description.
 * @property {string} about - A brief summary about the workspace.
 * @property {string} teamId - The team ID to assign to the workspace. This property is required if Postman [Organizations](https://learning.postman.com/docs/administration/managing-your-team/overview) is enabled.
 */
export type CreateWorkspaceData = z.infer<typeof createWorkspaceData>;

/**
 * Zod schema for mapping API responses to the CreateWorkspaceData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWorkspaceDataResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      type: z.string(),
      description: z.string().optional(),
      about: z.string().optional(),
      teamId: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      description: data['description'],
      about: data['about'],
      teamId: data['teamId'],
    }));
});

/**
 * Zod schema for mapping the CreateWorkspaceData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createWorkspaceDataRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      type: z.string(),
      description: z.string().optional(),
      about: z.string().optional(),
      teamId: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      description: data['description'],
      about: data['about'],
      teamId: data['teamId'],
    }));
});
