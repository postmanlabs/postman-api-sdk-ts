import { z } from 'zod';

/**
 * Zod schema for the GetSpecFile model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getSpecFile = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    path: z.string().optional(),
    createdBy: z.number().optional(),
    updatedBy: z.number().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    type: z.string().optional(),
    content: z.string().optional(),
  });
});

/**
 * Information about the API specification file.
 * @typedef {GetSpecFile} getSpecFile
 * @property {string} id - The file's ID.
 * @property {string} name - The file's name.
 * @property {string} path - The file's path.
 * @property {number} createdBy - The user ID of the user that created the file.
 * @property {number} updatedBy - The ID of the user who updated the file.
 * @property {string} createdAt - The date and time at which the file was created.
 * @property {string} updatedAt - The date and time at which the file was updated.
 * @property {GetSpecFileType} type - The type of file:
- `ROOT` — A file containing the full OpenAPI structure and references other (DEFAULT) spec files.
- `DEFAULT` — A file referenced by the `ROOT` file.

 * @property {string} content - The file's stringified contents.
 */
export type GetSpecFile = z.infer<typeof getSpecFile>;

/**
 * Zod schema for mapping API responses to the GetSpecFile application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecFileResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      path: z.string().optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      type: z.string().optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      path: data['path'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      type: data['type'],
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the GetSpecFile application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecFileRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      path: z.string().optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      type: z.string().optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      path: data['path'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      type: data['type'],
      content: data['content'],
    }));
});
