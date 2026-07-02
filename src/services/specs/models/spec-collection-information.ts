import { z } from 'zod';

/**
 * Zod schema for the SpecCollectionInformation model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const specCollectionInformation = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    state: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    createdBy: z.number().optional(),
  });
});

/**
 * Information about the API specification's collection.
 * @typedef  {SpecCollectionInformation} specCollectionInformation - Information about the API specification's collection. - Information about the API specification's collection.
 * @property {string} - The collection's ID.
 * @property {string} - The collection's name.
 * @property {SpecCollectionInformationState} - The sync state of the collection and its API specification.
 * @property {string} - The date and time at which the collection was generated.
 * @property {string} - The date and time at which the collection was updated.
 * @property {number} - The user ID of the user that generated the collection.
 */
export type SpecCollectionInformation = z.infer<typeof specCollectionInformation>;

/**
 * Zod schema for mapping API responses to the SpecCollectionInformation application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const specCollectionInformationResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      state: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      createdBy: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      state: data['state'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      createdBy: data['createdBy'],
    }));
});

/**
 * Zod schema for mapping the SpecCollectionInformation application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const specCollectionInformationRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      state: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      createdBy: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      state: data['state'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      createdBy: data['createdBy'],
    }));
});
