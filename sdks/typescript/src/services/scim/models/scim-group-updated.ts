import { z } from 'zod';
import {
  ScimGroupUpdatedMeta,
  scimGroupUpdatedMeta,
  scimGroupUpdatedMetaRequest,
  scimGroupUpdatedMetaResponse,
} from './scim-group-updated-meta';

/**
 * Zod schema for the ScimGroupUpdated model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimGroupUpdated = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    id: z.string().optional(),
    displayName: z.string().optional(),
    externalId: z.string().optional(),
    meta: scimGroupUpdatedMeta.optional(),
  });
});

/**
 *
 * @typedef  {ScimGroupUpdated} scimGroupUpdated
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - The group's ID.
 * @property {string} - The group's name.
 * @property {string} - The group's external ID.
 * @property {ScimGroupUpdatedMeta} - The response's non-standard meta information.
 */
export type ScimGroupUpdated = z.infer<typeof scimGroupUpdated>;

/**
 * Zod schema for mapping API responses to the ScimGroupUpdated application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupUpdatedResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      displayName: z.string().optional(),
      externalId: z.string().optional(),
      meta: scimGroupUpdatedMetaResponse.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      displayName: data['displayName'],
      externalId: data['externalId'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the ScimGroupUpdated application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimGroupUpdatedRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      displayName: z.string().optional(),
      externalId: z.string().optional(),
      meta: scimGroupUpdatedMetaRequest.optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      displayName: data['displayName'],
      externalId: data['externalId'],
      meta: data['meta'],
    }));
});
