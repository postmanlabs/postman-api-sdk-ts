import { z } from 'zod';

/**
 * Zod schema for the TeamsAccessRequestDataEntityId model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const teamsAccessRequestDataEntityId = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The entity's ID.
 * @typedef  {TeamsAccessRequestDataEntityId} teamsAccessRequestDataEntityId - The entity's ID. - The entity's ID.
 * @property {number}
 * @property {string}
 */
export type TeamsAccessRequestDataEntityId = z.infer<typeof teamsAccessRequestDataEntityId>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const teamsAccessRequestDataEntityIdResponse = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const teamsAccessRequestDataEntityIdRequest = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
