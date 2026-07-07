import { z } from 'zod';
import {
  SuccessfulResponseMembers,
  successfulResponseMembers,
  successfulResponseMembersRequest,
  successfulResponseMembersResponse,
} from './successful-response-members';
import {
  SuccessfulResponseMeta6,
  successfulResponseMeta6,
  successfulResponseMeta6Request,
  successfulResponseMeta6Response,
} from './successful-response-meta-6';

/**
 * Zod schema for the GetScimGroupResourceOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getScimGroupResourceOkResponse = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    id: z.string().optional(),
    displayName: z.string().optional(),
    members: z.array(successfulResponseMembers).optional(),
    externalId: z.string().optional(),
    meta: successfulResponseMeta6.optional(),
  });
});

/**
 *
 * @typedef  {GetScimGroupResourceOkResponse} getScimGroupResourceOkResponse
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - The group's SCIM ID.
 * @property {string} - The group's display name.
 * @property {SuccessfulResponseMembers[]} - A list of the group's members.
 * @property {string} - The group's external ID.
 * @property {SuccessfulResponseMeta6} - The response's non-standard meta information.
 */
export type GetScimGroupResourceOkResponse = z.infer<typeof getScimGroupResourceOkResponse>;

/**
 * Zod schema for mapping API responses to the GetScimGroupResourceOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getScimGroupResourceOkResponseResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      displayName: z.string().optional(),
      members: z.array(successfulResponseMembersResponse).optional(),
      externalId: z.string().optional(),
      meta: successfulResponseMeta6Response.optional(),
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
 * Zod schema for mapping the GetScimGroupResourceOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getScimGroupResourceOkResponseRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      displayName: z.string().optional(),
      members: z.array(successfulResponseMembersRequest).optional(),
      externalId: z.string().optional(),
      meta: successfulResponseMeta6Request.optional(),
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
