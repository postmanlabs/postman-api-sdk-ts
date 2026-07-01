import { z } from 'zod';
import { GetMigrationStatusStatus, getMigrationStatusStatus } from './get-migration-status-status';
import {
  GetMigrationStatusDetails,
  getMigrationStatusDetails,
  getMigrationStatusDetailsRequest,
  getMigrationStatusDetailsResponse,
} from './get-migration-status-details';

/**
 * Zod schema for the GetMigrationStatus model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getMigrationStatus = z.lazy(() => {
  return z.object({
    status: getMigrationStatusStatus.optional(),
    details: getMigrationStatusDetails.optional(),
  });
});

/**
 *
 * @typedef  {GetMigrationStatus} getMigrationStatus
 * @property {GetMigrationStatusStatus} - The status of the migration.
 * @property {GetMigrationStatusDetails}
 */
export type GetMigrationStatus = z.infer<typeof getMigrationStatus>;

/**
 * Zod schema for mapping API responses to the GetMigrationStatus application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMigrationStatusResponse = z.lazy(() => {
  return z
    .object({
      status: getMigrationStatusStatus.optional(),
      details: getMigrationStatusDetailsResponse.optional(),
    })
    .transform((data) => ({
      status: data['status'],
      details: data['details'],
    }));
});

/**
 * Zod schema for mapping the GetMigrationStatus application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getMigrationStatusRequest = z.lazy(() => {
  return z
    .object({
      status: getMigrationStatusStatus.optional(),
      details: getMigrationStatusDetailsRequest.optional(),
    })
    .transform((data) => ({
      status: data['status'],
      details: data['details'],
    }));
});
