import { z } from 'zod';
import {
  CollectionSpecInformation,
  collectionSpecInformation,
  collectionSpecInformationRequest,
  collectionSpecInformationResponse,
} from './collection-spec-information';
import {
  GetGeneratedCollectionSpecsMeta,
  getGeneratedCollectionSpecsMeta,
  getGeneratedCollectionSpecsMetaRequest,
  getGeneratedCollectionSpecsMetaResponse,
} from './get-generated-collection-specs-meta';

/**
 * Zod schema for the GetGeneratedCollectionSpecs model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getGeneratedCollectionSpecs = z.lazy(() => {
  return z.object({
    specs: z.array(collectionSpecInformation).optional(),
    meta: getGeneratedCollectionSpecsMeta.optional(),
  });
});

/**
 *
 * @typedef  {GetGeneratedCollectionSpecs} getGeneratedCollectionSpecs
 * @property {CollectionSpecInformation[]} - A list of the collection's generated API specficiations.
 * @property {GetGeneratedCollectionSpecsMeta} - The response's meta information for paginated results.
 */
export type GetGeneratedCollectionSpecs = z.infer<typeof getGeneratedCollectionSpecs>;

/**
 * Zod schema for mapping API responses to the GetGeneratedCollectionSpecs application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getGeneratedCollectionSpecsResponse = z.lazy(() => {
  return z
    .object({
      specs: z.array(collectionSpecInformationResponse).optional(),
      meta: getGeneratedCollectionSpecsMetaResponse.optional(),
    })
    .transform((data) => ({
      specs: data['specs'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetGeneratedCollectionSpecs application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getGeneratedCollectionSpecsRequest = z.lazy(() => {
  return z
    .object({
      specs: z.array(collectionSpecInformationRequest).optional(),
      meta: getGeneratedCollectionSpecsMetaRequest.optional(),
    })
    .transform((data) => ({
      specs: data['specs'],
      meta: data['meta'],
    }));
});
