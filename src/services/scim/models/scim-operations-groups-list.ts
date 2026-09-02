import { z } from 'zod';
import {
  ScimOperationsGroupsListValue,
  scimOperationsGroupsListValue,
  scimOperationsGroupsListValueRequest,
  scimOperationsGroupsListValueResponse,
} from './scim-operations-groups-list-value';

/**
 * Zod schema for the ScimOperationsGroupsList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimOperationsGroupsList = z.lazy(() => {
  return z.object({
    op: z.string().optional(),
    path: z.string().optional(),
    value: scimOperationsGroupsListValue.optional(),
  });
});

/**
 * @typedef {ScimOperationsGroupsList} scimOperationsGroupsList
 * @property {ScimOperationsGroupsListOp} op - The operation to perform.
 * @property {string} path - The operation's path. Include this value when you update a group's members.
 * @property {ScimOperationsGroupsListValue} value - The performed operation's value.
 */
export type ScimOperationsGroupsList = z.infer<typeof scimOperationsGroupsList>;

/**
 * Zod schema for mapping API responses to the ScimOperationsGroupsList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimOperationsGroupsListResponse = z.lazy(() => {
  return z
    .object({
      op: z.string().optional(),
      path: z.string().optional(),
      value: scimOperationsGroupsListValueResponse.optional(),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the ScimOperationsGroupsList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimOperationsGroupsListRequest = z.lazy(() => {
  return z
    .object({
      op: z.string().optional(),
      path: z.string().optional(),
      value: scimOperationsGroupsListValueRequest.optional(),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});
