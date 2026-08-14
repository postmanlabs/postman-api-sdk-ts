import { z } from 'zod';
import {
  InvalidEntriesForManageTeamMemberRolesResult,
  invalidEntriesForManageTeamMemberRolesResult,
  invalidEntriesForManageTeamMemberRolesResultRequest,
  invalidEntriesForManageTeamMemberRolesResultResponse,
} from './invalid-entries-for-manage-team-member-roles-result';

/**
 * Zod schema for the InvalidEntriesForManageTeamMemberRoles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const invalidEntriesForManageTeamMemberRoles = z.lazy(() => {
  return z.object({
    error: z.string().optional(),
    result: z.array(invalidEntriesForManageTeamMemberRolesResult).optional(),
  });
});

/**
 * An explanation about the problem.
 * @typedef {InvalidEntriesForManageTeamMemberRoles} invalidEntriesForManageTeamMemberRoles
 * @property {string} error - The error message.
 * @property {InvalidEntriesForManageTeamMemberRolesResult[]} result - A list of invalid entities.
 */
export type InvalidEntriesForManageTeamMemberRoles = z.infer<
  typeof invalidEntriesForManageTeamMemberRoles
>;

/**
 * Zod schema for mapping API responses to the InvalidEntriesForManageTeamMemberRoles application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invalidEntriesForManageTeamMemberRolesResponse = z.lazy(() => {
  return z
    .object({
      error: z.string().optional(),
      result: z.array(invalidEntriesForManageTeamMemberRolesResultResponse).optional(),
    })
    .transform((data) => ({
      error: data['error'],
      result: data['result'],
    }));
});

/**
 * Zod schema for mapping the InvalidEntriesForManageTeamMemberRoles application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const invalidEntriesForManageTeamMemberRolesRequest = z.lazy(() => {
  return z
    .object({
      error: z.string().optional(),
      result: z.array(invalidEntriesForManageTeamMemberRolesResultRequest).optional(),
    })
    .transform((data) => ({
      error: data['error'],
      result: data['result'],
    }));
});
