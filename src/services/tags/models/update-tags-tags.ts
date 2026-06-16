import { z } from 'zod';

/**
 * Zod schema for the UpdateTagsTags model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateTagsTags = z.lazy(() => {
  return z.object({
    slug: z
      .string()
      .min(2)
      .max(64)
      .regex(/^[a-z][a-z0-9-]*[a-z0-9]+$/),
  });
});

/**
 * Information about the tag.
 * @typedef  {UpdateTagsTags} updateTagsTags - Information about the tag. - Information about the tag.
 * @property {string} - The tag's ID within a team or individual (non-team) user scope.
 */
export type UpdateTagsTags = z.infer<typeof updateTagsTags>;

/**
 * Zod schema for mapping API responses to the UpdateTagsTags application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateTagsTagsResponse = z.lazy(() => {
  return z
    .object({
      slug: z
        .string()
        .min(2)
        .max(64)
        .regex(/^[a-z][a-z0-9-]*[a-z0-9]+$/),
    })
    .transform((data) => ({
      slug: data['slug'],
    }));
});

/**
 * Zod schema for mapping the UpdateTagsTags application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateTagsTagsRequest = z.lazy(() => {
  return z
    .object({
      slug: z
        .string()
        .min(2)
        .max(64)
        .regex(/^[a-z][a-z0-9-]*[a-z0-9]+$/),
    })
    .transform((data) => ({
      slug: data['slug'],
    }));
});
