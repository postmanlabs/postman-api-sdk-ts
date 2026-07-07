import { z } from 'zod';
import {
  GetSchemaFiles,
  getSchemaFiles,
  getSchemaFilesRequest,
  getSchemaFilesResponse,
} from './get-schema-files';

/**
 * Zod schema for the GetSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getSchema = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    type: z.string().optional(),
    files: getSchemaFiles.optional(),
    createdAt: z.string().optional(),
    createdBy: z.string().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.string().optional(),
  });
});

/**
 * Information about the schema.
 * @typedef  {GetSchema} getSchema - Information about the schema. - Information about the schema.
 * @property {string} - The schema's ID.
 * @property {string} - The schema's type.
 * @property {GetSchemaFiles} - Information about the schema's files. The response is paginated and limited to one page.
 * @property {string} - The date and time at which the schema was created.
 * @property {string} - The user ID of the user that created the schema.
 * @property {string} - The date and time at which the schema was last updated.
 * @property {string} - The user ID of the user that last updated the schema.
 */
export type GetSchema = z.infer<typeof getSchema>;

/**
 * Zod schema for mapping API responses to the GetSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSchemaResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
      files: getSchemaFilesResponse.optional(),
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
 * Zod schema for mapping the GetSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSchemaRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      type: z.string().optional(),
      files: getSchemaFilesRequest.optional(),
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
