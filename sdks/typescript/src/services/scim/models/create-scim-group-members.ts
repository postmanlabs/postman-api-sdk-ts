import { z } from 'zod';

/**
 * Zod schema for the CreateScimGroupMembers model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createScimGroupMembers = z.lazy(() => {
  return z.object({
    value: z.string().optional(),
    display: z.string().optional(),
  });
});

/**
 * Information about the group's members.
 * @typedef  {CreateScimGroupMembers} createScimGroupMembers - Information about the group's members. - Information about the group's members.
 * @property {string} - The user's SCIM ID.
 * @property {string} - The user's display name.
 */
export type CreateScimGroupMembers = z.infer<typeof createScimGroupMembers>;

/**
 * Zod schema for mapping API responses to the CreateScimGroupMembers application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createScimGroupMembersResponse = z.lazy(() => {
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
 * Zod schema for mapping the CreateScimGroupMembers application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createScimGroupMembersRequest = z.lazy(() => {
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
