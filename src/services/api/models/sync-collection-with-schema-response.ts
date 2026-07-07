import { z } from 'zod';

/**
 * Zod schema for the SyncCollectionWithSchemaResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const syncCollectionWithSchemaResponse = z.lazy(() => {
  return z.object({
    taskId: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SyncCollectionWithSchemaResponse} syncCollectionWithSchemaResponse
 * @property {string} - The created task ID. You can use this ID to track the status of syncing an API collection with an API schema.
 */
export type SyncCollectionWithSchemaResponse = z.infer<typeof syncCollectionWithSchemaResponse>;

/**
 * Zod schema for mapping API responses to the SyncCollectionWithSchemaResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const syncCollectionWithSchemaResponseResponse = z.lazy(() => {
  return z
    .object({
      taskId: z.string().optional(),
    })
    .transform((data) => ({
      taskId: data['taskId'],
    }));
});

/**
 * Zod schema for mapping the SyncCollectionWithSchemaResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const syncCollectionWithSchemaResponseRequest = z.lazy(() => {
  return z
    .object({
      taskId: z.string().optional(),
    })
    .transform((data) => ({
      taskId: data['taskId'],
    }));
});
