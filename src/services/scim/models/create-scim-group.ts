import { z } from 'zod';
import {
  CreateScimGroupMembers,
  createScimGroupMembers,
  createScimGroupMembersRequest,
  createScimGroupMembersResponse,
} from './create-scim-group-members';

/**
 * Zod schema for the CreateScimGroup model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createScimGroup = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    displayName: z.string().optional(),
    members: z.array(createScimGroupMembers).optional(),
  });
});

/**
 *
 * @typedef  {CreateScimGroup} createScimGroup
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - The group's display name.
 * @property {CreateScimGroupMembers[]} - A list of the group's members.
 */
export type CreateScimGroup = z.infer<typeof createScimGroup>;

/**
 * Zod schema for mapping API responses to the CreateScimGroup application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createScimGroupResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      displayName: z.string().optional(),
      members: z.array(createScimGroupMembersResponse).optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      displayName: data['displayName'],
      members: data['members'],
    }));
});

/**
 * Zod schema for mapping the CreateScimGroup application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createScimGroupRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      displayName: z.string().optional(),
      members: z.array(createScimGroupMembersRequest).optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      displayName: data['displayName'],
      members: data['members'],
    }));
});
