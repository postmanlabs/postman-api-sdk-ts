import { z } from 'zod';

/**
 * Zod schema for the SearchMetaData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchMetaData = z.lazy(() => {
  return z.object({
    nextCursor: z.string().optional(),
    q: z.string().optional(),
    total: z.number().optional(),
  });
});

/**
 * Pagination metadata for the search results.
 * @typedef {SearchMetaData} searchMetaData
 * @property {string} nextCursor - The pagination cursor that points to the next record in the results set.
 * @property {string} q - The search query text.
 * @property {number} total - The number of records found.
 */
export type SearchMetaData = z.infer<typeof searchMetaData>;

/**
 * Zod schema for mapping API responses to the SearchMetaData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchMetaDataResponse = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional(),
      q: z.string().optional(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      q: data['q'],
      total: data['total'],
    }));
});

/**
 * Zod schema for mapping the SearchMetaData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchMetaDataRequest = z.lazy(() => {
  return z
    .object({
      nextCursor: z.string().optional(),
      q: z.string().optional(),
      total: z.number().optional(),
    })
    .transform((data) => ({
      nextCursor: data['nextCursor'],
      q: data['q'],
      total: data['total'],
    }));
});
