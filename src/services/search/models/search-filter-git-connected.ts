import { z } from 'zod';

/**
 * Zod schema for the SearchFilterGitConnected model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchFilterGitConnected = z.lazy(() => {
  return z.object({
    _eq: z.boolean().optional(),
    _ne: z.boolean().optional(),
  });
});

/**
 * Filters by Git connection status. Supported for `workspaces`, `collections`, `requests`, `environments`, `specs`, and `flows`.
 * @typedef  {SearchFilterGitConnected} searchFilterGitConnected - Filters by Git connection status. Supported for `workspaces`, `collections`, `requests`, `environments`, `specs`, and `flows`. - Filters by Git connection status. Supported for `workspaces`, `collections`, `requests`, `environments`, `specs`, and `flows`.
 * @property {boolean} - If true, return only resources connected to Git.
 * @property {boolean} - If true, exclude resources connected to Git.
 */
export type SearchFilterGitConnected = z.infer<typeof searchFilterGitConnected>;

/**
 * Zod schema for mapping API responses to the SearchFilterGitConnected application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterGitConnectedResponse = z.lazy(() => {
  return z
    .object({
      $eq: z.boolean().optional(),
      $ne: z.boolean().optional(),
    })
    .transform((data) => ({
      _eq: data['$eq'],
      _ne: data['$ne'],
    }));
});

/**
 * Zod schema for mapping the SearchFilterGitConnected application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchFilterGitConnectedRequest = z.lazy(() => {
  return z
    .object({
      _eq: z.boolean().optional(),
      _ne: z.boolean().optional(),
    })
    .transform((data) => ({
      $eq: data['_eq'],
      $ne: data['_ne'],
    }));
});
