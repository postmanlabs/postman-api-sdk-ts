import { z } from 'zod';

/**
 * Zod schema for the CollectionForksInfoData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionForksInfoData = z.lazy(() => {
  return z.object({
    createdAt: z.string().optional(),
    createdBy: z.string().optional(),
    forkId: z.string().optional(),
    forkName: z.string().optional(),
  });
});

/**
 * Information about the forked collection.
 * @typedef  {CollectionForksInfoData} collectionForksInfoData - Information about the forked collection. - Information about the forked collection.
 * @property {string} - The date and time at which the fork was created.
 * @property {string} - The user who created the collection fork.
 * @property {string} - The forked collection's ID.
 * @property {string} - The forked collection's label.
 */
export type CollectionForksInfoData = z.infer<typeof collectionForksInfoData>;

/**
 * Zod schema for mapping API responses to the CollectionForksInfoData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForksInfoDataResponse = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      forkId: z.string().optional(),
      forkName: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      forkId: data['forkId'],
      forkName: data['forkName'],
    }));
});

/**
 * Zod schema for mapping the CollectionForksInfoData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionForksInfoDataRequest = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      forkId: z.string().optional(),
      forkName: z.string().optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      forkId: data['forkId'],
      forkName: data['forkName'],
    }));
});
