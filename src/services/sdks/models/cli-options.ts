import { z } from 'zod';

/**
 * Zod schema for the CliOptions model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const cliOptions = z.lazy(() => {
  return z.object({
    goModuleName: z.string().optional(),
  });
});

/**
 * CLI-specific SDK generation options.
 * @typedef  {CliOptions} cliOptions - CLI-specific SDK generation options. - CLI-specific SDK generation options.
 * @property {string} - The Go module's path for the generated CLI.
 */
export type CliOptions = z.infer<typeof cliOptions>;

/**
 * Zod schema for mapping API responses to the CliOptions application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cliOptionsResponse = z.lazy(() => {
  return z
    .object({
      goModuleName: z.string().optional(),
    })
    .transform((data) => ({
      goModuleName: data['goModuleName'],
    }));
});

/**
 * Zod schema for mapping the CliOptions application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const cliOptionsRequest = z.lazy(() => {
  return z
    .object({
      goModuleName: z.string().optional(),
    })
    .transform((data) => ({
      goModuleName: data['goModuleName'],
    }));
});
