import { z } from 'zod';
import {
  VariableInfoValue2,
  variableInfoValue2,
  variableInfoValue2Request,
  variableInfoValue2Response,
} from './variable-info-value-2';

/**
 * Zod schema for the CollectionVariable model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionVariable = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    key: z.string().optional(),
    description: z.string().max(512).optional(),
    value: variableInfoValue2.optional(),
    disabled: z.boolean().optional(),
  });
});

/**
 * Information about the variable.
 * @typedef  {CollectionVariable} collectionVariable - Information about the variable. - Information about the variable.
 * @property {string} - The variable's ID. Doesn't apply to collection-level variables.
 * @property {string} - The variable's key (name).
 * @property {string} - The variable's description.
 * @property {VariableInfoValue2} - The key's value.
 * @property {boolean} - If true, the variable is not enabled. Doesn't apply to path parameter variables.
 */
export type CollectionVariable = z.infer<typeof collectionVariable>;

/**
 * Zod schema for mapping API responses to the CollectionVariable application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionVariableResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      key: z.string().optional(),
      description: z.string().max(512).optional(),
      value: variableInfoValue2Response.optional(),
      disabled: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      key: data['key'],
      description: data['description'],
      value: data['value'],
      disabled: data['disabled'],
    }));
});

/**
 * Zod schema for mapping the CollectionVariable application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionVariableRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      key: z.string().optional(),
      description: z.string().max(512).optional(),
      value: variableInfoValue2Request.optional(),
      disabled: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      key: data['key'],
      description: data['description'],
      value: data['value'],
      disabled: data['disabled'],
    }));
});
