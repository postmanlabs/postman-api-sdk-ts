import { z } from 'zod';

/**
 * Zod schema for the CollectionSpecInformation model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionSpecInformation = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    state: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    createdBy: z.number().optional(),
    updatedBy: z.number().optional(),
  });
});

/**
 * Information about the collection's API specification.
 * @typedef  {CollectionSpecInformation} collectionSpecInformation - Information about the collection's API specification. - Information about the collection's API specification.
 * @property {string} - The collection's ID.
 * @property {string} - The collection's name.
 * @property {CollectionSpecInformationState} - The sync state of the collection and its API specification.
 * @property {string} - The date and time at which the collection was generated.
 * @property {string} - The date and time at which the collection was updated.
 * @property {number} - The user ID of the user that generated the collection.
 * @property {number} - The ID of the user who updated the collection.
 */
export type CollectionSpecInformation = z.infer<typeof collectionSpecInformation>;

/**
 * Zod schema for mapping API responses to the CollectionSpecInformation application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionSpecInformationResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      state: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      state: data['state'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
    }));
});

/**
 * Zod schema for mapping the CollectionSpecInformation application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionSpecInformationRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      state: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      state: data['state'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
    }));
});
