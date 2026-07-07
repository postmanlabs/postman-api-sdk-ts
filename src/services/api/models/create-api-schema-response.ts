import { z } from 'zod';
import {
  CreateApiSchemaResponseFiles,
  createApiSchemaResponseFiles,
  createApiSchemaResponseFilesRequest,
  createApiSchemaResponseFilesResponse,
} from './create-api-schema-response-files';

/**
 * Zod schema for the CreateApiSchemaResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createApiSchemaResponse = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    type: z.string().optional(),
    files: z.array(createApiSchemaResponseFiles).optional(),
    createdAt: z.string().optional(),
    createdBy: z.string().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.string().optional(),
  });
});

/**
 * Information about the API schema.
 * @typedef  {CreateApiSchemaResponse} createApiSchemaResponse - Information about the API schema. - Information about the API schema.
 * @property {string} - The schema's ID.
 * @property {CreateApiSchemaResponseType} - The schema's type.
 * @property {CreateApiSchemaResponseFiles[]} - A list of the schema's files.
 * @property {string} - The date and time at which the schema was created.
 * @property {string} - The user ID of the user that created the schema.
 * @property {string} - The date and time at which the schema was last updated.
 * @property {string} - The user ID of the user that updated the schema.
 */
export type CreateApiSchemaResponse = z.infer<typeof createApiSchemaResponse>;

/**
 * Zod schema for mapping API responses to the CreateApiSchemaResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiSchemaResponseResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
      files: z.array(createApiSchemaResponseFilesResponse).optional(),
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      files: data['files'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
    }));
});

/**
 * Zod schema for mapping the CreateApiSchemaResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiSchemaResponseRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
      files: z.array(createApiSchemaResponseFilesRequest).optional(),
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      type: data['type'],
      files: data['files'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
    }));
});
