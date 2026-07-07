import { z } from 'zod';
import {
  ScimUserResourceName2,
  scimUserResourceName2,
  scimUserResourceName2Request,
  scimUserResourceName2Response,
} from './scim-user-resource-name-2';
import {
  ScimUserResourceMeta2,
  scimUserResourceMeta2,
  scimUserResourceMeta2Request,
  scimUserResourceMeta2Response,
} from './scim-user-resource-meta-2';

/**
 * Zod schema for the GetScimUserResourceOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getScimUserResourceOkResponse = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    id: z.string().optional(),
    userName: z.string().optional(),
    name: scimUserResourceName2.optional(),
    externalId: z.string().optional(),
    active: z.boolean().optional(),
    meta: scimUserResourceMeta2.optional(),
  });
});

/**
 *
 * @typedef  {GetScimUserResourceOkResponse} getScimUserResourceOkResponse
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - The team member's SCIM ID.
 * @property {string} - The team member's SCIM username.
 * @property {ScimUserResourceName2} - Information about the Postman team member.
 * @property {string} - The team member's external ID.
 * @property {boolean} - If true, the team member is active.
 * @property {ScimUserResourceMeta2} - The response's non-standard meta information.
 */
export type GetScimUserResourceOkResponse = z.infer<typeof getScimUserResourceOkResponse>;

/**
 * Zod schema for mapping API responses to the GetScimUserResourceOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getScimUserResourceOkResponseResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      userName: z.string().optional(),
      name: scimUserResourceName2Response.optional(),
      externalId: z.string().optional(),
      active: z.boolean().optional(),
      meta: scimUserResourceMeta2Response.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      userName: data['userName'],
      name: data['name'],
      externalId: data['externalId'],
      active: data['active'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetScimUserResourceOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getScimUserResourceOkResponseRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      userName: z.string().optional(),
      name: scimUserResourceName2Request.optional(),
      externalId: z.string().optional(),
      active: z.boolean().optional(),
      meta: scimUserResourceMeta2Request.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      userName: data['userName'],
      name: data['name'],
      externalId: data['externalId'],
      active: data['active'],
      meta: data['meta'],
    }));
});
