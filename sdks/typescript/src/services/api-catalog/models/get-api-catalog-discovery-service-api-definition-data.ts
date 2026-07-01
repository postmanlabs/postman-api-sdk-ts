import { z } from 'zod';

/**
 * Zod schema for the GetApiCatalogDiscoveryServiceApiDefinitionData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getApiCatalogDiscoveryServiceApiDefinitionData = z.lazy(() => {
  return z.object({
    format: z.string().optional(),
    formatVersion: z.string().optional(),
    contentHash: z.string().optional(),
    content: z.string().optional(),
  });
});

/**
 * The API definition associated with the service.
 * @typedef  {GetApiCatalogDiscoveryServiceApiDefinitionData} getApiCatalogDiscoveryServiceApiDefinitionData - The API definition associated with the service. - The API definition associated with the service.
 * @property {string} - The definition's format.
 * @property {string} - The API definition format's version.
 * @property {string} - A SHA-256 hash of the API definition content for change detection.
 * @property {string} - A Base64-encoded API definition.
 */
export type GetApiCatalogDiscoveryServiceApiDefinitionData = z.infer<
  typeof getApiCatalogDiscoveryServiceApiDefinitionData
>;

/**
 * Zod schema for mapping API responses to the GetApiCatalogDiscoveryServiceApiDefinitionData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogDiscoveryServiceApiDefinitionDataResponse = z.lazy(() => {
  return z
    .object({
      format: z.string().optional(),
      formatVersion: z.string().optional(),
      contentHash: z.string().optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      format: data['format'],
      formatVersion: data['formatVersion'],
      contentHash: data['contentHash'],
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the GetApiCatalogDiscoveryServiceApiDefinitionData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getApiCatalogDiscoveryServiceApiDefinitionDataRequest = z.lazy(() => {
  return z
    .object({
      format: z.string().optional(),
      formatVersion: z.string().optional(),
      contentHash: z.string().optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      format: data['format'],
      formatVersion: data['formatVersion'],
      contentHash: data['contentHash'],
      content: data['content'],
    }));
});
