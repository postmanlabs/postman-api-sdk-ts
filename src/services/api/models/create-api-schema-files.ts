import { z } from 'zod';
import {
  CreateApiSchemaFilesRoot,
  createApiSchemaFilesRoot,
  createApiSchemaFilesRootRequest,
  createApiSchemaFilesRootResponse,
} from './create-api-schema-files-root';

/**
 * Zod schema for the CreateApiSchemaFiles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createApiSchemaFiles = z.lazy(() => {
  return z.object({
    path: z.string().optional(),
    root: createApiSchemaFilesRoot.optional(),
    content: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CreateApiSchemaFiles} createApiSchemaFiles
 * @property {string} - The schema's file path.
 * @property {CreateApiSchemaFilesRoot} - Information about the schema's root file.
 * @property {string} - The schema file's stringified contents.
 */
export type CreateApiSchemaFiles = z.infer<typeof createApiSchemaFiles>;

/**
 * Zod schema for mapping API responses to the CreateApiSchemaFiles application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiSchemaFilesResponse = z.lazy(() => {
  return z
    .object({
      path: z.string().optional(),
      root: createApiSchemaFilesRootResponse.optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      path: data['path'],
      root: data['root'],
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the CreateApiSchemaFiles application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiSchemaFilesRequest = z.lazy(() => {
  return z
    .object({
      path: z.string().optional(),
      root: createApiSchemaFilesRootRequest.optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      path: data['path'],
      root: data['root'],
      content: data['content'],
    }));
});
