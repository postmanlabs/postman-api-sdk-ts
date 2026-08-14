import { z } from 'zod';

/**
 * Zod schema for the TeamCreatedBy model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const teamCreatedBy = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The user ID of the user who created the team.
 * @typedef {TeamCreatedBy} teamCreatedBy
 */
export type TeamCreatedBy = z.infer<typeof teamCreatedBy>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const teamCreatedByResponse = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const teamCreatedByRequest = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
