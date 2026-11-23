import { z } from 'zod';

/**
 * Zod schema for the BulkConfigData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const bulkConfigData = z.lazy(() => {
  return z.object({
    maxOperations: z.number().optional(),
    maxPayloadSize: z.number().optional(),
    supported: z.boolean().optional(),
  });
});

/**
 * Information about bulk configuration.
 * @typedef {BulkConfigData} bulkConfigData
 * @property {number} maxOperations - The total number of maximum operations allowed for bulk operations.
 * @property {number} maxPayloadSize - The maximum payload allowed for bulk operations.
 * @property {boolean} supported - If true, the feature is supported.
 */
export type BulkConfigData = z.infer<typeof bulkConfigData>;

/**
 * Zod schema for mapping API responses to the BulkConfigData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const bulkConfigDataResponse = z.lazy(() => {
  return z
    .object({
      maxOperations: z.number().optional(),
      maxPayloadSize: z.number().optional(),
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      maxOperations: data['maxOperations'],
      maxPayloadSize: data['maxPayloadSize'],
      supported: data['supported'],
    }));
});

/**
 * Zod schema for mapping the BulkConfigData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const bulkConfigDataRequest = z.lazy(() => {
  return z
    .object({
      maxOperations: z.number().optional(),
      maxPayloadSize: z.number().optional(),
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      maxOperations: data['maxOperations'],
      maxPayloadSize: data['maxPayloadSize'],
      supported: data['supported'],
    }));
});
