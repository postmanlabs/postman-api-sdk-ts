import { z } from 'zod';

/**
 * Zod schema for the SearchResourceTeamData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchResourceTeamData = z.lazy(() => {
  return z.object({
    id: z.string().optional().nullable(),
    name: z.string().optional().nullable(),
  });
});

/**
 * Information about the team associated with the resource. This returns a null value for the `user` publisher type.
 * @typedef  {SearchResourceTeamData} searchResourceTeamData - Information about the team associated with the resource. This returns a null value for the `user` publisher type. - Information about the team associated with the resource. This returns a null value for the `user` publisher type.
 * @property {string} - The team's ID.
 * @property {string} - The team's name.
 */
export type SearchResourceTeamData = z.infer<typeof searchResourceTeamData>;

/**
 * Zod schema for mapping API responses to the SearchResourceTeamData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchResourceTeamDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the SearchResourceTeamData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchResourceTeamDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional().nullable(),
      name: z.string().optional().nullable(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});
