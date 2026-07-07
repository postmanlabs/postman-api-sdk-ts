import { z } from 'zod';

/**
 * Zod schema for the MigrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const migrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo = z.lazy(() => {
  return z.object({
    name: z.string(),
  });
});

/**
 * Information about the new workspace.
 * @typedef  {MigrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo} migrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo - Information about the new workspace. - Information about the new workspace.
 * @property {string} - The name of the workspace to create and migrate the definition to.
 */
export type MigrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo = z.infer<
  typeof migrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo
>;

/**
 * Zod schema for mapping API responses to the MigrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfoResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the MigrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfoRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});
