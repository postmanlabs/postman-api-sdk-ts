import { z } from 'zod';
import { Op, op } from './op';
import {
  UpdateCollectionRolesRolesPath,
  updateCollectionRolesRolesPath,
} from './update-collection-roles-roles-path';
import {
  UpdateCollectionRolesRolesValue,
  updateCollectionRolesRolesValue,
  updateCollectionRolesRolesValueRequest,
  updateCollectionRolesRolesValueResponse,
} from './update-collection-roles-roles-value';

/**
 * Zod schema for the UpdateCollectionRolesRoles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateCollectionRolesRoles = z.lazy(() => {
  return z.object({
    op: op,
    path: updateCollectionRolesRolesPath,
    value: z.array(updateCollectionRolesRolesValue),
  });
});

/**
 *
 * @typedef  {UpdateCollectionRolesRoles} updateCollectionRolesRoles
 * @property {Op} - The operation to perform on the path.
 * @property {UpdateCollectionRolesRolesPath} - The resource to perform the action on.
 * @property {UpdateCollectionRolesRolesValue[]}
 */
export type UpdateCollectionRolesRoles = z.infer<typeof updateCollectionRolesRoles>;

/**
 * Zod schema for mapping API responses to the UpdateCollectionRolesRoles application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionRolesRolesResponse = z.lazy(() => {
  return z
    .object({
      op: op,
      path: updateCollectionRolesRolesPath,
      value: z.array(updateCollectionRolesRolesValueResponse),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the UpdateCollectionRolesRoles application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionRolesRolesRequest = z.lazy(() => {
  return z
    .object({
      op: op,
      path: updateCollectionRolesRolesPath,
      value: z.array(updateCollectionRolesRolesValueRequest),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});
