import { z } from 'zod';
import {
  TeamDataCreatedBy,
  teamDataCreatedBy,
  teamDataCreatedByRequest,
  teamDataCreatedByResponse,
} from './team-data-created-by';

/**
 * Zod schema for the TeamData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const teamData = z.lazy(() => {
  return z.object({
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    id: z.number().optional(),
    name: z.string().optional(),
    handle: z.string().optional(),
    description: z.string().optional(),
    organizationId: z.number().optional(),
    createdBy: teamDataCreatedBy.optional(),
    enabled: z.boolean().optional(),
    memberCount: z.number().optional(),
  });
});

/**
 * Information about the team.
 * @typedef {TeamData} teamData
 * @property {string} createdAt - The date and time at which the team was created.
 * @property {string} updatedAt - The date and time at which the team was last updated.
 * @property {number} id - The team's ID.
 * @property {string} name - The team's name.
 * @property {string} handle - The team's handle.
 * @property {string} description - A description about the team.
 * @property {number} organizationId - The team's organization ID.
 * @property {TeamDataCreatedBy} createdBy - The user ID of the user who created the team.
 * @property {boolean} enabled - If true, the team is active.
 * @property {number} memberCount - The number of members in the team.
 */
export type TeamData = z.infer<typeof teamData>;

/**
 * Zod schema for mapping API responses to the TeamData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const teamDataResponse = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      id: z.number().optional(),
      name: z.string().optional(),
      handle: z.string().optional(),
      description: z.string().optional(),
      organizationId: z.number().optional(),
      createdBy: teamDataCreatedByResponse.optional(),
      enabled: z.boolean().optional(),
      memberCount: z.number().optional(),
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
      memberCount: data['memberCount'],
    }));
});

/**
 * Zod schema for mapping the TeamData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const teamDataRequest = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      id: z.number().optional(),
      name: z.string().optional(),
      handle: z.string().optional(),
      description: z.string().optional(),
      organizationId: z.number().optional(),
      createdBy: teamDataCreatedByRequest.optional(),
      enabled: z.boolean().optional(),
      memberCount: z.number().optional(),
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
      memberCount: data['memberCount'],
    }));
});
