import { z } from 'zod';

/**
 * Zod schema for the UpdateSpecFile model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateSpecFile = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    type: z.string().optional(),
    content: z.string().optional(),
  });
});

/**
 * You must pass one of the accepted values in this request body. Also, this request body does not accept multiple properties in a single call. For example, you cannot pass both the `content` and `type` property at the same time.
 * @typedef {UpdateSpecFile} updateSpecFile
 * @property {string} name - The file's name.
 * @property {UpdateSpecFileType} type - The type of file:
- `ROOT` — The file containing the full OpenAPI structure. This serves as the entry point for the API spec and references other (`DEFAULT`) spec files. Multi-file specs can only have one root file.
- `DEFAULT` — A file referenced by the `ROOT` file.

 * @property {string} content - The specification's stringified contents.
 */
export type UpdateSpecFile = z.infer<typeof updateSpecFile>;

/**
 * Zod schema for mapping API responses to the UpdateSpecFile application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateSpecFileResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      type: z.string().optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the UpdateSpecFile application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateSpecFileRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      type: z.string().optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      content: data['content'],
    }));
});
