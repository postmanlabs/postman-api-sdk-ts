import { z } from 'zod';

/**
 * Zod schema for the SyncOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const syncOptions = z.lazy(() => {
  return z.object({
    syncExamples: z.boolean().optional(),
    deleteOrphanedRequests: z.boolean().optional(),
  });
});

/**
 * Information about the specification sync options.
 * @typedef  {SyncOptions} syncOptions - Information about the specification sync options. - Information about the specification sync options.
 * @property {boolean} - If true, updates made to examples in the specification or to example values in the generated collection stay synchronized.
 * @property {boolean} - If true, deletes requests and endpoints that no longer exist in the source during sync.
 */
export type SyncOptions = z.infer<typeof syncOptions>;

/**
 * Zod schema for mapping API responses to the SyncOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const syncOptionsResponse = z.lazy(() => {
  return z
    .object({
      syncExamples: z.boolean().optional(),
      deleteOrphanedRequests: z.boolean().optional(),
    })
    .transform((data) => ({
      syncExamples: data['syncExamples'],
      deleteOrphanedRequests: data['deleteOrphanedRequests'],
    }));
});

/**
 * Zod schema for mapping the SyncOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const syncOptionsRequest = z.lazy(() => {
  return z
    .object({
      syncExamples: z.boolean().optional(),
      deleteOrphanedRequests: z.boolean().optional(),
    })
    .transform((data) => ({
      syncExamples: data['syncExamples'],
      deleteOrphanedRequests: data['deleteOrphanedRequests'],
    }));
});
