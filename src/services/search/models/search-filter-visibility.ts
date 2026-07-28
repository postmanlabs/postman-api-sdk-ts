import { z } from 'zod';

/**
 * Zod schema for the SearchFilterVisibility model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchFilterVisibility = z.lazy(() => {
  return z.object({
    _eq: z.string().optional(),
    _ne: z.string().optional(),
  });
});

/**
 * Filters by workspace visibility. Supported for all element types. One of:
- `internal` — Only visible to the organization's team members.
- `public` — Visible to all Postman users.
- `partner` — Visible to assigned external partner users.

 * @typedef  {SearchFilterVisibility} searchFilterVisibility - Filters by workspace visibility. Supported for all element types. One of:
- `internal` — Only visible to the organization's team members.
- `public` — Visible to all Postman users.
- `partner` — Visible to assigned external partner users.
 - Filters by workspace visibility. Supported for all element types. One of:
- `internal` — Only visible to the organization's team members.
- `public` — Visible to all Postman users.
- `partner` — Visible to assigned external partner users.

 * @property {Eq} - The visibility value to match.
 * @property {Ne} - The visibility value to exclude.
 */
export type SearchFilterVisibility = z.infer<typeof searchFilterVisibility>;

/**
 * Zod schema for mapping API responses to the SearchFilterVisibility application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterVisibilityResponse = z.lazy(() => {
  return z
    .object({
      $eq: z.string().optional(),
      $ne: z.string().optional(),
    })
    .transform((data) => ({
      _eq: data['$eq'],
      _ne: data['$ne'],
    }));
});

/**
 * Zod schema for mapping the SearchFilterVisibility application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterVisibilityRequest = z.lazy(() => {
  return z
    .object({
      _eq: z.string().optional(),
      _ne: z.string().optional(),
    })
    .transform((data) => ({
      $eq: data['_eq'],
      $ne: data['_ne'],
    }));
});
