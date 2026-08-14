import { z } from 'zod';

/**
 * Zod schema for the GlobalVariableInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const globalVariableInfo = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    type: z.string().optional(),
    value: z.string().optional(),
    enabled: z.boolean().optional(),
    description: z.string().max(512).optional(),
  });
});

/**
 * Information about the global variable.
 * @typedef {GlobalVariableInfo} globalVariableInfo
 * @property {string} key - The variable's name.
 * @property {GlobalVariableInfoType} type - The [type](https://learning.postman.com/docs/sending-requests/variables/#variable-types) of variable.
 * @property {string} value - The variable's value.
 * @property {boolean} enabled - If true, the variable is enabled.
 * @property {string} description - The variable's description.
 */
export type GlobalVariableInfo = z.infer<typeof globalVariableInfo>;

/**
 * Zod schema for mapping API responses to the GlobalVariableInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const globalVariableInfoResponse = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      type: z.string().optional(),
      value: z.string().optional(),
      enabled: z.boolean().optional(),
      description: z.string().max(512).optional(),
    })
    .transform((data) => ({
      key: data['key'],
      type: data['type'],
      value: data['value'],
      enabled: data['enabled'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the GlobalVariableInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const globalVariableInfoRequest = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      type: z.string().optional(),
      value: z.string().optional(),
      enabled: z.boolean().optional(),
      description: z.string().max(512).optional(),
    })
    .transform((data) => ({
      key: data['key'],
      type: data['type'],
      value: data['value'],
      enabled: data['enabled'],
      description: data['description'],
    }));
});
