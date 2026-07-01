import { z } from 'zod';
import { MetaResourceType, metaResourceType } from './meta-resource-type';

/**
 * Zod schema for the ScimUserCreatedMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimUserCreatedMeta = z.lazy(() => {
  return z.object({
    created: z.string().optional(),
    lastModified: z.string().optional(),
    resourceType: metaResourceType.optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef  {ScimUserCreatedMeta} scimUserCreatedMeta - The response's non-standard meta information. - The response's non-standard meta information.
 * @property {string} - The date and time at which the user was created.
 * @property {string} - The date and time at which the user was last modified.
 * @property {MetaResourceType} - The SCIM resource type.
 */
export type ScimUserCreatedMeta = z.infer<typeof scimUserCreatedMeta>;

/**
 * Zod schema for mapping API responses to the ScimUserCreatedMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUserCreatedMetaResponse = z.lazy(() => {
  return z
    .object({
      created: z.string().optional(),
      lastModified: z.string().optional(),
      resourceType: metaResourceType.optional(),
    })
    .transform((data) => ({
      created: data['created'],
      lastModified: data['lastModified'],
      resourceType: data['resourceType'],
    }));
});

/**
 * Zod schema for mapping the ScimUserCreatedMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUserCreatedMetaRequest = z.lazy(() => {
  return z
    .object({
      created: z.string().optional(),
      lastModified: z.string().optional(),
      resourceType: metaResourceType.optional(),
    })
    .transform((data) => ({
      created: data['created'],
      lastModified: data['lastModified'],
      resourceType: data['resourceType'],
    }));
});
