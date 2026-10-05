import { z } from 'zod';

/**
 * Zod schema for the CustomFunctionUpdate model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const customFunctionUpdate = z.lazy(() => {
  return z.object({
    path: z
      .string()
      .max(512)
      .regex(/^functions\/[a-zA-Z_$][a-zA-Z0-9_$]+\.js$/)
      .optional(),
    description: z.string().max(255).optional(),
    content: z.string().optional(),
  });
});

/**
 * Information about the custom function.
 * @typedef {CustomFunctionUpdate} customFunctionUpdate
 * @property {string} path - The custom function's path, in the form `functions/<name>.js`. Root-level paths and nested paths aren't supported.
 * @property {string} description - The custom function's description.
 * @property {string} content - The custom function's content, up to a maximum of 500 KB (UTF-8).
 */
export type CustomFunctionUpdate = z.infer<typeof customFunctionUpdate>;

/**
 * Zod schema for mapping API responses to the CustomFunctionUpdate application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const customFunctionUpdateResponse = z.lazy(() => {
  return z
    .object({
      path: z
        .string()
        .max(512)
        .regex(/^functions\/[a-zA-Z_$][a-zA-Z0-9_$]+\.js$/)
        .optional(),
      description: z.string().max(255).optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      path: data['path'],
      description: data['description'],
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the CustomFunctionUpdate application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const customFunctionUpdateRequest = z.lazy(() => {
  return z
    .object({
      path: z
        .string()
        .max(512)
        .regex(/^functions\/[a-zA-Z_$][a-zA-Z0-9_$]+\.js$/)
        .optional(),
      description: z.string().max(255).optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      path: data['path'],
      description: data['description'],
      content: data['content'],
    }));
});
