import { z } from 'zod';

/**
 * Zod schema for the CreateScimUserName model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createScimUserName = z.lazy(() => {
  return z.object({
    givenName: z.string().optional(),
    familyName: z.string().optional(),
  });
});

/**
 * Information about the user's name.
 * @typedef  {CreateScimUserName} createScimUserName - Information about the user's name. - Information about the user's name.
 * @property {string} - The user's first name.
 * @property {string} - The user's last name.
 */
export type CreateScimUserName = z.infer<typeof createScimUserName>;

/**
 * Zod schema for mapping API responses to the CreateScimUserName application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createScimUserNameResponse = z.lazy(() => {
  return z
    .object({
      givenName: z.string().optional(),
      familyName: z.string().optional(),
    })
    .transform((data) => ({
      givenName: data['givenName'],
      familyName: data['familyName'],
    }));
});

/**
 * Zod schema for mapping the CreateScimUserName application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createScimUserNameRequest = z.lazy(() => {
  return z
    .object({
      givenName: z.string().optional(),
      familyName: z.string().optional(),
    })
    .transform((data) => ({
      givenName: data['givenName'],
      familyName: data['familyName'],
    }));
});
