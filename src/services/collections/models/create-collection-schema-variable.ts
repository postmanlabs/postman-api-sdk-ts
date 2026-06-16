import { z } from 'zod';
import {
  VariableInfoValue1,
  variableInfoValue1,
  variableInfoValue1Request,
  variableInfoValue1Response,
} from './variable-info-value-1';

/**
 * Zod schema for the CreateCollectionSchemaVariable model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createCollectionSchemaVariable = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    value: variableInfoValue1.optional(),
    description: z.string().max(512).optional(),
    disabled: z.boolean().optional(),
  });
});

/**
 * Information about the variable.
 * @typedef  {CreateCollectionSchemaVariable} createCollectionSchemaVariable - Information about the variable. - Information about the variable.
 * @property {string} - The variable's key (name).
 * @property {VariableInfoValue1} - The key's value.
 * @property {string} - The variable's description.
 * @property {boolean} - If true, the variable is not enabled. Doesn't apply to path parameter variables.
 */
export type CreateCollectionSchemaVariable = z.infer<typeof createCollectionSchemaVariable>;

/**
 * Zod schema for mapping API responses to the CreateCollectionSchemaVariable application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionSchemaVariableResponse = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: variableInfoValue1Response.optional(),
      description: z.string().max(512).optional(),
      disabled: z.boolean().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      description: data['description'],
      disabled: data['disabled'],
    }));
});

/**
 * Zod schema for mapping the CreateCollectionSchemaVariable application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionSchemaVariableRequest = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: variableInfoValue1Request.optional(),
      description: z.string().max(512).optional(),
      disabled: z.boolean().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      description: data['description'],
      disabled: data['disabled'],
    }));
});
