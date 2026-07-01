import { z } from 'zod';
import {
  CreateUpdateApiSchemaFileRoot,
  createUpdateApiSchemaFileRoot,
  createUpdateApiSchemaFileRootRequest,
  createUpdateApiSchemaFileRootResponse,
} from './create-update-api-schema-file-root';

/**
 * Zod schema for the CreateUpdateApiSchemaFile model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createUpdateApiSchemaFile = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    root: createUpdateApiSchemaFileRoot.optional(),
    content: z.string().optional(),
  });
});

/**
 * Information about schema file.
 * @typedef  {CreateUpdateApiSchemaFile} createUpdateApiSchemaFile - Information about schema file. - Information about schema file.
 * @property {string} - The schema file's name.
 * @property {CreateUpdateApiSchemaFileRoot} - Information about the schema's root file.
 * @property {string} - The schema file's stringified contents.
 */
export type CreateUpdateApiSchemaFile = z.infer<typeof createUpdateApiSchemaFile>;

/**
 * Zod schema for mapping API responses to the CreateUpdateApiSchemaFile application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateApiSchemaFileResponse1 = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      root: createUpdateApiSchemaFileRootResponse.optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      root: data['root'],
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the CreateUpdateApiSchemaFile application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateApiSchemaFileRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      root: createUpdateApiSchemaFileRootRequest.optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      root: data['root'],
      content: data['content'],
    }));
});
