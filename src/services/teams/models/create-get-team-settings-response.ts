import { z } from 'zod';
import {
  CreateGetTeamSettingsResponseSettings,
  createGetTeamSettingsResponseSettings,
  createGetTeamSettingsResponseSettingsRequest,
  createGetTeamSettingsResponseSettingsResponse,
} from './create-get-team-settings-response-settings';

/**
 * Zod schema for the CreateGetTeamSettingsResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createGetTeamSettingsResponse = z.lazy(() => {
  return z.object({
    settings: createGetTeamSettingsResponseSettings.optional(),
  });
});

/**
 * @typedef {CreateGetTeamSettingsResponse} createGetTeamSettingsResponse
 * @property {CreateGetTeamSettingsResponseSettings} settings - Information about the team's settings.
 */
export type CreateGetTeamSettingsResponse = z.infer<typeof createGetTeamSettingsResponse>;

/**
 * Zod schema for mapping API responses to the CreateGetTeamSettingsResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createGetTeamSettingsResponseResponse = z.lazy(() => {
  return z
    .object({
      settings: createGetTeamSettingsResponseSettingsResponse.optional(),
    })
    .transform((data) => ({
      settings: data['settings'],
    }));
});

/**
 * Zod schema for mapping the CreateGetTeamSettingsResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createGetTeamSettingsResponseRequest = z.lazy(() => {
  return z
    .object({
      settings: createGetTeamSettingsResponseSettingsRequest.optional(),
    })
    .transform((data) => ({
      settings: data['settings'],
    }));
});
