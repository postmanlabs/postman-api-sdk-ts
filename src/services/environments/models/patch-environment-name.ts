import { z } from 'zod';

/**
 * Zod schema for the PatchEnvironmentName model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const patchEnvironmentName = z.lazy(() => {
  return z.object({
    op: z.string(),
    path: z.string(),
    value: z.string(),
  });
});

/**
 * Information about the environment.
 * @typedef {PatchEnvironmentName} patchEnvironmentName
 * @property {string} op - The `replace` operation.
 * @property {string} path - The `/name` value.
 * @property {string} value - The environment's updated name.
 */
export type PatchEnvironmentName = z.infer<typeof patchEnvironmentName>;

/**
 * Zod schema for mapping API responses to the PatchEnvironmentName application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchEnvironmentNameResponse = z.lazy(() => {
  return z
    .object({
      op: z.string(),
      path: z.string(),
      value: z.string(),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the PatchEnvironmentName application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchEnvironmentNameRequest = z.lazy(() => {
  return z
    .object({
      op: z.string(),
      path: z.string(),
      value: z.string(),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});
