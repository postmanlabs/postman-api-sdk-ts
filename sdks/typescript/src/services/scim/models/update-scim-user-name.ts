import { z } from 'zod';

/**
 * Zod schema for the UpdateScimUserName model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateScimUserName = z.lazy(() => {
  return z.object({
    givenName: z.string().optional(),
    familyName: z.string().optional(),
  });
});

/**
 * Information about the user's name.
 * @typedef  {UpdateScimUserName} updateScimUserName - Information about the user's name. - Information about the user's name.
 * @property {string} - The user's first name.
 * @property {string} - The user's last name.
 */
export type UpdateScimUserName = z.infer<typeof updateScimUserName>;

/**
 * Zod schema for mapping API responses to the UpdateScimUserName application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateScimUserNameResponse = z.lazy(() => {
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
 * Zod schema for mapping the UpdateScimUserName application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateScimUserNameRequest = z.lazy(() => {
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
