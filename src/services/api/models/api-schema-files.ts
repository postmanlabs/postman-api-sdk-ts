import { z } from 'zod';
import {
  ApiSchemaFilesMeta,
  apiSchemaFilesMeta,
  apiSchemaFilesMetaRequest,
  apiSchemaFilesMetaResponse,
} from './api-schema-files-meta';
import { Files, files, filesRequest, filesResponse } from './files';

/**
 * Zod schema for the ApiSchemaFiles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const apiSchemaFiles = z.lazy(() => {
  return z.object({
    meta: apiSchemaFilesMeta.optional(),
    files: z.array(files).optional(),
  });
});

/**
 *
 * @typedef  {ApiSchemaFiles} apiSchemaFiles
 * @property {ApiSchemaFilesMeta} - The schema's non-standard meta information.
 * @property {Files[]} - A list of the schema's files.
 */
export type ApiSchemaFiles = z.infer<typeof apiSchemaFiles>;

/**
 * Zod schema for mapping API responses to the ApiSchemaFiles application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiSchemaFilesResponse = z.lazy(() => {
  return z
    .object({
      meta: apiSchemaFilesMetaResponse.optional(),
      files: z.array(filesResponse).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      files: data['files'],
    }));
});

/**
 * Zod schema for mapping the ApiSchemaFiles application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const apiSchemaFilesRequest = z.lazy(() => {
  return z
    .object({
      meta: apiSchemaFilesMetaRequest.optional(),
      files: z.array(filesRequest).optional(),
    })
    .transform((data) => ({
      meta: data['meta'],
      files: data['files'],
    }));
});
