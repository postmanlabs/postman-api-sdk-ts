import { z } from 'zod';

/**
 * Zod schema for the ScimEmailData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimEmailData = z.lazy(() => {
  return z.object({
    primary: z.boolean().optional(),
    value: z.string().optional(),
    type: z.string().optional(),
    display: z.string().optional(),
  });
});

/**
 * Information about the email address.
 * @typedef {ScimEmailData} scimEmailData
 * @property {boolean} primary - If true, the email address is the user's primary email.
 * @property {string} value - The email address.
 * @property {string} type - The type of email address.
 * @property {string} display - The email address's display name.
 */
export type ScimEmailData = z.infer<typeof scimEmailData>;

/**
 * Zod schema for mapping API responses to the ScimEmailData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimEmailDataResponse = z.lazy(() => {
  return z
    .object({
      primary: z.boolean().optional(),
      value: z.string().optional(),
      type: z.string().optional(),
      display: z.string().optional(),
    })
    .transform((data) => ({
      primary: data['primary'],
      value: data['value'],
      type: data['type'],
      display: data['display'],
    }));
});

/**
 * Zod schema for mapping the ScimEmailData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimEmailDataRequest = z.lazy(() => {
  return z
    .object({
      primary: z.boolean().optional(),
      value: z.string().optional(),
      type: z.string().optional(),
      display: z.string().optional(),
    })
    .transform((data) => ({
      primary: data['primary'],
      value: data['value'],
      type: data['type'],
      display: data['display'],
    }));
});
