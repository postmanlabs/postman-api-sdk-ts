import { z } from 'zod';
import {
  ScimGroupCreatedMembers,
  scimGroupCreatedMembers,
  scimGroupCreatedMembersRequest,
  scimGroupCreatedMembersResponse,
} from './scim-group-created-members';
import {
  ScimGroupCreatedMeta,
  scimGroupCreatedMeta,
  scimGroupCreatedMetaRequest,
  scimGroupCreatedMetaResponse,
} from './scim-group-created-meta';

/**
 * Zod schema for the ScimGroupCreated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimGroupCreated = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    id: z.string().optional(),
    displayName: z.string().optional(),
    externalId: z.string().optional(),
    members: z.array(scimGroupCreatedMembers).optional(),
    meta: scimGroupCreatedMeta.optional(),
  });
});

/**
 *
 * @typedef  {ScimGroupCreated} scimGroupCreated
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - The group's SCIM ID.
 * @property {string} - The group's display name.
 * @property {string} - The group's external ID.
 * @property {ScimGroupCreatedMembers[]} - A list of the group's members.
 * @property {ScimGroupCreatedMeta} - The response's non-standard meta information.
 */
export type ScimGroupCreated = z.infer<typeof scimGroupCreated>;

/**
 * Zod schema for mapping API responses to the ScimGroupCreated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupCreatedResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      displayName: z.string().optional(),
      externalId: z.string().optional(),
      members: z.array(scimGroupCreatedMembersResponse).optional(),
      meta: scimGroupCreatedMetaResponse.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      displayName: data['displayName'],
      externalId: data['externalId'],
      members: data['members'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the ScimGroupCreated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupCreatedRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      displayName: z.string().optional(),
      externalId: z.string().optional(),
      members: z.array(scimGroupCreatedMembersRequest).optional(),
      meta: scimGroupCreatedMetaRequest.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      displayName: data['displayName'],
      externalId: data['externalId'],
      members: data['members'],
      meta: data['meta'],
    }));
});
