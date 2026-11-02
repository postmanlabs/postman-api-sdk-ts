import { z } from 'zod';
import { TagData, tagData, tagDataRequest, tagDataResponse } from './tag-data';

/**
 * Zod schema for the SuccessResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successResponse = z.lazy(() => {
  return z.object({
    tags: z.array(tagData).max(5).optional(),
  });
});

/**
 * @typedef {SuccessResponse} successResponse
 * @property {TagData[]} tags - A list of associated tags.
 */
export type SuccessResponse = z.infer<typeof successResponse>;

/**
 * Zod schema for mapping API responses to the SuccessResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successResponseResponse = z.lazy(() => {
  return z
    .object({
      tags: z.array(tagDataResponse).max(5).optional(),
    })
    .transform((data) => ({
      tags: data['tags'],
    }));
});

/**
 * Zod schema for mapping the SuccessResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successResponseRequest = z.lazy(() => {
  return z
    .object({
      tags: z.array(tagDataRequest).max(5).optional(),
    })
    .transform((data) => ({
      tags: data['tags'],
    }));
});
