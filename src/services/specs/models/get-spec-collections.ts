import { z } from 'zod';
import {
  SpecCollectionInformation,
  specCollectionInformation,
  specCollectionInformationRequest,
  specCollectionInformationResponse,
} from './spec-collection-information';
import {
  GetGeneratedCollectionSpecsMeta,
  getGeneratedCollectionSpecsMeta,
  getGeneratedCollectionSpecsMetaRequest,
  getGeneratedCollectionSpecsMetaResponse,
} from './get-generated-collection-specs-meta';

/**
 * Zod schema for the GetSpecCollections model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getSpecCollections = z.lazy(() => {
  return z.object({
    collections: z.array(specCollectionInformation).optional(),
    meta: getGeneratedCollectionSpecsMeta.optional(),
  });
});

/**
 *
 * @typedef  {GetSpecCollections} getSpecCollections
 * @property {SpecCollectionInformation[]} - A list of the API specification's generated collections.
 * @property {GetGeneratedCollectionSpecsMeta} - The response's meta information for paginated results.
 */
export type GetSpecCollections = z.infer<typeof getSpecCollections>;

/**
 * Zod schema for mapping API responses to the GetSpecCollections application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecCollectionsResponse = z.lazy(() => {
  return z
    .object({
      collections: z.array(specCollectionInformationResponse).optional(),
      meta: getGeneratedCollectionSpecsMetaResponse.optional(),
    })
    .transform((data) => ({
      collections: data['collections'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetSpecCollections application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecCollectionsRequest = z.lazy(() => {
  return z
    .object({
      collections: z.array(specCollectionInformationRequest).optional(),
      meta: getGeneratedCollectionSpecsMetaRequest.optional(),
    })
    .transform((data) => ({
      collections: data['collections'],
      meta: data['meta'],
    }));
});
