import { z } from 'zod';

/**
 * Zod schema for the PythonOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const pythonOptions = z.lazy(() => {
  return z.object({
    pypiPackageName: z.string().optional(),
  });
});

/**
 * Python-specific SDK generation options.
 * @typedef {PythonOptions} pythonOptions
 * @property {string} pypiPackageName - The PyPI package's name.
 */
export type PythonOptions = z.infer<typeof pythonOptions>;

/**
 * Zod schema for mapping API responses to the PythonOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pythonOptionsResponse = z.lazy(() => {
  return z
    .object({
      pypiPackageName: z.string().optional(),
    })
    .transform((data) => ({
      pypiPackageName: data['pypiPackageName'],
    }));
});

/**
 * Zod schema for mapping the PythonOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const pythonOptionsRequest = z.lazy(() => {
  return z
    .object({
      pypiPackageName: z.string().optional(),
    })
    .transform((data) => ({
      pypiPackageName: data['pypiPackageName'],
    }));
});
