import { z } from 'zod';

/**
 * Zod schema for the ChangePassword model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const changePassword = z.lazy(() => {
  return z.object({
    supported: z.boolean().optional(),
  });
});

/**
 * Information about the change password configuration.
 * @typedef  {ChangePassword} changePassword - Information about the change password configuration. - Information about the change password configuration.
 * @property {boolean} - If true, the feature is supported.
 */
export type ChangePassword = z.infer<typeof changePassword>;

/**
 * Zod schema for mapping API responses to the ChangePassword application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const changePasswordResponse = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});

/**
 * Zod schema for mapping the ChangePassword application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const changePasswordRequest = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});
