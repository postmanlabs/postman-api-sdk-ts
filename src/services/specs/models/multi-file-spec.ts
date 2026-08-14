import { z } from 'zod';

/**
 * Zod schema for the MultiFileSpec model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const multiFileSpec = z.lazy(() => {
  return z.object({
    path: z.string(),
    content: z.string(),
    type: z.string(),
  });
});

/**
 * @typedef {MultiFileSpec} multiFileSpec
 * @property {string} path - The file's path. Accepts .json, .yaml, and .proto types.
 * @property {string} content - The file's stringified contents.
 * @property {MultiFileSpecType} type - The type of file. This property is required when creating multi-file specifications:
- `ROOT` — The file containing the full OpenAPI structure. This serves as the entry point for the API spec and references other (`DEFAULT`) spec files. Multi-file specs can only have one root file.
- `DEFAULT` — A file referenced by the `ROOT` file.

 */
export type MultiFileSpec = z.infer<typeof multiFileSpec>;

/**
 * Zod schema for mapping API responses to the MultiFileSpec application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const multiFileSpecResponse = z.lazy(() => {
  return z
    .object({
      path: z.string(),
      content: z.string(),
      type: z.string(),
    })
    .transform((data) => ({
      path: data['path'],
      content: data['content'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the MultiFileSpec application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const multiFileSpecRequest = z.lazy(() => {
  return z
    .object({
      path: z.string(),
      content: z.string(),
      type: z.string(),
    })
    .transform((data) => ({
      path: data['path'],
      content: data['content'],
      type: data['type'],
    }));
});
