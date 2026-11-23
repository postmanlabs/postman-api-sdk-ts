import { z } from 'zod';

/**
 * Zod schema for the DetectedSecretsResourcesData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const detectedSecretsResourcesData = z.lazy(() => {
  return z.object({
    type: z.string().optional(),
    ids: z.array(z.string()).optional(),
  });
});

/**
 * @typedef {DetectedSecretsResourcesData} detectedSecretsResourcesData
 * @property {DetectedSecretsResourcesDataType} type - The type of resource.
 * @property {string[]} ids - A list of resource IDs.
 */
export type DetectedSecretsResourcesData = z.infer<typeof detectedSecretsResourcesData>;

/**
 * Zod schema for mapping API responses to the DetectedSecretsResourcesData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const detectedSecretsResourcesDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the DetectedSecretsResourcesData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const detectedSecretsResourcesDataRequest = z.lazy(() => {
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
