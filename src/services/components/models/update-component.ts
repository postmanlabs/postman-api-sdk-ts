import { z } from 'zod';

/**
 * Zod schema for the UpdateComponent model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateComponent = z.lazy(() => {
  return z.union([z.any(), z.any()]);
});

/**
 * @typedef {UpdateComponent} updateComponent
 */
export type UpdateComponent = z.infer<typeof updateComponent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const updateComponentResponse1 = z.lazy(() => {
  return z.union([z.any(), z.any()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const updateComponentRequest = z.lazy(() => {
  return z.union([z.any(), z.any()]);
});
