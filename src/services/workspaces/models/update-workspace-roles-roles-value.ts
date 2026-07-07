import { z } from 'zod';

/**
 * Zod schema for the UpdateWorkspaceRolesRolesValue model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateWorkspaceRolesRolesValue = z.lazy(() => {
  return z.object({
    id: z.string(),
    role: z.string(),
  });
});

/**
 * Information about the user, user group, or partner role.
 * @typedef  {UpdateWorkspaceRolesRolesValue} updateWorkspaceRolesRolesValue - Information about the user, user group, or partner role. - Information about the user, user group, or partner role.
 * @property {string} - The user, user group, or partner's ID. To use SCIM IDs for users or user groups, include the `identifierType=scim` header in the request.
 * @property {string} - The user or user group's role ID:
- `1` — Viewer.  Can view and collaborate on all resources.
- `2` — Editor. Can create and edit all resources.
- `3` — Admin. Can manage people and all resources.

For partner roles:
- `4` — Viewer. Can send requests and view workspace resources.
- `5` — Editor. Can create, edit and fork workspace resources.
- `6` — Viewer and Partner Lead. Can view, fork and export workspace resources, and invite partners.
- `7` — Editor and Partner Lead. Can create and edit workspace resources, and invite partners with Editor or Viewer access to the workspace.

 */
export type UpdateWorkspaceRolesRolesValue = z.infer<typeof updateWorkspaceRolesRolesValue>;

/**
 * Zod schema for mapping API responses to the UpdateWorkspaceRolesRolesValue application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceRolesRolesValueResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      role: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      role: data['role'],
    }));
});

/**
 * Zod schema for mapping the UpdateWorkspaceRolesRolesValue application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateWorkspaceRolesRolesValueRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      role: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      role: data['role'],
    }));
});
