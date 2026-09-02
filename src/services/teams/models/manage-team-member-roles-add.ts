import { z } from 'zod';
import { UsersInfo, usersInfo, usersInfoRequest, usersInfoResponse } from './users-info';
import {
  UserGroupsInfo,
  userGroupsInfo,
  userGroupsInfoRequest,
  userGroupsInfoResponse,
} from './user-groups-info';
import { OrgsInfo, orgsInfo, orgsInfoRequest, orgsInfoResponse } from './orgs-info';
import { TeamsInfo, teamsInfo, teamsInfoRequest, teamsInfoResponse } from './teams-info';

/**
 * Zod schema for the ManageTeamMemberRolesAdd model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manageTeamMemberRolesAdd = z.lazy(() => {
  return z.object({
    users: usersInfo.optional(),
    groups: userGroupsInfo.optional(),
    orgs: orgsInfo.optional(),
    teams: teamsInfo.optional(),
  });
});

/**
 * Information about the bulk `add` operation.
 * @typedef {ManageTeamMemberRolesAdd} manageTeamMemberRolesAdd
 * @property {UsersInfo} users - The role assignments keyed by user ID.
 * @property {UserGroupsInfo} groups - The role assignments keyed by user group ID.
 * @property {OrgsInfo} orgs - The role assignments keyed by organization ID.
 * @property {TeamsInfo} teams - The role assignments keyed by team ID.
 */
export type ManageTeamMemberRolesAdd = z.infer<typeof manageTeamMemberRolesAdd>;

/**
 * Zod schema for mapping API responses to the ManageTeamMemberRolesAdd application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manageTeamMemberRolesAddResponse = z.lazy(() => {
  return z
    .object({
      users: usersInfoResponse.optional(),
      groups: userGroupsInfoResponse.optional(),
      orgs: orgsInfoResponse.optional(),
      teams: teamsInfoResponse.optional(),
    })
    .transform((data) => ({
      users: data['users'],
      groups: data['groups'],
      orgs: data['orgs'],
      teams: data['teams'],
    }));
});

/**
 * Zod schema for mapping the ManageTeamMemberRolesAdd application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manageTeamMemberRolesAddRequest = z.lazy(() => {
  return z
    .object({
      users: usersInfoRequest.optional(),
      groups: userGroupsInfoRequest.optional(),
      orgs: orgsInfoRequest.optional(),
      teams: teamsInfoRequest.optional(),
    })
    .transform((data) => ({
      users: data['users'],
      groups: data['groups'],
      orgs: data['orgs'],
      teams: data['teams'],
    }));
});
