import { z } from 'zod';
import { TeamData, teamData, teamDataRequest, teamDataResponse } from './team-data';
import {
  GetTeamsMetadata,
  getTeamsMetadata,
  getTeamsMetadataRequest,
  getTeamsMetadataResponse,
} from './get-teams-metadata';

/**
 * Zod schema for the GetTeams model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getTeams = z.lazy(() => {
  return z.object({
    data: z.array(teamData).optional(),
    metadata: getTeamsMetadata.optional(),
  });
});

/**
 * @typedef {GetTeams} getTeams
 * @property {TeamData[]} data - A list of teams.
 * @property {GetTeamsMetadata} metadata - The response's meta information for paginated results.
 */
export type GetTeams = z.infer<typeof getTeams>;

/**
 * Zod schema for mapping API responses to the GetTeams application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTeamsResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(teamDataResponse).optional(),
      metadata: getTeamsMetadataResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      metadata: data['metadata'],
    }));
});

/**
 * Zod schema for mapping the GetTeams application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTeamsRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(teamDataRequest).optional(),
      metadata: getTeamsMetadataRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      metadata: data['metadata'],
    }));
});
