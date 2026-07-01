import { z } from 'zod';
import {
  ScimUserCreatedName,
  scimUserCreatedName,
  scimUserCreatedNameRequest,
  scimUserCreatedNameResponse,
} from './scim-user-created-name';
import {
  ScimUserCreatedMeta,
  scimUserCreatedMeta,
  scimUserCreatedMetaRequest,
  scimUserCreatedMetaResponse,
} from './scim-user-created-meta';

/**
 * Zod schema for the ScimUserCreated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimUserCreated = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    id: z.string().optional(),
    userName: z.string().optional(),
    name: scimUserCreatedName.optional(),
    externalId: z.string().optional(),
    active: z.boolean().optional(),
    meta: scimUserCreatedMeta.optional(),
  });
});

/**
 *
 * @typedef  {ScimUserCreated} scimUserCreated
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - The user's SCIM ID.
 * @property {string} - The user's username.
 * @property {ScimUserCreatedName}
 * @property {string} - The user's external ID.
 * @property {boolean} - If true, the user is active.
 * @property {ScimUserCreatedMeta} - The response's non-standard meta information.
 */
export type ScimUserCreated = z.infer<typeof scimUserCreated>;

/**
 * Zod schema for mapping API responses to the ScimUserCreated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUserCreatedResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      userName: z.string().optional(),
      name: scimUserCreatedNameResponse.optional(),
      externalId: z.string().optional(),
      active: z.boolean().optional(),
      meta: scimUserCreatedMetaResponse.optional(),
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
 * Zod schema for mapping the ScimUserCreated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUserCreatedRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      userName: z.string().optional(),
      name: scimUserCreatedNameRequest.optional(),
      externalId: z.string().optional(),
      active: z.boolean().optional(),
      meta: scimUserCreatedMetaRequest.optional(),
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
