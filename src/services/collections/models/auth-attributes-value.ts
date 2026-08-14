import { z } from 'zod';

/**
 * Zod schema for the AuthAttributesValue model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const authAttributesValue = z.lazy(() => {
  return z.union([z.string(), z.array(z.any())]);
});

/**
 * The key's value.
 * @typedef {AuthAttributesValue} authAttributesValue
 */
export type AuthAttributesValue = z.infer<typeof authAttributesValue>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const authAttributesValueResponse = z.lazy(() => {
  return z.union([z.string(), z.array(z.any())]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const authAttributesValueRequest = z.lazy(() => {
  return z.union([z.string(), z.array(z.any())]);
});
