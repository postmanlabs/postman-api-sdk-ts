import { z } from 'zod';
import {
  UpdateCollectionRolesRoles,
  updateCollectionRolesRoles,
  updateCollectionRolesRolesRequest,
  updateCollectionRolesRolesResponse,
} from './update-collection-roles-roles';

/**
 * Zod schema for the UpdateCollectionRoles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateCollectionRoles = z.lazy(() => {
  return z.object({
    roles: z.array(updateCollectionRolesRoles),
  });
});

/**
 * @typedef {UpdateCollectionRoles} updateCollectionRoles
 * @property {UpdateCollectionRolesRoles[]} roles
 */
export type UpdateCollectionRoles = z.infer<typeof updateCollectionRoles>;

/**
 * Zod schema for mapping API responses to the UpdateCollectionRoles application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionRolesResponse = z.lazy(() => {
  return z
    .object({
      roles: z.array(updateCollectionRolesRolesResponse),
    })
    .transform((data) => ({
      roles: data['roles'],
    }));
});

/**
 * Zod schema for mapping the UpdateCollectionRoles application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionRolesRequest = z.lazy(() => {
  return z
    .object({
      roles: z.array(updateCollectionRolesRolesRequest),
    })
    .transform((data) => ({
      roles: data['roles'],
    }));
});
