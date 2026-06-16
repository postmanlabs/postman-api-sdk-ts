import { z } from 'zod';

/**
 * Zod schema for the TeamEntityInfoEntityId model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const teamEntityInfoEntityId = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The entity's ID.
 * @typedef  {TeamEntityInfoEntityId} teamEntityInfoEntityId - The entity's ID. - The entity's ID.
 * @property {number}
 * @property {string}
 */
export type TeamEntityInfoEntityId = z.infer<typeof teamEntityInfoEntityId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const teamEntityInfoEntityIdResponse = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const teamEntityInfoEntityIdRequest = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
