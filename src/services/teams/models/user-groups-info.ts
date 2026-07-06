import { z } from 'zod';

/**
 * Zod schema for the UserGroupsInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const userGroupsInfo = z.lazy(() => {
  return z.object({
    _userGroupId_: z.array(z.string()).optional(),
  });
});

/**
 *
 * @typedef  {UserGroupsInfo} userGroupsInfo
 * @property {TeamRoles[]} - A list of the user group's roles. The array's name is the group's ID.
 */
export type UserGroupsInfo = z.infer<typeof userGroupsInfo>;

/**
 * Zod schema for mapping API responses to the UserGroupsInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const userGroupsInfoResponse = z.lazy(() => {
  return z
    .object({
      '{{userGroupId}}': z.array(z.string()).optional(),
    })
    .transform((data) => ({
      _userGroupId_: data['{{userGroupId}}'],
    }));
});

/**
 * Zod schema for mapping the UserGroupsInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const userGroupsInfoRequest = z.lazy(() => {
  return z
    .object({
      _userGroupId_: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      '{{userGroupId}}': data['_userGroupId_'],
    }));
});
