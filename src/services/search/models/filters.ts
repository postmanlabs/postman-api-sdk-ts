import { z } from 'zod';
import {
  SearchFilters,
  searchFilters,
  searchFiltersRequest,
  searchFiltersResponse,
} from './search-filters';

/**
 * Zod schema for the Filters model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const filters = z.lazy(() => {
  return z.object({
    _and: z.array(searchFilters),
  });
});

/**
 * The search filters to narrow results.
 * @typedef {Filters} filters
 * @property {SearchFilters[]} _and - A list of filter conditions that must all be true. Each item must contain exactly one filter.
 */
export type Filters = z.infer<typeof filters>;

/**
 * Zod schema for mapping API responses to the Filters application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const filtersResponse = z.lazy(() => {
  return z
    .object({
      $and: z.array(searchFiltersResponse),
    })
    .transform((data) => ({
      _and: data['$and'],
    }));
});

/**
 * Zod schema for mapping the Filters application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const filtersRequest = z.lazy(() => {
  return z
    .object({
      _and: z.array(searchFiltersRequest),
    })
    .transform((data) => ({
      $and: data['_and'],
    }));
});
