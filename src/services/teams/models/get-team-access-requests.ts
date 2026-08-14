import { z } from 'zod';
import {
  GetTeamAccessRequestsData,
  getTeamAccessRequestsData,
  getTeamAccessRequestsDataRequest,
  getTeamAccessRequestsDataResponse,
} from './get-team-access-requests-data';
import {
  GetTeamsMetadata,
  getTeamsMetadata,
  getTeamsMetadataRequest,
  getTeamsMetadataResponse,
} from './get-teams-metadata';

/**
 * Zod schema for the GetTeamAccessRequests model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getTeamAccessRequests = z.lazy(() => {
  return z.object({
    data: z.array(getTeamAccessRequestsData).optional(),
    metadata: getTeamsMetadata.optional(),
  });
});

/**
 * @typedef {GetTeamAccessRequests} getTeamAccessRequests
 * @property {GetTeamAccessRequestsData[]} data - A list of access requests.
 * @property {GetTeamsMetadata} metadata - The response's meta information for paginated results.
 */
export type GetTeamAccessRequests = z.infer<typeof getTeamAccessRequests>;

/**
 * Zod schema for mapping API responses to the GetTeamAccessRequests application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTeamAccessRequestsResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(getTeamAccessRequestsDataResponse).optional(),
      metadata: getTeamsMetadataResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      metadata: data['metadata'],
    }));
});

/**
 * Zod schema for mapping the GetTeamAccessRequests application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTeamAccessRequestsRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(getTeamAccessRequestsDataRequest).optional(),
      metadata: getTeamsMetadataRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      metadata: data['metadata'],
    }));
});
