import { z } from 'zod';

/**
 * Zod schema for the TeamsInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const teamsInfo = z.lazy(() => {
  return z.object({
    _teamId_: z.array(z.string()).optional(),
  });
});

/**
 * The role assignments keyed by team ID.
 * @typedef {TeamsInfo} teamsInfo
 * @property {TeamRoles[]} _teamId_ - A list of the team's roles. The array's name is the team's ID.
 */
export type TeamsInfo = z.infer<typeof teamsInfo>;

/**
 * Zod schema for mapping API responses to the TeamsInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const teamsInfoResponse = z.lazy(() => {
  return z
    .object({
      '{{teamId}}': z.array(z.string()).optional(),
    })
    .transform((data) => ({
      _teamId_: data['{{teamId}}'],
    }));
});

/**
 * Zod schema for mapping the TeamsInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const teamsInfoRequest = z.lazy(() => {
  return z
    .object({
      _teamId_: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      '{{teamId}}': data['_teamId_'],
    }));
});
