import { z } from 'zod';
import {
  CollectionVariableInfoValue,
  collectionVariableInfoValue,
  collectionVariableInfoValueRequest,
  collectionVariableInfoValueResponse,
} from './collection-variable-info-value';

/**
 * Zod schema for the CollectionVariableInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionVariableInfo = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    value: collectionVariableInfoValue.optional(),
    disabled: z.boolean().optional(),
  });
});

/**
 * Information about a collection-level variable. Collection variables don't support `id`, `description`, or `enabled` fields. Use `disabled` to control whether a variable is active.
 * @typedef  {CollectionVariableInfo} collectionVariableInfo - Information about a collection-level variable. Collection variables don't support `id`, `description`, or `enabled` fields. Use `disabled` to control whether a variable is active. - Information about a collection-level variable. Collection variables don't support `id`, `description`, or `enabled` fields. Use `disabled` to control whether a variable is active.
 * @property {string} - The variable's key (name).
 * @property {CollectionVariableInfoValue} - The key's value.
 * @property {boolean} - If true, the variable is not enabled.
 */
export type CollectionVariableInfo = z.infer<typeof collectionVariableInfo>;

/**
 * Zod schema for mapping API responses to the CollectionVariableInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionVariableInfoResponse = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: collectionVariableInfoValueResponse.optional(),
      disabled: z.boolean().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      disabled: data['disabled'],
    }));
});

/**
 * Zod schema for mapping the CollectionVariableInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionVariableInfoRequest = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: collectionVariableInfoValueRequest.optional(),
      disabled: z.boolean().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      disabled: data['disabled'],
    }));
});
