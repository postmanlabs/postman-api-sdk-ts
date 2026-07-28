import { z } from 'zod';

/**
 * Zod schema for the DuplicateCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const duplicateCollection = z.lazy(() => {
  return z.object({
    workspace: z.string(),
    suffix: z.string().optional(),
  });
});

/**
 *
 * @typedef  {DuplicateCollection} duplicateCollection
 * @property {string} - The workspace ID in which to duplicate the collection.
 * @property {string} - An optional suffix to append to the duplicated collection's name.
 */
export type DuplicateCollection = z.infer<typeof duplicateCollection>;

/**
 * Zod schema for mapping API responses to the DuplicateCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const duplicateCollectionResponse1 = z.lazy(() => {
  return z
    .object({
      workspace: z.string(),
      suffix: z.string().optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
      suffix: data['suffix'],
    }));
});

/**
 * Zod schema for mapping the DuplicateCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const duplicateCollectionRequest = z.lazy(() => {
  return z
    .object({
      workspace: z.string(),
      suffix: z.string().optional(),
    })
    .transform((data) => ({
      workspace: data['workspace'],
      suffix: data['suffix'],
    }));
});
