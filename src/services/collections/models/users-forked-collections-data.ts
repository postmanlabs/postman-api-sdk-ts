import { z } from 'zod';

/**
 * Zod schema for the UsersForkedCollectionsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const usersForkedCollectionsData = z.lazy(() => {
  return z.object({
    forkName: z.string().optional(),
    forkId: z.string().optional(),
    sourceId: z.string().optional(),
    createdAt: z.string().optional(),
  });
});

/**
 * Information about the forked collection.
 * @typedef {UsersForkedCollectionsData} usersForkedCollectionsData
 * @property {string} forkName - The forked collection's label.
 * @property {string} forkId - The forked collection's ID.
 * @property {string} sourceId - The ID of the forked collection's source collection.
 * @property {string} createdAt - The date and time at which the fork was created.
 */
export type UsersForkedCollectionsData = z.infer<typeof usersForkedCollectionsData>;

/**
 * Zod schema for mapping API responses to the UsersForkedCollectionsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const usersForkedCollectionsDataResponse = z.lazy(() => {
  return z
    .object({
      forkName: z.string().optional(),
      forkId: z.string().optional(),
      sourceId: z.string().optional(),
      createdAt: z.string().optional(),
    })
    .transform((data) => ({
      forkName: data['forkName'],
      forkId: data['forkId'],
      sourceId: data['sourceId'],
      createdAt: data['createdAt'],
    }));
});

/**
 * Zod schema for mapping the UsersForkedCollectionsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const usersForkedCollectionsDataRequest = z.lazy(() => {
  return z
    .object({
      forkName: z.string().optional(),
      forkId: z.string().optional(),
      sourceId: z.string().optional(),
      createdAt: z.string().optional(),
    })
    .transform((data) => ({
      forkName: data['forkName'],
      forkId: data['forkId'],
      sourceId: data['sourceId'],
      createdAt: data['createdAt'],
    }));
});
