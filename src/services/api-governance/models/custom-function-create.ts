import { z } from 'zod';

/**
 * Zod schema for the CustomFunctionCreate model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const customFunctionCreate = z.lazy(() => {
  return z.object({
    path: z
      .string()
      .max(512)
      .regex(/^functions\/[a-zA-Z_$][a-zA-Z0-9_$]+\.js$/),
    description: z.string().max(255).optional(),
    content: z.string(),
  });
});

/**
 * Information about the custom function.
 * @typedef {CustomFunctionCreate} customFunctionCreate
 * @property {string} path - The custom function's path, in the form `functions/<name>.js`. Root-level paths and nested paths are not supported. The name must be at least two characters, start with a letter, underscore, or dollar sign, and contain only letters, numbers, underscores, and dollar signs.
 * @property {string} description - The custom function's description.
 * @property {string} content - The custom function's content, up to a maximum of 500 KB (UTF-8).
 */
export type CustomFunctionCreate = z.infer<typeof customFunctionCreate>;

/**
 * Zod schema for mapping API responses to the CustomFunctionCreate application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const customFunctionCreateResponse = z.lazy(() => {
  return z
    .object({
      path: z
        .string()
        .max(512)
        .regex(/^functions\/[a-zA-Z_$][a-zA-Z0-9_$]+\.js$/),
      description: z.string().max(255).optional(),
      content: z.string(),
    })
    .transform((data) => ({
      path: data['path'],
      description: data['description'],
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the CustomFunctionCreate application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const customFunctionCreateRequest = z.lazy(() => {
  return z
    .object({
      path: z
        .string()
        .max(512)
        .regex(/^functions\/[a-zA-Z_$][a-zA-Z0-9_$]+\.js$/),
      description: z.string().max(255).optional(),
      content: z.string(),
    })
    .transform((data) => ({
      path: data['path'],
      description: data['description'],
      content: data['content'],
    }));
});
