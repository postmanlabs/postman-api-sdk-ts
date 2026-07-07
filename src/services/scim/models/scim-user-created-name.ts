import { z } from 'zod';

/**
 * Zod schema for the ScimUserCreatedName model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimUserCreatedName = z.lazy(() => {
  return z.object({
    givenName: z.string().optional(),
    familyName: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ScimUserCreatedName} scimUserCreatedName
 * @property {string} - The user's first name.
 * @property {string} - The user's last name.
 */
export type ScimUserCreatedName = z.infer<typeof scimUserCreatedName>;

/**
 * Zod schema for mapping API responses to the ScimUserCreatedName application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUserCreatedNameResponse = z.lazy(() => {
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
 * Zod schema for mapping the ScimUserCreatedName application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUserCreatedNameRequest = z.lazy(() => {
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
