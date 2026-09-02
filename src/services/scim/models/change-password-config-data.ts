import { z } from 'zod';

/**
 * Zod schema for the ChangePasswordConfigData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const changePasswordConfigData = z.lazy(() => {
  return z.object({
    supported: z.boolean().optional(),
  });
});

/**
 * Information about the change password configuration.
 * @typedef {ChangePasswordConfigData} changePasswordConfigData
 * @property {boolean} supported - If true, the feature is supported.
 */
export type ChangePasswordConfigData = z.infer<typeof changePasswordConfigData>;

/**
 * Zod schema for mapping API responses to the ChangePasswordConfigData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const changePasswordConfigDataResponse = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});

/**
 * Zod schema for mapping the ChangePasswordConfigData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const changePasswordConfigDataRequest = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});
