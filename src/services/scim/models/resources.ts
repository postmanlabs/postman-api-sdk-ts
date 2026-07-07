import { z } from 'zod';
import {
  ScimUserResourceName1,
  scimUserResourceName1,
  scimUserResourceName1Request,
  scimUserResourceName1Response,
} from './scim-user-resource-name-1';
import {
  ScimUserResourceMeta1,
  scimUserResourceMeta1,
  scimUserResourceMeta1Request,
  scimUserResourceMeta1Response,
} from './scim-user-resource-meta-1';

/**
 * Zod schema for the Resources model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const resources = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    id: z.string().optional(),
    userName: z.string().optional(),
    name: scimUserResourceName1.optional(),
    externalId: z.string().optional(),
    active: z.boolean().optional(),
    meta: scimUserResourceMeta1.optional(),
  });
});

/**
 * The SCIM user resource object.
 * @typedef  {Resources} resources - The SCIM user resource object. - The SCIM user resource object.
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - The team member's SCIM ID.
 * @property {string} - The team member's SCIM username.
 * @property {ScimUserResourceName1} - Information about the Postman team member.
 * @property {string} - The team member's external ID.
 * @property {boolean} - If true, the team member is active.
 * @property {ScimUserResourceMeta1} - The response's non-standard meta information.
 */
export type Resources = z.infer<typeof resources>;

/**
 * Zod schema for mapping API responses to the Resources application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const resourcesResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      userName: z.string().optional(),
      name: scimUserResourceName1Response.optional(),
      externalId: z.string().optional(),
      active: z.boolean().optional(),
      meta: scimUserResourceMeta1Response.optional(),
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
 * Zod schema for mapping the Resources application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const resourcesRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      userName: z.string().optional(),
      name: scimUserResourceName1Request.optional(),
      externalId: z.string().optional(),
      active: z.boolean().optional(),
      meta: scimUserResourceMeta1Request.optional(),
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
