import { z } from 'zod';

/**
 * Zod schema for the ScimUserResourceName1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimUserResourceName1 = z.lazy(() => {
  return z.object({
    givenName: z.string().optional(),
    familyName: z.string().optional(),
  });
});

/**
 * Information about the Postman team member.
 * @typedef  {ScimUserResourceName1} scimUserResourceName1 - Information about the Postman team member. - Information about the Postman team member.
 * @property {string} - The team member's first name.
 * @property {string} - The team member's last name.
 */
export type ScimUserResourceName1 = z.infer<typeof scimUserResourceName1>;

/**
 * Zod schema for mapping API responses to the ScimUserResourceName1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUserResourceName1Response = z.lazy(() => {
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
 * Zod schema for mapping the ScimUserResourceName1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUserResourceName1Request = z.lazy(() => {
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
