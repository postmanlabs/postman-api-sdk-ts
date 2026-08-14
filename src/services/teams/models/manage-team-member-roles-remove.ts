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
 * Zod schema for the ManageTeamMemberRolesRemove model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manageTeamMemberRolesRemove = z.lazy(() => {
  return z.object({
    users: usersInfo.optional(),
    groups: userGroupsInfo.optional(),
    orgs: orgsInfo.optional(),
    teams: teamsInfo.optional(),
  });
});

/**
 * Information about the bulk `remove` operation.
 * @typedef {ManageTeamMemberRolesRemove} manageTeamMemberRolesRemove
 * @property {UsersInfo} users
 * @property {UserGroupsInfo} groups
 * @property {OrgsInfo} orgs
 * @property {TeamsInfo} teams
 */
export type ManageTeamMemberRolesRemove = z.infer<typeof manageTeamMemberRolesRemove>;

/**
 * Zod schema for mapping API responses to the ManageTeamMemberRolesRemove application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manageTeamMemberRolesRemoveResponse = z.lazy(() => {
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
 * Zod schema for mapping the ManageTeamMemberRolesRemove application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manageTeamMemberRolesRemoveRequest = z.lazy(() => {
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
