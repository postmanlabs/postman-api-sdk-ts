import { z } from 'zod';

/**
 * Zod schema for the MigrateToExistingWorkspace model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const migrateToExistingWorkspace = z.lazy(() => {
  return z.object({
    workspaceId: z.string(),
  });
});

/**
 *
 * @typedef  {MigrateToExistingWorkspace} migrateToExistingWorkspace
 * @property {string} - The ID of an existing workspace to migrate the definition to.
 */
export type MigrateToExistingWorkspace = z.infer<typeof migrateToExistingWorkspace>;

/**
 * Zod schema for mapping API responses to the MigrateToExistingWorkspace application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrateToExistingWorkspaceResponse = z.lazy(() => {
  return z
    .object({
      workspaceId: z.string(),
    })
    .transform((data) => ({
      workspaceId: data['workspaceId'],
    }));
});

/**
 * Zod schema for mapping the MigrateToExistingWorkspace application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrateToExistingWorkspaceRequest = z.lazy(() => {
  return z
    .object({
      workspaceId: z.string(),
    })
    .transform((data) => ({
      workspaceId: data['workspaceId'],
    }));
});
