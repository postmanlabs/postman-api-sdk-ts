import { z } from 'zod';

/**
 * Zod schema for the SuccessfulMigration model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulMigration = z.lazy(() => {
  return z.object({
    workspaceId: z.string().optional(),
  });
});

/**
 * Information about the migration.
 * @typedef {SuccessfulMigration} successfulMigration
 * @property {string} workspaceId - The ID of the workspace the definition was migrated to.
 */
export type SuccessfulMigration = z.infer<typeof successfulMigration>;

/**
 * Zod schema for mapping API responses to the SuccessfulMigration application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulMigrationResponse = z.lazy(() => {
  return z
    .object({
      workspaceId: z.string().optional(),
    })
    .transform((data) => ({
      workspaceId: data['workspaceId'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulMigration application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulMigrationRequest = z.lazy(() => {
  return z
    .object({
      workspaceId: z.string().optional(),
    })
    .transform((data) => ({
      workspaceId: data['workspaceId'],
    }));
});
