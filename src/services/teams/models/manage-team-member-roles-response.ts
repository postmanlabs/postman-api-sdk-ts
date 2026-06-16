import { z } from 'zod';
import {
  ManageTeamMemberRolesResponseResult,
  manageTeamMemberRolesResponseResult,
  manageTeamMemberRolesResponseResultRequest,
  manageTeamMemberRolesResponseResultResponse,
} from './manage-team-member-roles-response-result';

/**
 * Zod schema for the ManageTeamMemberRolesResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const manageTeamMemberRolesResponse = z.lazy(() => {
  return z.object({
    result: z.array(manageTeamMemberRolesResponseResult).optional(),
  });
});

/**
 *
 * @typedef  {ManageTeamMemberRolesResponse} manageTeamMemberRolesResponse
 * @property {ManageTeamMemberRolesResponseResult[]}
 */
export type ManageTeamMemberRolesResponse = z.infer<typeof manageTeamMemberRolesResponse>;

/**
 * Zod schema for mapping API responses to the ManageTeamMemberRolesResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manageTeamMemberRolesResponseResponse = z.lazy(() => {
  return z
    .object({
      result: z.array(manageTeamMemberRolesResponseResultResponse).optional(),
    })
    .transform((data) => ({
      result: data['result'],
    }));
});

/**
 * Zod schema for mapping the ManageTeamMemberRolesResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const manageTeamMemberRolesResponseRequest = z.lazy(() => {
  return z
    .object({
      result: z.array(manageTeamMemberRolesResponseResultRequest).optional(),
    })
    .transform((data) => ({
      result: data['result'],
    }));
});
