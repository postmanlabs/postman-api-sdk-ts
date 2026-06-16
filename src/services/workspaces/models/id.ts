import { z } from 'zod';

/**
 * Zod schema for the Id model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const id = z.lazy(() => {
  return z.union([z.string(), z.string()]);
});

/**
 * The workspace element's ID.
 * @typedef  {Id} id - The workspace element's ID. - The workspace element's ID.
 * @property {string}
 * @property {string}
 */
export type Id = z.infer<typeof id>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const idResponse = z.lazy(() => {
  return z.union([z.string(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const idRequest = z.lazy(() => {
  return z.union([z.string(), z.string()]);
});
