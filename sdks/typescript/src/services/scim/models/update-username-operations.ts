import { z } from 'zod';
import {
  UpdateUsernameOperationsOp,
  updateUsernameOperationsOp,
} from './update-username-operations-op';
import { OperationsPath, operationsPath } from './operations-path';

/**
 * Zod schema for the UpdateUsernameOperations model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateUsernameOperations = z.lazy(() => {
  return z.object({
    op: updateUsernameOperationsOp.optional(),
    path: operationsPath.optional(),
    value: z.string().optional(),
  });
});

/**
 *
 * @typedef  {UpdateUsernameOperations} updateUsernameOperations
 * @property {UpdateUsernameOperationsOp} - The operation to perform. Accepts the `replace` value.
 * @property {OperationsPath} - The operation's path. Accepts the `userName` value.
 * @property {string} - The user's email address.
 */
export type UpdateUsernameOperations = z.infer<typeof updateUsernameOperations>;

/**
 * Zod schema for mapping API responses to the UpdateUsernameOperations application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateUsernameOperationsResponse = z.lazy(() => {
  return z
    .object({
      op: updateUsernameOperationsOp.optional(),
      path: operationsPath.optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the UpdateUsernameOperations application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateUsernameOperationsRequest = z.lazy(() => {
  return z
    .object({
      op: updateUsernameOperationsOp.optional(),
      path: operationsPath.optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});
