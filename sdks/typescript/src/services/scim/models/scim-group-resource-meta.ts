import { z } from 'zod';

/**
 * Zod schema for the ScimGroupResourceMeta model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimGroupResourceMeta = z.lazy(() => {
  return z.object({
    resourceType: z.string().optional(),
    created: z.string().optional(),
    lastModified: z.string().optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef  {ScimGroupResourceMeta} scimGroupResourceMeta - The response's non-standard meta information. - The response's non-standard meta information.
 * @property {string} - The resource type.
 * @property {string} - The date and time at which the group was created.
 * @property {string} - The date and time at which the group was last modified.
 */
export type ScimGroupResourceMeta = z.infer<typeof scimGroupResourceMeta>;

/**
 * Zod schema for mapping API responses to the ScimGroupResourceMeta application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupResourceMetaResponse = z.lazy(() => {
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
 * Zod schema for mapping the ScimGroupResourceMeta application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupResourceMetaRequest = z.lazy(() => {
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
