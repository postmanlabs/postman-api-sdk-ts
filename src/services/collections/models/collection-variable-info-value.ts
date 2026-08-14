import { z } from 'zod';

/**
 * Zod schema for the CollectionVariableInfoValue model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionVariableInfoValue = z.lazy(() => {
  return z.union([z.string(), z.boolean(), z.number()]);
});

/**
 * The key's value.
 * @typedef {CollectionVariableInfoValue} collectionVariableInfoValue
 */
export type CollectionVariableInfoValue = z.infer<typeof collectionVariableInfoValue>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionVariableInfoValueResponse = z.lazy(() => {
  return z.union([z.string(), z.boolean(), z.number()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const collectionVariableInfoValueRequest = z.lazy(() => {
  return z.union([z.string(), z.boolean(), z.number()]);
});
