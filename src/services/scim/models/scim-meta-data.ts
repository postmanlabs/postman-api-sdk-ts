import { z } from 'zod';

/**
 * Zod schema for the ScimMetaData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimMetaData = z.lazy(() => {
  return z.object({
    resourceType: z.string().optional(),
    location: z.string().optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef {ScimMetaData} scimMetaData
 * @property {string} resourceType - The type of resource.
 * @property {string} location - The location of the resource.
 */
export type ScimMetaData = z.infer<typeof scimMetaData>;

/**
 * Zod schema for mapping API responses to the ScimMetaData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimMetaDataResponse = z.lazy(() => {
  return z
    .object({
      resourceType: z.string().optional(),
      location: z.string().optional(),
    })
    .transform((data) => ({
      resourceType: data['resourceType'],
      location: data['location'],
    }));
});

/**
 * Zod schema for mapping the ScimMetaData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimMetaDataRequest = z.lazy(() => {
  return z
    .object({
      resourceType: z.string().optional(),
      location: z.string().optional(),
    })
    .transform((data) => ({
      resourceType: data['resourceType'],
      location: data['location'],
    }));
});
