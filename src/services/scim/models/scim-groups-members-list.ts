import { z } from 'zod';

/**
 * Zod schema for the ScimGroupsMembersList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimGroupsMembersList = z.lazy(() => {
  return z.object({
    value: z.string().optional(),
    display: z.string().optional(),
  });
});

/**
 * Information about the group's members.
 * @typedef {ScimGroupsMembersList} scimGroupsMembersList
 * @property {string} value - The user's SCIM ID.
 * @property {string} display - The user's display name.
 */
export type ScimGroupsMembersList = z.infer<typeof scimGroupsMembersList>;

/**
 * Zod schema for mapping API responses to the ScimGroupsMembersList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupsMembersListResponse = z.lazy(() => {
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
 * Zod schema for mapping the ScimGroupsMembersList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupsMembersListRequest = z.lazy(() => {
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
