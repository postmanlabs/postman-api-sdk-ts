import { z } from 'zod';
import {
  UpdateScimGroupOperationsValue,
  updateScimGroupOperationsValue,
  updateScimGroupOperationsValueRequest,
  updateScimGroupOperationsValueResponse,
} from './update-scim-group-operations-value';

/**
 * Zod schema for the UpdateScimGroupOperations model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateScimGroupOperations = z.lazy(() => {
  return z.object({
    op: z.string().optional(),
    path: z.string().optional(),
    value: updateScimGroupOperationsValue.optional(),
  });
});

/**
 *
 * @typedef  {UpdateScimGroupOperations} updateScimGroupOperations
 * @property {UpdateScimGroupOperationsOp} - The operation to perform.
 * @property {string} - The operation's path. Include this value when you update a group's members.
 * @property {UpdateScimGroupOperationsValue} - The performed operation's value.
 */
export type UpdateScimGroupOperations = z.infer<typeof updateScimGroupOperations>;

/**
 * Zod schema for mapping API responses to the UpdateScimGroupOperations application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateScimGroupOperationsResponse = z.lazy(() => {
  return z
    .object({
      op: z.string().optional(),
      path: z.string().optional(),
      value: updateScimGroupOperationsValueResponse.optional(),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the UpdateScimGroupOperations application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateScimGroupOperationsRequest = z.lazy(() => {
  return z
    .object({
      op: z.string().optional(),
      path: z.string().optional(),
      value: updateScimGroupOperationsValueRequest.optional(),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});
