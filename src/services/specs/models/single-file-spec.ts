import { z } from 'zod';

/**
 * Zod schema for the SingleFileSpec model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const singleFileSpec = z.lazy(() => {
  return z.object({
    path: z.string(),
    content: z.string(),
  });
});

/**
 * @typedef {SingleFileSpec} singleFileSpec
 * @property {string} path - The file's path. Accepts .json, .yaml, .proto, .graphql, and .smithy file types.
 * @property {string} content - The file's stringified contents.
 */
export type SingleFileSpec = z.infer<typeof singleFileSpec>;

/**
 * Zod schema for mapping API responses to the SingleFileSpec application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const singleFileSpecResponse = z.lazy(() => {
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
 * Zod schema for mapping the SingleFileSpec application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const singleFileSpecRequest = z.lazy(() => {
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
