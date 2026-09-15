import { z } from 'zod';

/**
 * Zod schema for the ScimMetaDataResourceTypeCreatedLastModified model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimMetaDataResourceTypeCreatedLastModified = z.lazy(() => {
  return z.object({
    resourceType: z.string().optional(),
    created: z.string().optional(),
    lastModified: z.string().optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef {ScimMetaDataResourceTypeCreatedLastModified} scimMetaDataResourceTypeCreatedLastModified
 * @property {ScimMetaDataResourceTypeCreatedLastModifiedResourceType} resourceType - The resource type.
 * @property {string} created - The date and time at which the team member was created.
 * @property {string} lastModified - The date and time at which the team member was last modified.
 */
export type ScimMetaDataResourceTypeCreatedLastModified = z.infer<
  typeof scimMetaDataResourceTypeCreatedLastModified
>;

/**
 * Zod schema for mapping API responses to the ScimMetaDataResourceTypeCreatedLastModified application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimMetaDataResourceTypeCreatedLastModifiedResponse = z.lazy(() => {
  return z
    .object({
      resourceType: z.string().optional(),
      created: z.string().optional(),
      lastModified: z.string().optional(),
    })
    .transform((data) => ({
      resourceType: data['resourceType'],
      created: data['created'],
      lastModified: data['lastModified'],
    }));
});

/**
 * Zod schema for mapping the ScimMetaDataResourceTypeCreatedLastModified application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimMetaDataResourceTypeCreatedLastModifiedRequest = z.lazy(() => {
  return z
    .object({
      resourceType: z.string().optional(),
      created: z.string().optional(),
      lastModified: z.string().optional(),
    })
    .transform((data) => ({
      resourceType: data['resourceType'],
      created: data['created'],
      lastModified: data['lastModified'],
    }));
});
