import { z } from 'zod';
import {
  MigrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo,
  migrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo,
  migrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfoRequest,
  migrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfoResponse,
} from './migrate-git-connected-mono-repo-to-new-workspace-workspace-info';
import { GitInfo, gitInfo, gitInfoRequest, gitInfoResponse } from './git-info';

/**
 * Zod schema for the MigrateGitConnectedMonoRepoToNewWorkspace model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const migrateGitConnectedMonoRepoToNewWorkspace = z.lazy(() => {
  return z.object({
    workspaceInfo: migrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo,
    gitInfo: gitInfo,
  });
});

/**
 * @typedef {MigrateGitConnectedMonoRepoToNewWorkspace} migrateGitConnectedMonoRepoToNewWorkspace
 * @property {MigrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfo} workspaceInfo - Information about the new workspace.
 * @property {GitInfo} gitInfo - Information about the connected remote Git mono-repo.
 */
export type MigrateGitConnectedMonoRepoToNewWorkspace = z.infer<
  typeof migrateGitConnectedMonoRepoToNewWorkspace
>;

/**
 * Zod schema for mapping API responses to the MigrateGitConnectedMonoRepoToNewWorkspace application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrateGitConnectedMonoRepoToNewWorkspaceResponse = z.lazy(() => {
  return z
    .object({
      workspaceInfo: migrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfoResponse,
      gitInfo: gitInfoResponse,
    })
    .transform((data) => ({
      workspaceInfo: data['workspaceInfo'],
      gitInfo: data['gitInfo'],
    }));
});

/**
 * Zod schema for mapping the MigrateGitConnectedMonoRepoToNewWorkspace application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrateGitConnectedMonoRepoToNewWorkspaceRequest = z.lazy(() => {
  return z
    .object({
      workspaceInfo: migrateGitConnectedMonoRepoToNewWorkspaceWorkspaceInfoRequest,
      gitInfo: gitInfoRequest,
    })
    .transform((data) => ({
      workspaceInfo: data['workspaceInfo'],
      gitInfo: data['gitInfo'],
    }));
});
