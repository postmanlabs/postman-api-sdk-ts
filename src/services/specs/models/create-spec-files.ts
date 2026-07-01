import { z } from 'zod';
import { multiFileSpec, multiFileSpecRequest, multiFileSpecResponse } from './multi-file-spec';
import { singleFileSpec, singleFileSpecRequest, singleFileSpecResponse } from './single-file-spec';

/**
 * Zod schema for the CreateSpecFiles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createSpecFiles = z.lazy(() => {
  return z.union([multiFileSpec, singleFileSpec]);
});

/**
 *
 * @typedef  {CreateSpecFiles} createSpecFiles
 * @property {MultiFileSpec}
 * @property {SingleFileSpec}
 */
export type CreateSpecFiles = z.infer<typeof createSpecFiles>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createSpecFilesResponse = z.lazy(() => {
  return z.union([multiFileSpecResponse, singleFileSpecResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createSpecFilesRequest = z.lazy(() => {
  return z.union([multiFileSpecRequest, singleFileSpecRequest]);
});
