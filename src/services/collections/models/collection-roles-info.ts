import { z } from 'zod';
import { Group, group, groupRequest, groupResponse } from './group';
import {
  CollectionRolesInfoTeam,
  collectionRolesInfoTeam,
  collectionRolesInfoTeamRequest,
  collectionRolesInfoTeamResponse,
} from './collection-roles-info-team';
import {
  CollectionRolesInfoUser,
  collectionRolesInfoUser,
  collectionRolesInfoUserRequest,
  collectionRolesInfoUserResponse,
} from './collection-roles-info-user';

/**
 * Zod schema for the CollectionRolesInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRolesInfo = z.lazy(() => {
  return z.object({
    group: z.array(group).optional(),
    team: z.array(collectionRolesInfoTeam).optional(),
    user: z.array(collectionRolesInfoUser).optional(),
  });
});

/**
 * Information about the collection's roles.
 * @typedef {CollectionRolesInfo} collectionRolesInfo
 * @property {Group[]} group - A list of the collection's group roles.
 * @property {CollectionRolesInfoTeam[]} team - A list of the collection's team roles.
 * @property {CollectionRolesInfoUser[]} user - A list of the collection's user roles.
 */
export type CollectionRolesInfo = z.infer<typeof collectionRolesInfo>;

/**
 * Zod schema for mapping API responses to the CollectionRolesInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRolesInfoResponse = z.lazy(() => {
  return z
    .object({
      group: z.array(groupResponse).optional(),
      team: z.array(collectionRolesInfoTeamResponse).optional(),
      user: z.array(collectionRolesInfoUserResponse).optional(),
    })
    .transform((data) => ({
      group: data['group'],
      team: data['team'],
      user: data['user'],
    }));
});

/**
 * Zod schema for mapping the CollectionRolesInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRolesInfoRequest = z.lazy(() => {
  return z
    .object({
      group: z.array(groupRequest).optional(),
      team: z.array(collectionRolesInfoTeamRequest).optional(),
      user: z.array(collectionRolesInfoUserRequest).optional(),
    })
    .transform((data) => ({
      group: data['group'],
      team: data['team'],
      user: data['user'],
    }));
});
