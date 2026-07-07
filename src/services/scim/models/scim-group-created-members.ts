import { z } from 'zod';

/**
 * Zod schema for the ScimGroupCreatedMembers model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimGroupCreatedMembers = z.lazy(() => {
  return z.object({
    value: z.string().optional(),
    display: z.string().optional(),
  });
});

/**
 * Information about the group's members.
 * @typedef  {ScimGroupCreatedMembers} scimGroupCreatedMembers - Information about the group's members. - Information about the group's members.
 * @property {string} - The user's SCIM ID.
 * @property {string} - The user's display name.
 */
export type ScimGroupCreatedMembers = z.infer<typeof scimGroupCreatedMembers>;

/**
 * Zod schema for mapping API responses to the ScimGroupCreatedMembers application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupCreatedMembersResponse = z.lazy(() => {
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
 * Zod schema for mapping the ScimGroupCreatedMembers application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupCreatedMembersRequest = z.lazy(() => {
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
