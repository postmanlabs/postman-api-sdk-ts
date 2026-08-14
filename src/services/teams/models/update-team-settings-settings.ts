import { z } from 'zod';

/**
 * Zod schema for the UpdateTeamSettingsSettings model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateTeamSettingsSettings = z.lazy(() => {
  return z.object({
    rfaForAddMember: z.string().optional(),
    rfaForAddCollaborator: z.string().optional(),
  });
});

/**
 * Information about the team settings.
 * @typedef {UpdateTeamSettingsSettings} updateTeamSettingsSettings
 * @property {RfaForAddMember} rfaForAddMember - If enabled, admins must approve any new team members before they can join.
 * @property {RfaForAddCollaborator} rfaForAddCollaborator - If enabled, collaborators require approval before they can access the team's workspaces.
 */
export type UpdateTeamSettingsSettings = z.infer<typeof updateTeamSettingsSettings>;

/**
 * Zod schema for mapping API responses to the UpdateTeamSettingsSettings application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateTeamSettingsSettingsResponse = z.lazy(() => {
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
 * Zod schema for mapping the UpdateTeamSettingsSettings application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateTeamSettingsSettingsRequest = z.lazy(() => {
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
