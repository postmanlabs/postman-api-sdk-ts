import { z } from 'zod';
import {
  CreateApiSchemaResponseFilesRoot,
  createApiSchemaResponseFilesRoot,
  createApiSchemaResponseFilesRootRequest,
  createApiSchemaResponseFilesRootResponse,
} from './create-api-schema-response-files-root';

/**
 * Zod schema for the CreateApiSchemaResponseFiles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createApiSchemaResponseFiles = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    path: z.string().optional(),
    createdAt: z.string().optional(),
    root: createApiSchemaResponseFilesRoot.optional(),
    createdBy: z.string().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.string().optional(),
  });
});

/**
 * Information about the schema file.
 * @typedef  {CreateApiSchemaResponseFiles} createApiSchemaResponseFiles - Information about the schema file. - Information about the schema file.
 * @property {string} - The schema file's ID.
 * @property {string} - The schema file's name.
 * @property {string} - The file system path to the schema file.
 * @property {string} - The date and time at which the file was created.
 * @property {CreateApiSchemaResponseFilesRoot} - An object that contains root file information.
 * @property {string} - The user ID of the user that created the file.
 * @property {string} - The date and time at which the file was last updated.
 * @property {string} - The user ID of the user that last updated the file.
 */
export type CreateApiSchemaResponseFiles = z.infer<typeof createApiSchemaResponseFiles>;

/**
 * Zod schema for mapping API responses to the CreateApiSchemaResponseFiles application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiSchemaResponseFilesResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      path: z.string().optional(),
      createdAt: z.string().optional(),
      root: createApiSchemaResponseFilesRootResponse.optional(),
      createdBy: z.string().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      path: data['path'],
      createdAt: data['createdAt'],
      root: data['root'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
    }));
});

/**
 * Zod schema for mapping the CreateApiSchemaResponseFiles application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiSchemaResponseFilesRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      path: z.string().optional(),
      createdAt: z.string().optional(),
      root: createApiSchemaResponseFilesRootRequest.optional(),
      createdBy: z.string().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      path: data['path'],
      createdAt: data['createdAt'],
      root: data['root'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
    }));
});
