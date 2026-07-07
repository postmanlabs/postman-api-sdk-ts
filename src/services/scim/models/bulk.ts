import { z } from 'zod';

/**
 * Zod schema for the Bulk model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const bulk = z.lazy(() => {
  return z.object({
    maxOperations: z.number().optional(),
    maxPayloadSize: z.number().optional(),
    supported: z.boolean().optional(),
  });
});

/**
 * Information about bulk configuration.
 * @typedef  {Bulk} bulk - Information about bulk configuration. - Information about bulk configuration.
 * @property {number} - The total number of maximum operations allowed for bulk operations.
 * @property {number} - The maximum payload allowed for bulk operations.
 * @property {boolean} - If true, the feature is supported.
 */
export type Bulk = z.infer<typeof bulk>;

/**
 * Zod schema for mapping API responses to the Bulk application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const bulkResponse = z.lazy(() => {
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
 * Zod schema for mapping the Bulk application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const bulkRequest = z.lazy(() => {
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
