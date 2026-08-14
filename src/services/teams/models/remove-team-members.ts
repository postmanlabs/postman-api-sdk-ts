import { z } from 'zod';
import {
  TeamEntityInfo,
  teamEntityInfo,
  teamEntityInfoRequest,
  teamEntityInfoResponse,
} from './team-entity-info';

/**
 * Zod schema for the RemoveTeamMembers model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removeTeamMembers = z.lazy(() => {
  return z.object({
    entities: z.array(teamEntityInfo).optional(),
  });
});

/**
 * @typedef {RemoveTeamMembers} removeTeamMembers
 * @property {TeamEntityInfo[]} entities - A list of entities to remove.
 */
export type RemoveTeamMembers = z.infer<typeof removeTeamMembers>;

/**
 * Zod schema for mapping API responses to the RemoveTeamMembers application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeTeamMembersResponse = z.lazy(() => {
  return z
    .object({
      entities: z.array(teamEntityInfoResponse).optional(),
    })
    .transform((data) => ({
      entities: data['entities'],
    }));
});

/**
 * Zod schema for mapping the RemoveTeamMembers application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removeTeamMembersRequest = z.lazy(() => {
  return z
    .object({
      entities: z.array(teamEntityInfoRequest).optional(),
    })
    .transform((data) => ({
      entities: data['entities'],
    }));
});
