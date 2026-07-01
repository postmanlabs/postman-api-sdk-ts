import { z } from 'zod';

/**
 * Zod schema for the UpdateCollectionCollectionInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateCollectionCollectionInfo = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  });
});

/**
 * An object that contains the collection's updated name and description.
 * @typedef  {UpdateCollectionCollectionInfo} updateCollectionCollectionInfo - An object that contains the collection's updated name and description. - An object that contains the collection's updated name and description.
 * @property {string} - The collection's updated name.
 * @property {string} - The collection's updated description.
 */
export type UpdateCollectionCollectionInfo = z.infer<typeof updateCollectionCollectionInfo>;

/**
 * Zod schema for mapping API responses to the UpdateCollectionCollectionInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionCollectionInfoResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the UpdateCollectionCollectionInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionCollectionInfoRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
    }));
});
