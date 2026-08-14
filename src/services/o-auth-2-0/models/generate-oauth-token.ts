import { z } from 'zod';

/**
 * Zod schema for the GenerateOauthToken model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const generateOauthToken = z.lazy(() => {
  return z.object({
    grantType: z.string(),
    installationAuthId: z.string(),
    jwt: z.string(),
  });
});

/**
 * @typedef {GenerateOauthToken} generateOauthToken
 * @property {string} grantType - The `client_credentials` OAuth grant type.
 * @property {string} installationAuthId - The client's installation authentication ID.
 * @property {string} jwt - A signed JWT token. The token must include `iss` (issuer), `aud` (audience), `iat` (issued at), `exp` (expiration timestamp), and `jti` (JWT ID).
 */
export type GenerateOauthToken = z.infer<typeof generateOauthToken>;

/**
 * Zod schema for mapping API responses to the GenerateOauthToken application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateOauthTokenResponse1 = z.lazy(() => {
  return z
    .object({
      grant_type: z.string(),
      installationAuthId: z.string(),
      jwt: z.string(),
    })
    .transform((data) => ({
      grantType: data['grant_type'],
      installationAuthId: data['installationAuthId'],
      jwt: data['jwt'],
    }));
});

/**
 * Zod schema for mapping the GenerateOauthToken application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateOauthTokenRequest = z.lazy(() => {
  return z
    .object({
      grantType: z.string(),
      installationAuthId: z.string(),
      jwt: z.string(),
    })
    .transform((data) => ({
      grant_type: data['grantType'],
      installationAuthId: data['installationAuthId'],
      jwt: data['jwt'],
    }));
});
