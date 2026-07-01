import { z } from 'zod';
import {
  GetApiCatalogServiceComplianceDataSpecLintStatus,
  getApiCatalogServiceComplianceDataSpecLintStatus,
} from './get-api-catalog-service-compliance-data-spec-lint-status';

/**
 * Zod schema for the GetApiCatalogServiceComplianceDataSpecLint model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceComplianceDataSpecLint = z.lazy(() => {
  return z.object({
    status: getApiCatalogServiceComplianceDataSpecLintStatus.nullable(),
    totalSpecs: z.number(),
    activeSpecs: z.number(),
    passingSpecs: z.number(),
    failingSpecs: z.number(),
    lastRunAt: z.string().nullable(),
  });
});

/**
 * Information about the API specification lint.
 * @typedef  {GetApiCatalogServiceComplianceDataSpecLint} getApiCatalogServiceComplianceDataSpecLint - Information about the API specification lint. - Information about the API specification lint.
 * @property {GetApiCatalogServiceComplianceDataSpecLintStatus} - Whether the specifications' latest lints passed or failed. If no lints exist, this returns a null value.
 * @property {number} - The total number of API specifications in the workspace. This value is the same as the as `entityCounts.specifications` value.
 * @property {number} - The number of distinct specifications with at least one lint within the time window.
 * @property {number} - The number of distinct specifications whose latest lint passed within the time window.
 * @property {number} - The number of distinct specifications whose latest lint failed within the time window.
 * @property {string} - The date and time of the most recent lint run across all specifications. If no lint exist, this returns a null value.
 */
export type GetApiCatalogServiceComplianceDataSpecLint = z.infer<
  typeof getApiCatalogServiceComplianceDataSpecLint
>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceComplianceDataSpecLint application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceComplianceDataSpecLintResponse = z.lazy(() => {
  return z
    .object({
      status: getApiCatalogServiceComplianceDataSpecLintStatus.nullable(),
      totalSpecs: z.number(),
      activeSpecs: z.number(),
      passingSpecs: z.number(),
      failingSpecs: z.number(),
      lastRunAt: z.string().nullable(),
    })
    .transform((data) => ({
      status: data['status'],
      totalSpecs: data['totalSpecs'],
      activeSpecs: data['activeSpecs'],
      passingSpecs: data['passingSpecs'],
      failingSpecs: data['failingSpecs'],
      lastRunAt: data['lastRunAt'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceComplianceDataSpecLint application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceComplianceDataSpecLintRequest = z.lazy(() => {
  return z
    .object({
      status: getApiCatalogServiceComplianceDataSpecLintStatus.nullable(),
      totalSpecs: z.number(),
      activeSpecs: z.number(),
      passingSpecs: z.number(),
      failingSpecs: z.number(),
      lastRunAt: z.string().nullable(),
    })
    .transform((data) => ({
      status: data['status'],
      totalSpecs: data['totalSpecs'],
      activeSpecs: data['activeSpecs'],
      passingSpecs: data['passingSpecs'],
      failingSpecs: data['failingSpecs'],
      lastRunAt: data['lastRunAt'],
    }));
});
