import { z } from 'zod';
import {
  CreateUpdateApiSchemaFileResponseRoot,
  createUpdateApiSchemaFileResponseRoot,
  createUpdateApiSchemaFileResponseRootRequest,
  createUpdateApiSchemaFileResponseRootResponse,
} from './create-update-api-schema-file-response-root';

/**
 * Zod schema for the CreateUpdateApiSchemaFileResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createUpdateApiSchemaFileResponse = z.lazy(() => {
  return z.object({
    createdBy: z.string().optional(),
    createdAt: z.string().optional(),
    root: createUpdateApiSchemaFileResponseRoot.optional(),
    name: z.string().optional(),
    path: z.string().optional(),
    updatedBy: z.string().optional(),
    id: z.string().optional(),
    updatedAt: z.string().optional(),
  });
});

/**
 * Information about the schema file.
 * @typedef  {CreateUpdateApiSchemaFileResponse} createUpdateApiSchemaFileResponse - Information about the schema file. - Information about the schema file.
 * @property {string} - The user ID of the user that created the file.
 * @property {string} - The date and time at which the file was created.
 * @property {CreateUpdateApiSchemaFileResponseRoot} - Information about the schema's root file.
 * @property {string} - The schema file's name.
 * @property {string} - The file system path to the schema file.
 * @property {string} - The user ID of the user that last updated the file.
 * @property {string} - The schema file's ID.
 * @property {string} - The date and time at which the file was last updated.
 */
export type CreateUpdateApiSchemaFileResponse = z.infer<typeof createUpdateApiSchemaFileResponse>;

/**
 * Zod schema for mapping API responses to the CreateUpdateApiSchemaFileResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateApiSchemaFileResponseResponse = z.lazy(() => {
  return z
    .object({
      createdBy: z.string().optional(),
      createdAt: z.string().optional(),
      root: createUpdateApiSchemaFileResponseRootResponse.optional(),
      name: z.string().optional(),
      path: z.string().optional(),
      updatedBy: z.string().optional(),
      id: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      root: data['root'],
      name: data['name'],
      path: data['path'],
      updatedBy: data['updatedBy'],
      id: data['id'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the CreateUpdateApiSchemaFileResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createUpdateApiSchemaFileResponseRequest = z.lazy(() => {
  return z
    .object({
      createdBy: z.string().optional(),
      createdAt: z.string().optional(),
      root: createUpdateApiSchemaFileResponseRootRequest.optional(),
      name: z.string().optional(),
      path: z.string().optional(),
      updatedBy: z.string().optional(),
      id: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      createdBy: data['createdBy'],
      createdAt: data['createdAt'],
      root: data['root'],
      name: data['name'],
      path: data['path'],
      updatedBy: data['updatedBy'],
      id: data['id'],
      updatedAt: data['updatedAt'],
    }));
});
