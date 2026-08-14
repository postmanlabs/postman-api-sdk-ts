import { z } from 'zod';

/**
 * Zod schema for the AddVariable model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const addVariable = z.lazy(() => {
  return z.object({
    enabled: z.boolean().optional(),
    key: z.string().optional(),
    value: z.string().optional(),
    type: z.string().optional(),
    description: z.string().max(512).optional(),
  });
});

/**
 * Information about the variable.
 * @typedef {AddVariable} addVariable
 * @property {boolean} enabled - If true, the variable is enabled.
 * @property {string} key - The variable's name.
 * @property {string} value - The variable's value.
 * @property {AddVariableType} type - The variable's type:
- `secret` — The variable value is masked.
- `default` — The variable value is visible in plain text.

 * @property {string} description - The variable's description.
 */
export type AddVariable = z.infer<typeof addVariable>;

/**
 * Zod schema for mapping API responses to the AddVariable application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addVariableResponse = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
      key: z.string().optional(),
      value: z.string().optional(),
      type: z.string().optional(),
      description: z.string().max(512).optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
      key: data['key'],
      value: data['value'],
      type: data['type'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the AddVariable application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const addVariableRequest = z.lazy(() => {
  return z
    .object({
      enabled: z.boolean().optional(),
      key: z.string().optional(),
      value: z.string().optional(),
      type: z.string().optional(),
      description: z.string().max(512).optional(),
    })
    .transform((data) => ({
      enabled: data['enabled'],
      key: data['key'],
      value: data['value'],
      type: data['type'],
      description: data['description'],
    }));
});
