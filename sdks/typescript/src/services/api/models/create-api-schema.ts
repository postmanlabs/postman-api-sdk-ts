import { z } from 'zod';
import { CreateApiSchemaType, createApiSchemaType } from './create-api-schema-type';
import {
  CreateApiSchemaFiles,
  createApiSchemaFiles,
  createApiSchemaFilesRequest,
  createApiSchemaFilesResponse,
} from './create-api-schema-files';

/**
 * Zod schema for the CreateApiSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createApiSchema = z.lazy(() => {
  return z.object({
    type: createApiSchemaType,
    files: z.array(createApiSchemaFiles),
  });
});

/**
 * Information about the API schema.
 * @typedef  {CreateApiSchema} createApiSchema - Information about the API schema. - Information about the API schema.
 * @property {CreateApiSchemaType} - The schema's type.
 * @property {CreateApiSchemaFiles[]} - The list of files that are part of the schema.
 */
export type CreateApiSchema = z.infer<typeof createApiSchema>;

/**
 * Zod schema for mapping API responses to the CreateApiSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiSchemaResponse1 = z.lazy(() => {
  return z
    .object({
      type: createApiSchemaType,
      files: z.array(createApiSchemaFilesResponse),
    })
    .transform((data) => ({
      type: data['type'],
      files: data['files'],
    }));
});

/**
 * Zod schema for mapping the CreateApiSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiSchemaRequest = z.lazy(() => {
  return z
    .object({
      type: createApiSchemaType,
      files: z.array(createApiSchemaFilesRequest),
    })
    .transform((data) => ({
      type: data['type'],
      files: data['files'],
    }));
});
