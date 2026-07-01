import { z } from 'zod';

/**
 * Zod schema for the PostApiCatalogDiscoveryServicesProviderMetadataData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const postApiCatalogDiscoveryServicesProviderMetadataData = z.lazy(() => {
  return z.object({
    commitSha: z.string().optional(),
    branch: z.string().optional(),
    gitRepoUrl: z.string().optional(),
    deployedAt: z.string().optional(),
  });
});

/**
 * Additional metadata from the discovery source provider.
 * @typedef  {PostApiCatalogDiscoveryServicesProviderMetadataData} postApiCatalogDiscoveryServicesProviderMetadataData - Additional metadata from the discovery source provider. - Additional metadata from the discovery source provider.
 * @property {string} - A commit hash ID.
 * @property {string} - The source provider's branch name.
 * @property {string} - The source provider's Git repo URL.
 * @property {string} - The date and time at which the service was deployed.
 */
export type PostApiCatalogDiscoveryServicesProviderMetadataData = z.infer<
  typeof postApiCatalogDiscoveryServicesProviderMetadataData
>;

/**
 * Zod schema for mapping API responses to the PostApiCatalogDiscoveryServicesProviderMetadataData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServicesProviderMetadataDataResponse = z.lazy(() => {
  return z
    .object({
      commitSha: z.string().optional(),
      branch: z.string().optional(),
      gitRepoUrl: z.string().optional(),
      deployedAt: z.string().optional(),
    })
    .transform((data) => ({
      commitSha: data['commitSha'],
      branch: data['branch'],
      gitRepoUrl: data['gitRepoUrl'],
      deployedAt: data['deployedAt'],
    }));
});

/**
 * Zod schema for mapping the PostApiCatalogDiscoveryServicesProviderMetadataData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServicesProviderMetadataDataRequest = z.lazy(() => {
  return z
    .object({
      commitSha: z.string().optional(),
      branch: z.string().optional(),
      gitRepoUrl: z.string().optional(),
      deployedAt: z.string().optional(),
    })
    .transform((data) => ({
      commitSha: data['commitSha'],
      branch: data['branch'],
      gitRepoUrl: data['gitRepoUrl'],
      deployedAt: data['deployedAt'],
    }));
});
