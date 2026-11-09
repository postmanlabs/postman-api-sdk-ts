import { z } from 'zod';
import {
  ScimOperationsUsersActiveListValue,
  scimOperationsUsersActiveListValue,
  scimOperationsUsersActiveListValueRequest,
  scimOperationsUsersActiveListValueResponse,
} from './scim-operations-users-active-list-value';

/**
 * Zod schema for the ScimOperationsUsersActiveList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimOperationsUsersActiveList = z.lazy(() => {
  return z.object({
    op: z.string().optional(),
    value: scimOperationsUsersActiveListValue.optional(),
  });
});

/**
 * @typedef {ScimOperationsUsersActiveList} scimOperationsUsersActiveList
 * @property {ScimOperationsUsersActiveListOp} op - The operation to perform.
 * @property {ScimOperationsUsersActiveListValue} value - The performed operation's value.
 */
export type ScimOperationsUsersActiveList = z.infer<typeof scimOperationsUsersActiveList>;

/**
 * Zod schema for mapping API responses to the ScimOperationsUsersActiveList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimOperationsUsersActiveListResponse = z.lazy(() => {
  return z
    .object({
      op: z.string().optional(),
      value: scimOperationsUsersActiveListValueResponse.optional(),
    })
    .transform((data) => ({
      op: data['op'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the ScimOperationsUsersActiveList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimOperationsUsersActiveListRequest = z.lazy(() => {
  return z
    .object({
      op: z.string().optional(),
      value: scimOperationsUsersActiveListValueRequest.optional(),
    })
    .transform((data) => ({
      op: data['op'],
      value: data['value'],
    }));
});
