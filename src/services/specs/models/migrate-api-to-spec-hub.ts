import { z } from 'zod';
import {
  migrateToExistingWorkspace,
  migrateToExistingWorkspaceRequest,
  migrateToExistingWorkspaceResponse,
} from './migrate-to-existing-workspace';
import {
  migrateToNewWorkspace,
  migrateToNewWorkspaceRequest,
  migrateToNewWorkspaceResponse,
} from './migrate-to-new-workspace';
import {
  migrateGitConnectedMonoRepoToNewWorkspace,
  migrateGitConnectedMonoRepoToNewWorkspaceRequest,
  migrateGitConnectedMonoRepoToNewWorkspaceResponse,
} from './migrate-git-connected-mono-repo-to-new-workspace';

/**
 * Zod schema for the MigrateApiToSpecHub model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const migrateApiToSpecHub = z.lazy(() => {
  return z.union([
    migrateToExistingWorkspace,
    migrateToNewWorkspace,
    migrateGitConnectedMonoRepoToNewWorkspace,
  ]);
});

/**
 * @typedef {MigrateApiToSpecHub} migrateApiToSpecHub
 */
export type MigrateApiToSpecHub = z.infer<typeof migrateApiToSpecHub>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const migrateApiToSpecHubResponse = z.lazy(() => {
  return z.union([
    migrateToExistingWorkspaceResponse,
    migrateToNewWorkspaceResponse,
    migrateGitConnectedMonoRepoToNewWorkspaceResponse,
  ]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const migrateApiToSpecHubRequest = z.lazy(() => {
  return z.union([
    migrateToExistingWorkspaceRequest,
    migrateToNewWorkspaceRequest,
    migrateGitConnectedMonoRepoToNewWorkspaceRequest,
  ]);
});
