import { z } from 'zod';

/**
 * Zod schema for the PatchConfigData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const patchConfigData = z.lazy(() => {
  return z.object({
    supported: z.boolean().optional(),
  });
});

/**
 * Information about patch configuration.
 * @typedef {PatchConfigData} patchConfigData
 * @property {boolean} supported - If true, the feature is supported.
 */
export type PatchConfigData = z.infer<typeof patchConfigData>;

/**
 * Zod schema for mapping API responses to the PatchConfigData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchConfigDataResponse = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});

/**
 * Zod schema for mapping the PatchConfigData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchConfigDataRequest = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});
