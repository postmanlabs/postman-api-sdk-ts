import { z } from 'zod';

/**
 * Zod schema for the PostApiCatalogDiscoveryServicesApiDefinitionData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const postApiCatalogDiscoveryServicesApiDefinitionData = z.lazy(() => {
  return z.object({
    content: z.string().optional(),
  });
});

/**
 * The API definition (specification) for the service. If you pass this with the `endpoints` array, this object is given preference and `endpoints` is ignored.
 * @typedef  {PostApiCatalogDiscoveryServicesApiDefinitionData} postApiCatalogDiscoveryServicesApiDefinitionData - The API definition (specification) for the service. If you pass this with the `endpoints` array, this object is given preference and `endpoints` is ignored. - The API definition (specification) for the service. If you pass this with the `endpoints` array, this object is given preference and `endpoints` is ignored.
 * @property {string} - A Base64-encoded JSON API definition. Cannot exceed 2 MB after decoding.
 */
export type PostApiCatalogDiscoveryServicesApiDefinitionData = z.infer<
  typeof postApiCatalogDiscoveryServicesApiDefinitionData
>;

/**
 * Zod schema for mapping API responses to the PostApiCatalogDiscoveryServicesApiDefinitionData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServicesApiDefinitionDataResponse = z.lazy(() => {
  return z
    .object({
      content: z.string().optional(),
    })
    .transform((data) => ({
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the PostApiCatalogDiscoveryServicesApiDefinitionData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postApiCatalogDiscoveryServicesApiDefinitionDataRequest = z.lazy(() => {
  return z
    .object({
      content: z.string().optional(),
    })
    .transform((data) => ({
      content: data['content'],
    }));
});
