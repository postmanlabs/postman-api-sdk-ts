import { z } from 'zod';
import { Resources, resources, resourcesRequest, resourcesResponse } from './resources';

/**
 * Zod schema for the ScimUsers model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimUsers = z.lazy(() => {
  return z.object({
    resources: z.array(resources).optional(),
    itemsPerPage: z.number().optional(),
    schemas: z.array(z.string()).optional(),
    startIndex: z.number().optional(),
    totalResults: z.number().optional(),
  });
});

/**
 *
 * @typedef  {ScimUsers} scimUsers
 * @property {Resources[]} - A list of user resources.
 * @property {number} - The number of items per response page.
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {number} - The index entry by which the returned results begin.
 * @property {number} - The total number of results found.
 */
export type ScimUsers = z.infer<typeof scimUsers>;

/**
 * Zod schema for mapping API responses to the ScimUsers application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUsersResponse = z.lazy(() => {
  return z
    .object({
      Resources: z.array(resourcesResponse).optional(),
      itemsPerPage: z.number().optional(),
      schemas: z.array(z.string()).optional(),
      startIndex: z.number().optional(),
      totalResults: z.number().optional(),
    })
    .transform((data) => ({
      resources: data['Resources'],
      itemsPerPage: data['itemsPerPage'],
      schemas: data['schemas'],
      startIndex: data['startIndex'],
      totalResults: data['totalResults'],
    }));
});

/**
 * Zod schema for mapping the ScimUsers application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimUsersRequest = z.lazy(() => {
  return z
    .object({
      resources: z.array(resourcesRequest).optional(),
      itemsPerPage: z.number().optional(),
      schemas: z.array(z.string()).optional(),
      startIndex: z.number().optional(),
      totalResults: z.number().optional(),
    })
    .transform((data) => ({
      Resources: data['resources'],
      itemsPerPage: data['itemsPerPage'],
      schemas: data['schemas'],
      startIndex: data['startIndex'],
      totalResults: data['totalResults'],
    }));
});
