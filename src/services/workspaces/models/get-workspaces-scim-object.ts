import { z } from 'zod';

/**
 * Zod schema for the GetWorkspacesScimObject model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getWorkspacesScimObject = z.lazy(() => {
  return z.object({
    createdBy: z.string().optional(),
  });
});

/**
 * An object containing SCIM user IDs. This object only returns if you pass the `include=scim` query parameter.
 * @typedef {GetWorkspacesScimObject} getWorkspacesScimObject
 * @property {string} createdBy - The SCIM user ID of the user who created the workspace.
 */
export type GetWorkspacesScimObject = z.infer<typeof getWorkspacesScimObject>;

/**
 * Zod schema for mapping API responses to the GetWorkspacesScimObject application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWorkspacesScimObjectResponse = z.lazy(() => {
  return z
    .object({
      createdBy: z.string().optional(),
    })
    .transform((data) => ({
      createdBy: data['createdBy'],
    }));
});

/**
 * Zod schema for mapping the GetWorkspacesScimObject application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getWorkspacesScimObjectRequest = z.lazy(() => {
  return z
    .object({
      createdBy: z.string().optional(),
    })
    .transform((data) => ({
      createdBy: data['createdBy'],
    }));
});
