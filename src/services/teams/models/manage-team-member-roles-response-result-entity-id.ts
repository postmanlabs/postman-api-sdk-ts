import { z } from 'zod';

/**
 * Zod schema for the ManageTeamMemberRolesResponseResultEntityId model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manageTeamMemberRolesResponseResultEntityId = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The entity's ID.
 * @typedef {ManageTeamMemberRolesResponseResultEntityId} manageTeamMemberRolesResponseResultEntityId
 */
export type ManageTeamMemberRolesResponseResultEntityId = z.infer<
  typeof manageTeamMemberRolesResponseResultEntityId
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const manageTeamMemberRolesResponseResultEntityIdResponse = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const manageTeamMemberRolesResponseResultEntityIdRequest = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
