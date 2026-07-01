import { z } from 'zod';
import {
  VariableInfoValue2,
  variableInfoValue2,
  variableInfoValue2Request,
  variableInfoValue2Response,
} from './variable-info-value-2';

/**
 * Zod schema for the VariableList2_1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const variableList2_1 = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    key: z.string().optional(),
    description: z.string().max(512).optional(),
    value: variableInfoValue2.optional(),
    enabled: z.boolean().optional(),
    disabled: z.boolean().optional(),
  });
});

/**
 * Information about the variable.
 * @typedef  {VariableList2_1} variableList2_1 - Information about the variable. - Information about the variable.
 * @property {string} - The variable's ID. Doesn't apply to collection-level variables.
 * @property {string} - The variable's key (name).
 * @property {string} - The variable's description.
 * @property {VariableInfoValue2} - The key's value.
 * @property {boolean} - If true, the variable is enabled.
 * @property {boolean} - If true, the variable is not enabled. Doesn't apply to path parameter variables.
 */
export type VariableList2_1 = z.infer<typeof variableList2_1>;

/**
 * Zod schema for mapping API responses to the VariableList2_1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const variableList2_1Response = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      key: z.string().optional(),
      description: z.string().max(512).optional(),
      value: variableInfoValue2Response.optional(),
      enabled: z.boolean().optional(),
      disabled: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      key: data['key'],
      description: data['description'],
      value: data['value'],
      enabled: data['enabled'],
      disabled: data['disabled'],
    }));
});

/**
 * Zod schema for mapping the VariableList2_1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const variableList2_1Request = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      key: z.string().optional(),
      description: z.string().max(512).optional(),
      value: variableInfoValue2Request.optional(),
      enabled: z.boolean().optional(),
      disabled: z.boolean().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      key: data['key'],
      description: data['description'],
      value: data['value'],
      enabled: data['enabled'],
      disabled: data['disabled'],
    }));
});
