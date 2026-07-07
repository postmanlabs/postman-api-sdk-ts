import { z } from 'zod';
import { Issues, issues, issuesRequest, issuesResponse } from './issues';

/**
 * Zod schema for the GetApiCatalogServiceSpecificationLintsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogServiceSpecificationLintsData = z.lazy(() => {
  return z.object({
    specId: z.string(),
    specName: z.string().nullable(),
    specType: z.string().nullable(),
    timestamp: z.string(),
    status: z.string(),
    issues: issues,
  });
});

/**
 *
 * @typedef  {GetApiCatalogServiceSpecificationLintsData} getApiCatalogServiceSpecificationLintsData
 * @property {string} - The API specification's ID.
 * @property {string} - The API specification's name. If the specification was deleted or its metadata is unavailable, this returns a null value.
 * @property {string} - The API specification's type and version ID. If the metadata is unavailable, this returns a null value.
 * @property {string} - The date and time at which the run completed.
 * @property {GetApiCatalogServiceSpecificationLintsDataStatus} - Whether the lint run passed or failed.
 * @property {Issues} - Issue counts by severity level.
 */
export type GetApiCatalogServiceSpecificationLintsData = z.infer<
  typeof getApiCatalogServiceSpecificationLintsData
>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogServiceSpecificationLintsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceSpecificationLintsDataResponse = z.lazy(() => {
  return z
    .object({
      specId: z.string(),
      specName: z.string().nullable(),
      specType: z.string().nullable(),
      timestamp: z.string(),
      status: z.string(),
      issues: issuesResponse,
    })
    .transform((data) => ({
      specId: data['specId'],
      specName: data['specName'],
      specType: data['specType'],
      timestamp: data['timestamp'],
      status: data['status'],
      issues: data['issues'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogServiceSpecificationLintsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogServiceSpecificationLintsDataRequest = z.lazy(() => {
  return z
    .object({
      specId: z.string(),
      specName: z.string().nullable(),
      specType: z.string().nullable(),
      timestamp: z.string(),
      status: z.string(),
      issues: issuesRequest,
    })
    .transform((data) => ({
      specId: data['specId'],
      specName: data['specName'],
      specType: data['specType'],
      timestamp: data['timestamp'],
      status: data['status'],
      issues: data['issues'],
    }));
});
