import { z } from 'zod';

/**
 * Zod schema for the TypescriptOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const typescriptOptions = z.lazy(() => {
  return z.object({
    npmOrg: z.string().optional(),
    npmName: z.string().optional(),
  });
});

/**
 * TypeScript-specific SDK generation options.
 * @typedef {TypescriptOptions} typescriptOptions
 * @property {string} npmOrg - An npm organization's scope. Don't include a trailing slash.
 * @property {string} npmName - The unscoped npm package's name.
 */
export type TypescriptOptions = z.infer<typeof typescriptOptions>;

/**
 * Zod schema for mapping API responses to the TypescriptOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const typescriptOptionsResponse = z.lazy(() => {
  return z
    .object({
      npmOrg: z.string().optional(),
      npmName: z.string().optional(),
    })
    .transform((data) => ({
      npmOrg: data['npmOrg'],
      npmName: data['npmName'],
    }));
});

/**
 * Zod schema for mapping the TypescriptOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const typescriptOptionsRequest = z.lazy(() => {
  return z
    .object({
      npmOrg: z.string().optional(),
      npmName: z.string().optional(),
    })
    .transform((data) => ({
      npmOrg: data['npmOrg'],
      npmName: data['npmName'],
    }));
});
