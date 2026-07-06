import { z } from 'zod';

/**
 * Zod schema for the DetectedSecretsQueryRequestResources model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const detectedSecretsQueryRequestResources = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    ids: z.array(z.string()).optional(),
  });
});

/**
 *
 * @typedef  {DetectedSecretsQueryRequestResources} detectedSecretsQueryRequestResources
 * @property {ResourcesType} - The type of resource.
 * @property {string[]} - A list of resource IDs.
 */
export type DetectedSecretsQueryRequestResources = z.infer<
  typeof detectedSecretsQueryRequestResources
>;

/**
 * Zod schema for mapping API responses to the DetectedSecretsQueryRequestResources application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const detectedSecretsQueryRequestResourcesResponse = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      ids: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      type: data['type'],
      ids: data['ids'],
    }));
});

/**
 * Zod schema for mapping the DetectedSecretsQueryRequestResources application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const detectedSecretsQueryRequestResourcesRequest = z.lazy(() => {
  return z
    .object({
      type: z.string().optional(),
      ids: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      type: data['type'],
      ids: data['ids'],
    }));
});
