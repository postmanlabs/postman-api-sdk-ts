import { z } from 'zod';
import {
  UpdateTeamSettingsSettings,
  updateTeamSettingsSettings,
  updateTeamSettingsSettingsRequest,
  updateTeamSettingsSettingsResponse,
} from './update-team-settings-settings';

/**
 * Zod schema for the UpdateTeamSettings model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateTeamSettings = z.lazy(() => {
  return z.object({
    settings: updateTeamSettingsSettings.optional(),
  });
});

/**
 *
 * @typedef  {UpdateTeamSettings} updateTeamSettings
 * @property {UpdateTeamSettingsSettings} - Information about the team settings.
 */
export type UpdateTeamSettings = z.infer<typeof updateTeamSettings>;

/**
 * Zod schema for mapping API responses to the UpdateTeamSettings application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateTeamSettingsResponse = z.lazy(() => {
  return z
    .object({
      settings: updateTeamSettingsSettingsResponse.optional(),
    })
    .transform((data) => ({
      settings: data['settings'],
    }));
});

/**
 * Zod schema for mapping the UpdateTeamSettings application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateTeamSettingsRequest = z.lazy(() => {
  return z
    .object({
      settings: updateTeamSettingsSettingsRequest.optional(),
    })
    .transform((data) => ({
      settings: data['settings'],
    }));
});
