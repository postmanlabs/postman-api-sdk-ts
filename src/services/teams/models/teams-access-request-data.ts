import { z } from 'zod';
import {
  TeamsAccessRequestDataEntityId,
  teamsAccessRequestDataEntityId,
  teamsAccessRequestDataEntityIdRequest,
  teamsAccessRequestDataEntityIdResponse,
} from './teams-access-request-data-entity-id';

/**
 * Zod schema for the TeamsAccessRequestData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const teamsAccessRequestData = z.lazy(() => {
  return z.object({
    entityType: z.string().optional(),
    entityId: teamsAccessRequestDataEntityId.optional(),
    role: z.string().optional(),
    previousRole: z.string().optional().nullable(),
    status: z.string().optional(),
    reason: z.string().optional(),
  });
});

/**
 *
 * @typedef  {TeamsAccessRequestData} teamsAccessRequestData
 * @property {string} - The entity type.
 * @property {TeamsAccessRequestDataEntityId} - The entity's ID.
 * @property {string} - The entity's role.
 * @property {string} - The entity's previous role. This value only returns if the entity's role is modified.
 * @property {string} - The request's status.
 * @property {string} - The reason for the access request. This only returns if there's an issue with the request.
 */
export type TeamsAccessRequestData = z.infer<typeof teamsAccessRequestData>;

/**
 * Zod schema for mapping API responses to the TeamsAccessRequestData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const teamsAccessRequestDataResponse = z.lazy(() => {
  return z
    .object({
      entityType: z.string().optional(),
      entityId: teamsAccessRequestDataEntityIdResponse.optional(),
      role: z.string().optional(),
      previousRole: z.string().optional().nullable(),
      status: z.string().optional(),
      reason: z.string().optional(),
    })
    .transform((data) => ({
      entityType: data['entityType'],
      entityId: data['entityId'],
      role: data['role'],
      previousRole: data['previousRole'],
      status: data['status'],
      reason: data['reason'],
    }));
});

/**
 * Zod schema for mapping the TeamsAccessRequestData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const teamsAccessRequestDataRequest = z.lazy(() => {
  return z
    .object({
      entityType: z.string().optional(),
      entityId: teamsAccessRequestDataEntityIdRequest.optional(),
      role: z.string().optional(),
      previousRole: z.string().optional().nullable(),
      status: z.string().optional(),
      reason: z.string().optional(),
    })
    .transform((data) => ({
      entityType: data['entityType'],
      entityId: data['entityId'],
      role: data['role'],
      previousRole: data['previousRole'],
      status: data['status'],
      reason: data['reason'],
    }));
});
