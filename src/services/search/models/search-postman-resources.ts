import { z } from 'zod';
import { Filters, filters, filtersRequest, filtersResponse } from './filters';

/**
 * Zod schema for the SearchPostmanResources model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchPostmanResources = z.lazy(() => {
  return z.object({
    q: z.string().optional(),
    elementType: z.string(),
    ownership: z.string().optional(),
    filters: filters.optional(),
  });
});

/**
 * 
 * @typedef  {SearchPostmanResources} searchPostmanResources   
 * @property {string} - The search query text. This is case-insensitive.
 * @property {SearchPostmanResourcesElementType} - The type of Postman resource to search for.
 * @property {Ownership} - The ownership scope for search results. One of:
- `organization` (default) — Resources owned by the user's team.
- `external` — Resources not owned by the user's team.
- `all` — All resources regardless of ownership.

 * @property {Filters} - The search filters to narrow results.
 */
export type SearchPostmanResources = z.infer<typeof searchPostmanResources>;

/**
 * Zod schema for mapping API responses to the SearchPostmanResources application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchPostmanResourcesResponse1 = z.lazy(() => {
  return z
    .object({
      q: z.string().optional(),
      elementType: z.string(),
      ownership: z.string().optional(),
      filters: filtersResponse.optional(),
    })
    .transform((data) => ({
      q: data['q'],
      elementType: data['elementType'],
      ownership: data['ownership'],
      filters: data['filters'],
    }));
});

/**
 * Zod schema for mapping the SearchPostmanResources application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchPostmanResourcesRequest = z.lazy(() => {
  return z
    .object({
      q: z.string().optional(),
      elementType: z.string(),
      ownership: z.string().optional(),
      filters: filtersRequest.optional(),
    })
    .transform((data) => ({
      q: data['q'],
      elementType: data['elementType'],
      ownership: data['ownership'],
      filters: data['filters'],
    }));
});
