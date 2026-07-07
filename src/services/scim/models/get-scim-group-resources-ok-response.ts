import { z } from 'zod';
import {
  ScimGroupResource,
  scimGroupResource,
  scimGroupResourceRequest,
  scimGroupResourceResponse,
} from './scim-group-resource';

/**
 * Zod schema for the GetScimGroupResourcesOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getScimGroupResourcesOkResponse = z.lazy(() => {
  return z.object({
    resources: z.array(scimGroupResource).optional(),
    itemsPerPage: z.number().optional(),
    schemas: z.array(z.string()).optional(),
    startIndex: z.number().optional(),
    totalResults: z.number().optional(),
  });
});

/**
 *
 * @typedef  {GetScimGroupResourcesOkResponse} getScimGroupResourcesOkResponse
 * @property {ScimGroupResource[]} - A list of group resources.
 * @property {number} - The number of items per response page.
 * @property {string[]}
 * @property {number} - The index entry by which the returned results begin.
 * @property {number} - The total number of results found.
 */
export type GetScimGroupResourcesOkResponse = z.infer<typeof getScimGroupResourcesOkResponse>;

/**
 * Zod schema for mapping API responses to the GetScimGroupResourcesOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getScimGroupResourcesOkResponseResponse = z.lazy(() => {
  return z
    .object({
      Resources: z.array(scimGroupResourceResponse).optional(),
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
 * Zod schema for mapping the GetScimGroupResourcesOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getScimGroupResourcesOkResponseRequest = z.lazy(() => {
  return z
    .object({
      resources: z.array(scimGroupResourceRequest).optional(),
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
