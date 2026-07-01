import { z } from 'zod';
import { SpecType, specType } from './spec-type';
import {
  CreateSpecFiles,
  createSpecFiles,
  createSpecFilesRequest,
  createSpecFilesResponse,
} from './create-spec-files';

/**
 * Zod schema for the CreateSpec model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createSpec = z.lazy(() => {
  return z.object({
    name: z.string(),
    type: specType,
    files: z.array(createSpecFiles),
  });
});

/**
 *
 * @typedef  {CreateSpec} createSpec
 * @property {string} - The specification's name.
 * @property {SpecType} - The type of API specification.
 * @property {CreateSpecFiles[]} - A list of the specification's files and their contents.
 */
export type CreateSpec = z.infer<typeof createSpec>;

/**
 * Zod schema for mapping API responses to the CreateSpec application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSpecResponse1 = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      type: specType,
      files: z.array(createSpecFilesResponse),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      files: data['files'],
    }));
});

/**
 * Zod schema for mapping the CreateSpec application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSpecRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      type: specType,
      files: z.array(createSpecFilesRequest),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      files: data['files'],
    }));
});
