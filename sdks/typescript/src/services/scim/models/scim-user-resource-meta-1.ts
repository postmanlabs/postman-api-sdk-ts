import { z } from 'zod';

/**
 * Zod schema for the ScimUserResourceMeta1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimUserResourceMeta1 = z.lazy(() => {
  return z.object({
    resourceType: z.string().optional(),
    created: z.string().optional(),
    lastModified: z.string().optional(),
  });
});

/**
 * The response's non-standard meta information.
 * @typedef  {ScimUserResourceMeta1} scimUserResourceMeta1 - The response's non-standard meta information. - The response's non-standard meta information.
 * @property {string} - The resource type.
 * @property {string} - The date and time at which the team member was created.
 * @property {string} - The date and time at which the team member was last modified.
 */
export type ScimUserResourceMeta1 = z.infer<typeof scimUserResourceMeta1>;

/**
 * Zod schema for mapping API responses to the ScimUserResourceMeta1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUserResourceMeta1Response = z.lazy(() => {
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
 * Zod schema for mapping the ScimUserResourceMeta1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUserResourceMeta1Request = z.lazy(() => {
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
