import { z } from 'zod';

/**
 * Zod schema for the CreateGetTeamSettingsResponseSettings model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createGetTeamSettingsResponseSettings = z.lazy(() => {
  return z.object({
    rfaForAddMember: z.string().optional(),
    rfaForAddCollaborator: z.string().optional(),
  });
});

/**
 * Information about the team's settings.
 * @typedef {CreateGetTeamSettingsResponseSettings} createGetTeamSettingsResponseSettings
 * @property {string} rfaForAddMember - If enabled, admins must approve any new team members before they can join.
 * @property {string} rfaForAddCollaborator - If enabled, collaborators require approval before they can access the team's workspaces.
 */
export type CreateGetTeamSettingsResponseSettings = z.infer<
  typeof createGetTeamSettingsResponseSettings
>;

/**
 * Zod schema for mapping API responses to the CreateGetTeamSettingsResponseSettings application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createGetTeamSettingsResponseSettingsResponse = z.lazy(() => {
  return z
    .object({
      rfa_for_add_member: z.string().optional(),
      rfa_for_add_collaborator: z.string().optional(),
    })
    .transform((data) => ({
      rfaForAddMember: data['rfa_for_add_member'],
      rfaForAddCollaborator: data['rfa_for_add_collaborator'],
    }));
});

/**
 * Zod schema for mapping the CreateGetTeamSettingsResponseSettings application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createGetTeamSettingsResponseSettingsRequest = z.lazy(() => {
  return z
    .object({
      rfaForAddMember: z.string().optional(),
      rfaForAddCollaborator: z.string().optional(),
    })
    .transform((data) => ({
      rfa_for_add_member: data['rfaForAddMember'],
      rfa_for_add_collaborator: data['rfaForAddCollaborator'],
    }));
});
