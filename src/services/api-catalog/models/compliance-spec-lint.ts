import { z } from 'zod';

/**
 * Zod schema for the ComplianceSpecLint model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const complianceSpecLint = z.lazy(() => {
  return z.object({
    status: z.string().nullable(),
  });
});

/**
 * Information about the API specification lint.
 * @typedef  {ComplianceSpecLint} complianceSpecLint - Information about the API specification lint. - Information about the API specification lint.
 * @property {ComplianceSpecLintStatus} - Whether the specifications' latest lints passed or failed. If no lints exist, this returns a null value.
 */
export type ComplianceSpecLint = z.infer<typeof complianceSpecLint>;

/**
 * Zod schema for mapping API responses to the ComplianceSpecLint application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const complianceSpecLintResponse = z.lazy(() => {
  return z
    .object({
      status: z.string().nullable(),
    })
    .transform((data) => ({
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the ComplianceSpecLint application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const complianceSpecLintRequest = z.lazy(() => {
  return z
    .object({
      status: z.string().nullable(),
    })
    .transform((data) => ({
      status: data['status'],
    }));
});
