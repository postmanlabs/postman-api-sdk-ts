import { z } from 'zod';

/**
 * Zod schema for the GenerateServiceAccountTokenResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const generateServiceAccountTokenResponse = z.lazy(() => {
  return z.object({
    accessToken: z.string().optional(),
  });
});

/**
 *
 * @typedef  {GenerateServiceAccountTokenResponse} generateServiceAccountTokenResponse
 * @property {string} - The JWT access token to use to authenticate downstream service-to-service requests.
 */
export type GenerateServiceAccountTokenResponse = z.infer<
  typeof generateServiceAccountTokenResponse
>;

/**
 * Zod schema for mapping API responses to the GenerateServiceAccountTokenResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateServiceAccountTokenResponseResponse = z.lazy(() => {
  return z
    .object({
      access_token: z.string().optional(),
    })
    .transform((data) => ({
      accessToken: data['access_token'],
    }));
});

/**
 * Zod schema for mapping the GenerateServiceAccountTokenResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateServiceAccountTokenResponseRequest = z.lazy(() => {
  return z
    .object({
      accessToken: z.string().optional(),
    })
    .transform((data) => ({
      access_token: data['accessToken'],
    }));
});
