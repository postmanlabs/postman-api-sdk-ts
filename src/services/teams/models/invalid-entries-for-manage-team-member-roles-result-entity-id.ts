import { z } from 'zod';

/**
 * Zod schema for the InvalidEntriesForManageTeamMemberRolesResultEntityId model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const invalidEntriesForManageTeamMemberRolesResultEntityId = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The entity ID.
 * @typedef {InvalidEntriesForManageTeamMemberRolesResultEntityId} invalidEntriesForManageTeamMemberRolesResultEntityId
 */
export type InvalidEntriesForManageTeamMemberRolesResultEntityId = z.infer<
  typeof invalidEntriesForManageTeamMemberRolesResultEntityId
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const invalidEntriesForManageTeamMemberRolesResultEntityIdResponse = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const invalidEntriesForManageTeamMemberRolesResultEntityIdRequest = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
