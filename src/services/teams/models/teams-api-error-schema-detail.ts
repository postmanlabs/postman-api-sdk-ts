import { z } from 'zod';
import { errorDetails, errorDetailsRequest, errorDetailsResponse } from './error-details';
import {
  invalidEntriesForManageTeamMemberRoles,
  invalidEntriesForManageTeamMemberRolesRequest,
  invalidEntriesForManageTeamMemberRolesResponse,
} from './invalid-entries-for-manage-team-member-roles';

/**
 * Zod schema for the TeamsApiErrorSchemaDetail model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const teamsApiErrorSchemaDetail = z.lazy(() => {
  return z.union([errorDetails, invalidEntriesForManageTeamMemberRoles]);
});

/**
 *
 * @typedef  {TeamsApiErrorSchemaDetail} teamsApiErrorSchemaDetail
 * @property {ErrorDetails} - An explanation about the problem.
 * @property {InvalidEntriesForManageTeamMemberRoles} - An explanation about the problem.
 */
export type TeamsApiErrorSchemaDetail = z.infer<typeof teamsApiErrorSchemaDetail>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const teamsApiErrorSchemaDetailResponse = z.lazy(() => {
  return z.union([errorDetailsResponse, invalidEntriesForManageTeamMemberRolesResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const teamsApiErrorSchemaDetailRequest = z.lazy(() => {
  return z.union([errorDetailsRequest, invalidEntriesForManageTeamMemberRolesRequest]);
});
