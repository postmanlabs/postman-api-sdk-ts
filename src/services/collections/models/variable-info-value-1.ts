import { z } from 'zod';

/**
 * Zod schema for the VariableInfoValue1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const variableInfoValue1 = z.lazy(() => {
  return z.union([z.string(), z.boolean(), z.number()]);
});

/**
 * The key's value.
 * @typedef {VariableInfoValue1} variableInfoValue1
 */
export type VariableInfoValue1 = z.infer<typeof variableInfoValue1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const variableInfoValue1Response = z.lazy(() => {
  return z.union([z.string(), z.boolean(), z.number()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const variableInfoValue1Request = z.lazy(() => {
  return z.union([z.string(), z.boolean(), z.number()]);
});
