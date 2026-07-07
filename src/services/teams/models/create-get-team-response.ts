import { z } from 'zod';
import {
  CreateGetTeamResponseTeam,
  createGetTeamResponseTeam,
  createGetTeamResponseTeamRequest,
  createGetTeamResponseTeamResponse,
} from './create-get-team-response-team';

/**
 * Zod schema for the CreateGetTeamResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createGetTeamResponse = z.lazy(() => {
  return z.object({
    team: createGetTeamResponseTeam.optional(),
  });
});

/**
 *
 * @typedef  {CreateGetTeamResponse} createGetTeamResponse
 * @property {CreateGetTeamResponseTeam} - Information about the team.
 */
export type CreateGetTeamResponse = z.infer<typeof createGetTeamResponse>;

/**
 * Zod schema for mapping API responses to the CreateGetTeamResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createGetTeamResponseResponse = z.lazy(() => {
  return z
    .object({
      team: createGetTeamResponseTeamResponse.optional(),
    })
    .transform((data) => ({
      team: data['team'],
    }));
});

/**
 * Zod schema for mapping the CreateGetTeamResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createGetTeamResponseRequest = z.lazy(() => {
  return z
    .object({
      team: createGetTeamResponseTeamRequest.optional(),
    })
    .transform((data) => ({
      team: data['team'],
    }));
});
