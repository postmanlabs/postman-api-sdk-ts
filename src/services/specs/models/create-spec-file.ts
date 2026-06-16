import { z } from 'zod';

/**
 * Zod schema for the CreateSpecFile model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createSpecFile = z.lazy(() => {
  return z.object({
    path: z.string(),
    content: z.string(),
  });
});

/**
 *
 * @typedef  {CreateSpecFile} createSpecFile
 * @property {string} - The file's path. Accepts JSON or YAML files.
 * @property {string} - The file's stringified contents.
 */
export type CreateSpecFile = z.infer<typeof createSpecFile>;

/**
 * Zod schema for mapping API responses to the CreateSpecFile application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSpecFileResponse = z.lazy(() => {
  return z
    .object({
      path: z.string(),
      content: z.string(),
    })
    .transform((data) => ({
      path: data['path'],
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the CreateSpecFile application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createSpecFileRequest = z.lazy(() => {
  return z
    .object({
      path: z.string(),
      content: z.string(),
    })
    .transform((data) => ({
      path: data['path'],
      content: data['content'],
    }));
});
