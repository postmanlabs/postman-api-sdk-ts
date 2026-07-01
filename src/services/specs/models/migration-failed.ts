import { z } from 'zod';

/**
 * Zod schema for the MigrationFailed model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const migrationFailed = z.lazy(() => {
  return z.object({
    reason: z.string().optional(),
  });
});

/**
 * Information about the migration.
 * @typedef  {MigrationFailed} migrationFailed - Information about the migration. - Information about the migration.
 * @property {string} - The reason the migration failed.
 */
export type MigrationFailed = z.infer<typeof migrationFailed>;

/**
 * Zod schema for mapping API responses to the MigrationFailed application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrationFailedResponse = z.lazy(() => {
  return z
    .object({
      reason: z.string().optional(),
    })
    .transform((data) => ({
      reason: data['reason'],
    }));
});

/**
 * Zod schema for mapping the MigrationFailed application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrationFailedRequest = z.lazy(() => {
  return z
    .object({
      reason: z.string().optional(),
    })
    .transform((data) => ({
      reason: data['reason'],
    }));
});
