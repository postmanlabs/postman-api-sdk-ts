import { z } from 'zod';

/**
 * Zod schema for the ScimNameData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimNameData = z.lazy(() => {
  return z.object({
    givenName: z.string().optional(),
    familyName: z.string().optional(),
  });
});

/**
 * Information about the Postman team member.
 * @typedef {ScimNameData} scimNameData
 * @property {string} givenName - The team member's first name.
 * @property {string} familyName - The team member's last name.
 */
export type ScimNameData = z.infer<typeof scimNameData>;

/**
 * Zod schema for mapping API responses to the ScimNameData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimNameDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the ScimNameData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimNameDataRequest = z.lazy(() => {
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
