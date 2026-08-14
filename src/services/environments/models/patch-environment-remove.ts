import { z } from 'zod';

/**
 * Zod schema for the PatchEnvironmentRemove model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const patchEnvironmentRemove = z.lazy(() => {
  return z.object({
    op: z.string(),
    path: z.string(),
  });
});

/**
 * @typedef {PatchEnvironmentRemove} patchEnvironmentRemove
 * @property {string} op - The `remove` operation.
 * @property {string} path - The [JSON Pointer syntax](https://datatracker.ietf.org/doc/html/rfc6901) that indicates the entry to update, in `/values/#` format, where `#` is the entry ID. The first record begins at the `0` value.
 */
export type PatchEnvironmentRemove = z.infer<typeof patchEnvironmentRemove>;

/**
 * Zod schema for mapping API responses to the PatchEnvironmentRemove application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchEnvironmentRemoveResponse = z.lazy(() => {
  return z
    .object({
      op: z.string(),
      path: z.string(),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
    }));
});

/**
 * Zod schema for mapping the PatchEnvironmentRemove application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchEnvironmentRemoveRequest = z.lazy(() => {
  return z
    .object({
      op: z.string(),
      path: z.string(),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
    }));
});
