import { z } from 'zod';

/**
 * Zod schema for the UpdateTeam model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateTeam = z.lazy(() => {
  return z.object({
    name: z.string().min(1).max(64),
  });
});

/**
 * @typedef {UpdateTeam} updateTeam
 * @property {string} name - The team's new name. Accepts only alphanumeric characters and spaces, and must be unique in the organization.
 */
export type UpdateTeam = z.infer<typeof updateTeam>;

/**
 * Zod schema for mapping API responses to the UpdateTeam application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateTeamResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().min(1).max(64),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the UpdateTeam application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateTeamRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().min(1).max(64),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});
