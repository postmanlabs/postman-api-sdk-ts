import { z } from 'zod';

/**
 * Zod schema for the ApiCatalogDiscoveryServicesProviderMetadata model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiCatalogDiscoveryServicesProviderMetadata = z.lazy(() => {
  return z.object({
    title: z.string().optional(),
    environmentId: z.string().optional(),
    environmentVersion: z.string().optional(),
    openApiSpecCanBeDownloaded: z.boolean().optional(),
  });
});

/**
 * Additional metadata from the discovery source provider.
 * @typedef  {ApiCatalogDiscoveryServicesProviderMetadata} apiCatalogDiscoveryServicesProviderMetadata - Additional metadata from the discovery source provider. - Additional metadata from the discovery source provider.
 * @property {string} - The provider's service display title.
 * @property {string} - The provider's environment ID.
 * @property {string} - The provider's environment version.
 * @property {boolean} - If true, the provider has enabled downloading of the OpenAPI specification.
 */
export type ApiCatalogDiscoveryServicesProviderMetadata = z.infer<
  typeof apiCatalogDiscoveryServicesProviderMetadata
>;

/**
 * Zod schema for mapping API responses to the ApiCatalogDiscoveryServicesProviderMetadata application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogDiscoveryServicesProviderMetadataResponse = z.lazy(() => {
  return z
    .object({
      title: z.string().optional(),
      environmentId: z.string().optional(),
      environmentVersion: z.string().optional(),
      openApiSpecCanBeDownloaded: z.boolean().optional(),
    })
    .transform((data) => ({
      title: data['title'],
      environmentId: data['environmentId'],
      environmentVersion: data['environmentVersion'],
      openApiSpecCanBeDownloaded: data['openApiSpecCanBeDownloaded'],
    }));
});

/**
 * Zod schema for mapping the ApiCatalogDiscoveryServicesProviderMetadata application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiCatalogDiscoveryServicesProviderMetadataRequest = z.lazy(() => {
  return z
    .object({
      title: z.string().optional(),
      environmentId: z.string().optional(),
      environmentVersion: z.string().optional(),
      openApiSpecCanBeDownloaded: z.boolean().optional(),
    })
    .transform((data) => ({
      title: data['title'],
      environmentId: data['environmentId'],
      environmentVersion: data['environmentVersion'],
      openApiSpecCanBeDownloaded: data['openApiSpecCanBeDownloaded'],
    }));
});
