import { z } from 'zod';

/**
 * Zod schema for the CreateTeam model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createTeam = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    description: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {CreateTeam} createTeam
 * @property {string} - The team's name. Accepts only alphanumeric characters and spaces.
 * @property {string} - The team's description.
 */
export type CreateTeam = z.infer<typeof createTeam>;

/**
 * Zod schema for mapping API responses to the CreateTeam application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createTeamResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the CreateTeam application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createTeamRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
    }));
});
