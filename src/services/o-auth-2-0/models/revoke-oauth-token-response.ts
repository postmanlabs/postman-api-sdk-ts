import { z } from 'zod';

/**
 * Zod schema for the RevokeOauthTokenResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const revokeOauthTokenResponse = z.lazy(() => {
  return z.object({
    success: z.string().optional(),
  });
});

/**
 *
 * @typedef  {RevokeOauthTokenResponse} revokeOauthTokenResponse
 * @property {string} - The `true` value.
 */
export type RevokeOauthTokenResponse = z.infer<typeof revokeOauthTokenResponse>;

/**
 * Zod schema for mapping API responses to the RevokeOauthTokenResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const revokeOauthTokenResponseResponse = z.lazy(() => {
  return z
    .object({
      success: z.string().optional(),
    })
    .transform((data) => ({
      success: data['success'],
    }));
});

/**
 * Zod schema for mapping the RevokeOauthTokenResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const revokeOauthTokenResponseRequest = z.lazy(() => {
  return z
    .object({
      success: z.string().optional(),
    })
    .transform((data) => ({
      success: data['success'],
    }));
});
