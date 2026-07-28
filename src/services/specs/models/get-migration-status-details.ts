import { z } from 'zod';
import {
  successfulMigration,
  successfulMigrationRequest,
  successfulMigrationResponse,
} from './successful-migration';
import {
  migrationFailed,
  migrationFailedRequest,
  migrationFailedResponse,
} from './migration-failed';

/**
 * Zod schema for the GetMigrationStatusDetails model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMigrationStatusDetails = z.lazy(() => {
  return z.union([successfulMigration, migrationFailed]);
});

/**
 *
 * @typedef  {GetMigrationStatusDetails} getMigrationStatusDetails
 * @property {SuccessfulMigration} - Information about the migration.
 * @property {MigrationFailed} - Information about the migration.
 */
export type GetMigrationStatusDetails = z.infer<typeof getMigrationStatusDetails>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getMigrationStatusDetailsResponse = z.lazy(() => {
  return z.union([successfulMigrationResponse, migrationFailedResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getMigrationStatusDetailsRequest = z.lazy(() => {
  return z.union([successfulMigrationRequest, migrationFailedRequest]);
});
