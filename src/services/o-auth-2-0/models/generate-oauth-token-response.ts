import { z } from 'zod';
import { TokenType, tokenType } from './token-type';

/**
 * Zod schema for the GenerateOauthTokenResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const generateOauthTokenResponse = z.lazy(() => {
  return z.object({
    accessToken: z.string().optional(),
    expiresIn: z.number().optional(),
    tokenType: tokenType.optional(),
  });
});

/**
 *
 * @typedef  {GenerateOauthTokenResponse} generateOauthTokenResponse
 * @property {string} - A Postman OAuth 2.0 access token.
 * @property {number} - The time the token expires, in milliseconds.
 * @property {TokenType} - The `Bearer` token type.
 */
export type GenerateOauthTokenResponse = z.infer<typeof generateOauthTokenResponse>;

/**
 * Zod schema for mapping API responses to the GenerateOauthTokenResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateOauthTokenResponseResponse = z.lazy(() => {
  return z
    .object({
      access_token: z.string().optional(),
      expires_in: z.number().optional(),
      token_type: tokenType.optional(),
    })
    .transform((data) => ({
      accessToken: data['access_token'],
      expiresIn: data['expires_in'],
      tokenType: data['token_type'],
    }));
});

/**
 * Zod schema for mapping the GenerateOauthTokenResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateOauthTokenResponseRequest = z.lazy(() => {
  return z
    .object({
      accessToken: z.string().optional(),
      expiresIn: z.number().optional(),
      tokenType: tokenType.optional(),
    })
    .transform((data) => ({
      access_token: data['accessToken'],
      expires_in: data['expiresIn'],
      token_type: data['tokenType'],
    }));
});
