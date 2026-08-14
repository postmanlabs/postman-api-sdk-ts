import { z } from 'zod';

/**
 * Zod schema for the ImportExportFile model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const importExportFile = z.lazy(() => {
  return z.object({
    type: z.string(),
    input: z.instanceof(ArrayBuffer),
  });
});

/**
 * @typedef {ImportExportFile} importExportFile
 * @property {ImportExportFileType} type - The `file` type value.
 * @property {ArrayBuffer} input - A .zip file containing the definition file.
 */
export type ImportExportFile = z.infer<typeof importExportFile>;

/**
 * Zod schema for mapping API responses to the ImportExportFile application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const importExportFileResponse = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      input: z.instanceof(ArrayBuffer),
    })
    .transform((data) => ({
      type: data['type'],
      input: data['input'],
    }));
});

/**
 * Zod schema for mapping the ImportExportFile application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const importExportFileRequest = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      input: z.instanceof(ArrayBuffer),
    })
    .transform((data) => ({
      type: data['type'],
      input: data['input'],
    }));
});
