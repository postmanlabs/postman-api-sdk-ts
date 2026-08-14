import { z } from 'zod';

/**
 * Zod schema for the VariableInfoValue2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const variableInfoValue2 = z.lazy(() => {
  return z.union([z.string(), z.boolean(), z.number()]);
});

/**
 * The key's value.
 * @typedef {VariableInfoValue2} variableInfoValue2
 */
export type VariableInfoValue2 = z.infer<typeof variableInfoValue2>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const variableInfoValue2Response = z.lazy(() => {
  return z.union([z.string(), z.boolean(), z.number()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const variableInfoValue2Request = z.lazy(() => {
  return z.union([z.string(), z.boolean(), z.number()]);
});
