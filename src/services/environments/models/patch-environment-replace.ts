import { z } from 'zod';

/**
 * Zod schema for the PatchEnvironmentReplace model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const patchEnvironmentReplace = z.lazy(() => {
  return z.object({
    op: z.string(),
    path: z.string(),
    value: z.string(),
  });
});

/**
 * 
 * @typedef  {PatchEnvironmentReplace} patchEnvironmentReplace   
 * @property {string} - The `replace` operation.
 * @property {string} - The [JSON Pointer syntax](https://datatracker.ietf.org/doc/html/rfc6901) that indicates the entry to update, in `/values/#/{value}` format, where:
- `#` — The entry ID. The first record begins at the `0` value.
- `{value}` — The variable property to update. Accepts `key`, `value`, `type`, and `enable`.

 * @property {string} - The variable's value.
 */
export type PatchEnvironmentReplace = z.infer<typeof patchEnvironmentReplace>;

/**
 * Zod schema for mapping API responses to the PatchEnvironmentReplace application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchEnvironmentReplaceResponse = z.lazy(() => {
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
 * Zod schema for mapping the PatchEnvironmentReplace application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchEnvironmentReplaceRequest = z.lazy(() => {
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
