import { z } from 'zod';
import {
  MigrateToNewWorkspaceWorkspaceInfo,
  migrateToNewWorkspaceWorkspaceInfo,
  migrateToNewWorkspaceWorkspaceInfoRequest,
  migrateToNewWorkspaceWorkspaceInfoResponse,
} from './migrate-to-new-workspace-workspace-info';

/**
 * Zod schema for the MigrateToNewWorkspace model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const migrateToNewWorkspace = z.lazy(() => {
  return z.object({
    workspaceInfo: migrateToNewWorkspaceWorkspaceInfo,
  });
});

/**
 *
 * @typedef  {MigrateToNewWorkspace} migrateToNewWorkspace
 * @property {MigrateToNewWorkspaceWorkspaceInfo} - Information about the new workspace.
 */
export type MigrateToNewWorkspace = z.infer<typeof migrateToNewWorkspace>;

/**
 * Zod schema for mapping API responses to the MigrateToNewWorkspace application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrateToNewWorkspaceResponse = z.lazy(() => {
  return z
    .object({
      workspaceInfo: migrateToNewWorkspaceWorkspaceInfoResponse,
    })
    .transform((data) => ({
      workspaceInfo: data['workspaceInfo'],
    }));
});

/**
 * Zod schema for mapping the MigrateToNewWorkspace application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrateToNewWorkspaceRequest = z.lazy(() => {
  return z
    .object({
      workspaceInfo: migrateToNewWorkspaceWorkspaceInfoRequest,
    })
    .transform((data) => ({
      workspaceInfo: data['workspaceInfo'],
    }));
});
