import { z } from 'zod';
import {
  UpdateTagsTags,
  updateTagsTags,
  updateTagsTagsRequest,
  updateTagsTagsResponse,
} from './update-tags-tags';

/**
 * Zod schema for the UpdateTags model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateTags = z.lazy(() => {
  return z.object({
    tags: z.array(updateTagsTags).max(5),
  });
});

/**
 *
 * @typedef  {UpdateTags} updateTags
 * @property {UpdateTagsTags[]} - A list of the associated tags as slugs.
 */
export type UpdateTags = z.infer<typeof updateTags>;

/**
 * Zod schema for mapping API responses to the UpdateTags application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateTagsResponse = z.lazy(() => {
  return z
    .object({
      tags: z.array(updateTagsTagsResponse).max(5),
    })
    .transform((data) => ({
      tags: data['tags'],
    }));
});

/**
 * Zod schema for mapping the UpdateTags application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateTagsRequest = z.lazy(() => {
  return z
    .object({
      tags: z.array(updateTagsTagsRequest).max(5),
    })
    .transform((data) => ({
      tags: data['tags'],
    }));
});
