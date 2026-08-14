import { z } from 'zod';

/**
 * Zod schema for the RevokeOauthToken model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const revokeOauthToken = z.lazy(() => {
  return z.object({
    token: z.string(),
  });
});

/**
 * @typedef {RevokeOauthToken} revokeOauthToken
 * @property {string} token - The Postman OAuth 2.0 access token to revoke.
 */
export type RevokeOauthToken = z.infer<typeof revokeOauthToken>;

/**
 * Zod schema for mapping API responses to the RevokeOauthToken application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const revokeOauthTokenResponse1 = z.lazy(() => {
  return z
    .object({
      token: z.string(),
    })
    .transform((data) => ({
      token: data['token'],
    }));
});

/**
 * Zod schema for mapping the RevokeOauthToken application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const revokeOauthTokenRequest = z.lazy(() => {
  return z
    .object({
      token: z.string(),
    })
    .transform((data) => ({
      token: data['token'],
    }));
});
