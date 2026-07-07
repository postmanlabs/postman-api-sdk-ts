import { z } from 'zod';

/**
 * Zod schema for the ScimGroupResourceMembers model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimGroupResourceMembers = z.lazy(() => {
  return z.object({
    value: z.string().optional(),
    display: z.string().optional(),
  });
});

/**
 * Information about the group's members.
 * @typedef  {ScimGroupResourceMembers} scimGroupResourceMembers - Information about the group's members. - Information about the group's members.
 * @property {string} - The resource value.
 * @property {string} - The resource's display name.
 */
export type ScimGroupResourceMembers = z.infer<typeof scimGroupResourceMembers>;

/**
 * Zod schema for mapping API responses to the ScimGroupResourceMembers application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupResourceMembersResponse = z.lazy(() => {
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
 * Zod schema for mapping the ScimGroupResourceMembers application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupResourceMembersRequest = z.lazy(() => {
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
