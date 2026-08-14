import { z } from 'zod';

/**
 * Zod schema for the SuccessResponseTags model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successResponseTags = z.lazy(() => {
  return z.object({
    slug: z
      .string()
      .min(2)
      .max(64)
      .regex(/^[a-z][a-z0-9-]*[a-z0-9]+$/)
      .optional(),
  });
});

/**
 * Information about the tag.
 * @typedef {SuccessResponseTags} successResponseTags
 * @property {string} slug - The tag's ID within a team or individual (non-team) user scope.
 */
export type SuccessResponseTags = z.infer<typeof successResponseTags>;

/**
 * Zod schema for mapping API responses to the SuccessResponseTags application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successResponseTagsResponse = z.lazy(() => {
  return z
    .object({
      slug: z
        .string()
        .min(2)
        .max(64)
        .regex(/^[a-z][a-z0-9-]*[a-z0-9]+$/)
        .optional(),
    })
    .transform((data) => ({
      slug: data['slug'],
    }));
});

/**
 * Zod schema for mapping the SuccessResponseTags application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successResponseTagsRequest = z.lazy(() => {
  return z
    .object({
      slug: z
        .string()
        .min(2)
        .max(64)
        .regex(/^[a-z][a-z0-9-]*[a-z0-9]+$/)
        .optional(),
    })
    .transform((data) => ({
      slug: data['slug'],
    }));
});
