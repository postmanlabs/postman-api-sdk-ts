import { z } from 'zod';

/**
 * Zod schema for the ScimUserResourceName2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimUserResourceName2 = z.lazy(() => {
  return z.object({
    givenName: z.string().optional(),
    familyName: z.string().optional(),
  });
});

/**
 * Information about the Postman team member.
 * @typedef  {ScimUserResourceName2} scimUserResourceName2 - Information about the Postman team member. - Information about the Postman team member.
 * @property {string} - The team member's first name.
 * @property {string} - The team member's last name.
 */
export type ScimUserResourceName2 = z.infer<typeof scimUserResourceName2>;

/**
 * Zod schema for mapping API responses to the ScimUserResourceName2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUserResourceName2Response = z.lazy(() => {
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
 * Zod schema for mapping the ScimUserResourceName2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUserResourceName2Request = z.lazy(() => {
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
