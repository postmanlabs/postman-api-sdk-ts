import { z } from 'zod';

/**
 * Zod schema for the Issues model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const issues = z.lazy(() => {
  return z.object({
    errors: z.number(),
    warnings: z.number(),
    info: z.number(),
  });
});

/**
 * Issue counts by severity level.
 * @typedef  {Issues} issues - Issue counts by severity level. - Issue counts by severity level.
 * @property {number} - The number of error level issues found.
 * @property {number} - The number of warning level issues found.
 * @property {number} - The number of info level issues found.
 */
export type Issues = z.infer<typeof issues>;

/**
 * Zod schema for mapping API responses to the Issues application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const issuesResponse = z.lazy(() => {
  return z
    .object({
      errors: z.number(),
      warnings: z.number(),
      info: z.number(),
    })
    .transform((data) => ({
      errors: data['errors'],
      warnings: data['warnings'],
      info: data['info'],
    }));
});

/**
 * Zod schema for mapping the Issues application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const issuesRequest = z.lazy(() => {
  return z
    .object({
      errors: z.number(),
      warnings: z.number(),
      info: z.number(),
    })
    .transform((data) => ({
      errors: data['errors'],
      warnings: data['warnings'],
      info: data['info'],
    }));
});
