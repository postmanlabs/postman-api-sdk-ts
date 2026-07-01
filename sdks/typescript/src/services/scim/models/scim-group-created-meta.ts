import { z } from 'zod';

/**
 * Zod schema for the ScimGroupCreatedMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimGroupCreatedMeta = z.lazy(() => {
  return z.object({
    created: z.string().optional(),
    lastModified: z.string().optional(),
    resourceType: z.string().optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef  {ScimGroupCreatedMeta} scimGroupCreatedMeta - The response's non-standard meta information. - The response's non-standard meta information.
 * @property {string} - The date and time at which the group was created.
 * @property {string} - The date and time at which the group was last modified.
 * @property {string} - The SCIM resource type.
 */
export type ScimGroupCreatedMeta = z.infer<typeof scimGroupCreatedMeta>;

/**
 * Zod schema for mapping API responses to the ScimGroupCreatedMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupCreatedMetaResponse = z.lazy(() => {
  return z
    .object({
      created: z.string().optional(),
      lastModified: z.string().optional(),
      resourceType: z.string().optional(),
    })
    .transform((data) => ({
      created: data['created'],
      lastModified: data['lastModified'],
      resourceType: data['resourceType'],
    }));
});

/**
 * Zod schema for mapping the ScimGroupCreatedMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupCreatedMetaRequest = z.lazy(() => {
  return z
    .object({
      created: z.string().optional(),
      lastModified: z.string().optional(),
      resourceType: z.string().optional(),
    })
    .transform((data) => ({
      created: data['created'],
      lastModified: data['lastModified'],
      resourceType: data['resourceType'],
    }));
});
