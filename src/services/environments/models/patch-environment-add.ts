import { z } from 'zod';
import {
  PatchEnvironmentAddValue,
  patchEnvironmentAddValue,
  patchEnvironmentAddValueRequest,
  patchEnvironmentAddValueResponse,
} from './patch-environment-add-value';

/**
 * Zod schema for the PatchEnvironmentAdd model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const patchEnvironmentAdd = z.lazy(() => {
  return z.object({
    op: z.string(),
    path: z.string(),
    value: patchEnvironmentAddValue,
  });
});

/**
 *
 * @typedef  {PatchEnvironmentAdd} patchEnvironmentAdd
 * @property {string} - The `add` operation.
 * @property {string} - The [JSON Pointer syntax](https://datatracker.ietf.org/doc/html/rfc6901) that indicates the entry to update, in `/values/#` format, where `#` is the entry ID. The first record begins at the `0` value.
 * @property {PatchEnvironmentAddValue}
 */
export type PatchEnvironmentAdd = z.infer<typeof patchEnvironmentAdd>;

/**
 * Zod schema for mapping API responses to the PatchEnvironmentAdd application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchEnvironmentAddResponse = z.lazy(() => {
  return z
    .object({
      op: z.string(),
      path: z.string(),
      value: patchEnvironmentAddValueResponse,
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the PatchEnvironmentAdd application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const patchEnvironmentAddRequest = z.lazy(() => {
  return z
    .object({
      op: z.string(),
      path: z.string(),
      value: patchEnvironmentAddValueRequest,
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});
