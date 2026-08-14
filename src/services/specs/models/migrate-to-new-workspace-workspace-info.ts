import { z } from 'zod';

/**
 * Zod schema for the MigrateToNewWorkspaceWorkspaceInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const migrateToNewWorkspaceWorkspaceInfo = z.lazy(() => {
  return z.object({
    name: z.string(),
  });
});

/**
 * Information about the new workspace.
 * @typedef {MigrateToNewWorkspaceWorkspaceInfo} migrateToNewWorkspaceWorkspaceInfo
 * @property {string} name - The name of the workspace to create and migrate the definition to.
 */
export type MigrateToNewWorkspaceWorkspaceInfo = z.infer<typeof migrateToNewWorkspaceWorkspaceInfo>;

/**
 * Zod schema for mapping API responses to the MigrateToNewWorkspaceWorkspaceInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrateToNewWorkspaceWorkspaceInfoResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the MigrateToNewWorkspaceWorkspaceInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrateToNewWorkspaceWorkspaceInfoRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});
