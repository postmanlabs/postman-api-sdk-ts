import { z } from 'zod';
import {
  TeamCreatedBy,
  teamCreatedBy,
  teamCreatedByRequest,
  teamCreatedByResponse,
} from './team-created-by';

/**
 * Zod schema for the CreateGetTeamResponseTeam model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createGetTeamResponseTeam = z.lazy(() => {
  return z.object({
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    id: z.number().optional(),
    name: z.string().optional(),
    handle: z.string().optional(),
    description: z.string().optional(),
    organizationId: z.number().optional(),
    createdBy: teamCreatedBy.optional(),
    enabled: z.boolean().optional(),
  });
});

/**
 * Information about the team.
 * @typedef  {CreateGetTeamResponseTeam} createGetTeamResponseTeam - Information about the team. - Information about the team.
 * @property {string} - The date and time at which the team was created.
 * @property {string} - The date and time at which the team was last updated.
 * @property {number} - The team's ID.
 * @property {string} - The team's name.
 * @property {string} - The team's handle.
 * @property {string} - A description about the team.
 * @property {number} - The team's organization ID.
 * @property {TeamCreatedBy} - The user ID of the user who created the team.
 * @property {boolean} - If true, the team is active.
 */
export type CreateGetTeamResponseTeam = z.infer<typeof createGetTeamResponseTeam>;

/**
 * Zod schema for mapping API responses to the CreateGetTeamResponseTeam application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createGetTeamResponseTeamResponse = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      id: z.number().optional(),
      name: z.string().optional(),
      handle: z.string().optional(),
      description: z.string().optional(),
      organizationId: z.number().optional(),
      createdBy: teamCreatedByResponse.optional(),
      enabled: z.boolean().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      id: data['id'],
      name: data['name'],
      handle: data['handle'],
      description: data['description'],
      organizationId: data['organizationId'],
      createdBy: data['createdBy'],
      enabled: data['enabled'],
    }));
});

/**
 * Zod schema for mapping the CreateGetTeamResponseTeam application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createGetTeamResponseTeamRequest = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      id: z.number().optional(),
      name: z.string().optional(),
      handle: z.string().optional(),
      description: z.string().optional(),
      organizationId: z.number().optional(),
      createdBy: teamCreatedByRequest.optional(),
      enabled: z.boolean().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      id: data['id'],
      name: data['name'],
      handle: data['handle'],
      description: data['description'],
      organizationId: data['organizationId'],
      createdBy: data['createdBy'],
      enabled: data['enabled'],
    }));
});
