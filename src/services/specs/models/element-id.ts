import { z } from 'zod';

/**
 * Zod schema for the ElementId model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const elementId = z.lazy(() => {
  return z.union([z.string(), z.string()]);
});

/**
 *
 * @typedef  {ElementId} elementId
 * @property {string}
 * @property {string}
 */
export type ElementId = z.infer<typeof elementId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const elementIdResponse = z.lazy(() => {
  return z.union([z.string(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const elementIdRequest = z.lazy(() => {
  return z.union([z.string(), z.string()]);
});
