import { z } from 'zod';

/**
 * Zod schema for the ComplianceCliRun model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const complianceCliRun = z.lazy(() => {
  return z.object({
    status: z.string().nullable(),
  });
});

/**
 * Information about the CI/CD pipeline.
 * @typedef  {ComplianceCliRun} complianceCliRun - Information about the CI/CD pipeline. - Information about the CI/CD pipeline.
 * @property {ComplianceCliRunStatus} - Whether the pipelines' latest runs passed or failed. If no runs exist, this returns a null value.
 */
export type ComplianceCliRun = z.infer<typeof complianceCliRun>;

/**
 * Zod schema for mapping API responses to the ComplianceCliRun application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const complianceCliRunResponse = z.lazy(() => {
  return z
    .object({
      status: z.string().nullable(),
    })
    .transform((data) => ({
      status: data['status'],
    }));
});

/**
 * Zod schema for mapping the ComplianceCliRun application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const complianceCliRunRequest = z.lazy(() => {
  return z
    .object({
      status: z.string().nullable(),
    })
    .transform((data) => ({
      status: data['status'],
    }));
});
