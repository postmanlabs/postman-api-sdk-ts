import { z } from 'zod';
import {
  UpdateActiveStateOperationsValue,
  updateActiveStateOperationsValue,
  updateActiveStateOperationsValueRequest,
  updateActiveStateOperationsValueResponse,
} from './update-active-state-operations-value';

/**
 * Zod schema for the UpdateActiveStateOperations model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateActiveStateOperations = z.lazy(() => {
  return z.object({
    op: z.string().optional(),
    value: updateActiveStateOperationsValue.optional(),
  });
});

/**
 *
 * @typedef  {UpdateActiveStateOperations} updateActiveStateOperations
 * @property {UpdateActiveStateOperationsOp} - The operation to perform.
 * @property {UpdateActiveStateOperationsValue} - The performed operation's value.
 */
export type UpdateActiveStateOperations = z.infer<typeof updateActiveStateOperations>;

/**
 * Zod schema for mapping API responses to the UpdateActiveStateOperations application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateActiveStateOperationsResponse = z.lazy(() => {
  return z
    .object({
      op: z.string().optional(),
      value: updateActiveStateOperationsValueResponse.optional(),
    })
    .transform((data) => ({
      op: data['op'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the UpdateActiveStateOperations application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateActiveStateOperationsRequest = z.lazy(() => {
  return z
    .object({
      op: z.string().optional(),
      value: updateActiveStateOperationsValueRequest.optional(),
    })
    .transform((data) => ({
      op: data['op'],
      value: data['value'],
    }));
});
