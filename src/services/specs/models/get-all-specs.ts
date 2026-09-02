import { z } from 'zod';
import {
  GetGeneratedCollectionSpecsMeta,
  getGeneratedCollectionSpecsMeta,
  getGeneratedCollectionSpecsMetaRequest,
  getGeneratedCollectionSpecsMetaResponse,
} from './get-generated-collection-specs-meta';
import { Specs, specs, specsRequest, specsResponse } from './specs';

/**
 * Zod schema for the GetAllSpecs model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAllSpecs = z.lazy(() => {
  return z.object({
    meta: getGeneratedCollectionSpecsMeta.optional(),
    specs: z.array(specs).optional(),
  });
});

/**
 * @typedef {GetAllSpecs} getAllSpecs
 * @property {GetGeneratedCollectionSpecsMeta} meta - The response's meta information for paginated results.
 * @property {Specs[]} specs - A list of API specifications.
 */
export type GetAllSpecs = z.infer<typeof getAllSpecs>;

/**
 * Zod schema for mapping API responses to the GetAllSpecs application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAllSpecsResponse = z.lazy(() => {
  return z
    .object({
      meta: getGeneratedCollectionSpecsMetaResponse.optional(),
      specs: z.array(specsResponse).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      specs: data['specs'],
    }));
});

/**
 * Zod schema for mapping the GetAllSpecs application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAllSpecsRequest = z.lazy(() => {
  return z
    .object({
      meta: getGeneratedCollectionSpecsMetaRequest.optional(),
      specs: z.array(specsRequest).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      specs: data['specs'],
    }));
});
