import { z } from 'zod';
import {
  SpecFileInformation,
  specFileInformation,
  specFileInformationRequest,
  specFileInformationResponse,
} from './spec-file-information';
import {
  GetGeneratedCollectionSpecsMeta,
  getGeneratedCollectionSpecsMeta,
  getGeneratedCollectionSpecsMetaRequest,
  getGeneratedCollectionSpecsMetaResponse,
} from './get-generated-collection-specs-meta';

/**
 * Zod schema for the GetSpecFiles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getSpecFiles = z.lazy(() => {
  return z.object({
    files: z.array(specFileInformation).optional(),
    meta: getGeneratedCollectionSpecsMeta.optional(),
  });
});

/**
 * Information about the specification's files.
 * @typedef  {GetSpecFiles} getSpecFiles - Information about the specification's files. - Information about the specification's files.
 * @property {SpecFileInformation[]} - A list of the API specification's files.
 * @property {GetGeneratedCollectionSpecsMeta} - The response's meta information for paginated results.
 */
export type GetSpecFiles = z.infer<typeof getSpecFiles>;

/**
 * Zod schema for mapping API responses to the GetSpecFiles application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecFilesResponse = z.lazy(() => {
  return z
    .object({
      files: z.array(specFileInformationResponse).optional(),
      meta: getGeneratedCollectionSpecsMetaResponse.optional(),
    })
    .transform((data) => ({
      files: data['files'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetSpecFiles application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecFilesRequest = z.lazy(() => {
  return z
    .object({
      files: z.array(specFileInformationRequest).optional(),
      meta: getGeneratedCollectionSpecsMetaRequest.optional(),
    })
    .transform((data) => ({
      files: data['files'],
      meta: data['meta'],
    }));
});
