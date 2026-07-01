import { z } from 'zod';
import {
  ScimGroupResourceMembers,
  scimGroupResourceMembers,
  scimGroupResourceMembersRequest,
  scimGroupResourceMembersResponse,
} from './scim-group-resource-members';
import {
  ScimGroupResourceMeta,
  scimGroupResourceMeta,
  scimGroupResourceMetaRequest,
  scimGroupResourceMetaResponse,
} from './scim-group-resource-meta';

/**
 * Zod schema for the ScimGroupResource model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimGroupResource = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    id: z.string().optional(),
    displayName: z.string().optional(),
    members: z.array(scimGroupResourceMembers).optional(),
    externalId: z.string().optional(),
    meta: scimGroupResourceMeta.optional(),
  });
});

/**
 * The SCIM group resource object.
 * @typedef  {ScimGroupResource} scimGroupResource - The SCIM group resource object. - The SCIM group resource object.
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - The group's SCIM ID.
 * @property {string} - The group's display name.
 * @property {ScimGroupResourceMembers[]} - A list of the group's members.
 * @property {string} - The group's external ID.
 * @property {ScimGroupResourceMeta} - The response's non-standard meta information.
 */
export type ScimGroupResource = z.infer<typeof scimGroupResource>;

/**
 * Zod schema for mapping API responses to the ScimGroupResource application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupResourceResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      displayName: z.string().optional(),
      members: z.array(scimGroupResourceMembersResponse).optional(),
      externalId: z.string().optional(),
      meta: scimGroupResourceMetaResponse.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      displayName: data['displayName'],
      members: data['members'],
      externalId: data['externalId'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the ScimGroupResource application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupResourceRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      displayName: z.string().optional(),
      members: z.array(scimGroupResourceMembersRequest).optional(),
      externalId: z.string().optional(),
      meta: scimGroupResourceMetaRequest.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      displayName: data['displayName'],
      members: data['members'],
      externalId: data['externalId'],
      meta: data['meta'],
    }));
});
