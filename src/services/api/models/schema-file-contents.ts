import { z } from 'zod';

/**
 * Zod schema for the SchemaFileContents model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const schemaFileContents = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    path: z.string().optional(),
    content: z.string().optional(),
    createdAt: z.string().optional(),
    createdBy: z.string().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SchemaFileContents} schemaFileContents
 * @property {string} - The schema file's ID.
 * @property {string} - The schema file's name.
 * @property {string} - The file system path to the schema file.
 * @property {string} - The schema file's stringified contents.
 * @property {string} - The date and time at which the file was created.
 * @property {string} - The user Id of the user that created the file.
 * @property {string} - The date and time at which the file was last updated.
 * @property {string} - The user ID of the user that last updated the file.
 */
export type SchemaFileContents = z.infer<typeof schemaFileContents>;

/**
 * Zod schema for mapping API responses to the SchemaFileContents application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const schemaFileContentsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      path: z.string().optional(),
      content: z.string().optional(),
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      path: data['path'],
      content: data['content'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
    }));
});

/**
 * Zod schema for mapping the SchemaFileContents application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const schemaFileContentsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      path: z.string().optional(),
      content: z.string().optional(),
      createdAt: z.string().optional(),
      createdBy: z.string().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      path: data['path'],
      content: data['content'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
    }));
});
