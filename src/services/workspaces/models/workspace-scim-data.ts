import { z } from 'zod';

/**
 * Zod schema for the WorkspaceScimData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const workspaceScimData = z.lazy(() => {
  return z.object({
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
  });
});

/**
 * An object containing SCIM user IDs. This object only returns if you pass the `include=scim` query parameter.
 * @typedef {WorkspaceScimData} workspaceScimData
 * @property {string} createdBy - The SCIM user ID of the user who created the workspace.
 * @property {string} updatedBy - The SCIM user ID of the user who last updated the workspace.
 */
export type WorkspaceScimData = z.infer<typeof workspaceScimData>;

/**
 * Zod schema for mapping API responses to the WorkspaceScimData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceScimDataResponse = z.lazy(() => {
  return z
    .object({
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
    })
    .transform((data) => ({
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
    }));
});

/**
 * Zod schema for mapping the WorkspaceScimData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const workspaceScimDataRequest = z.lazy(() => {
  return z
    .object({
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
    })
    .transform((data) => ({
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
    }));
});
