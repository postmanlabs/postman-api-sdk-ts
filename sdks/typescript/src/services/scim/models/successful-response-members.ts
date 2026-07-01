import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseMembers model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseMembers = z.lazy(() => {
  return z.object({
    value: z.string().optional(),
    display: z.string().optional(),
  });
});

/**
 * Information about the group's members.
 * @typedef  {SuccessfulResponseMembers} successfulResponseMembers - Information about the group's members. - Information about the group's members.
 * @property {string} - The member's SCIM ID.
 * @property {string} - The member's display name.
 */
export type SuccessfulResponseMembers = z.infer<typeof successfulResponseMembers>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseMembers application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMembersResponse = z.lazy(() => {
  return z
    .object({
      value: z.string().optional(),
      display: z.string().optional(),
    })
    .transform((data) => ({
      value: data['value'],
      display: data['display'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseMembers application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseMembersRequest = z.lazy(() => {
  return z
    .object({
      value: z.string().optional(),
      display: z.string().optional(),
    })
    .transform((data) => ({
      value: data['value'],
      display: data['display'],
    }));
});
