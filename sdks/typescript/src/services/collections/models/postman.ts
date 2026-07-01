import { z } from 'zod';
import { PostmanType, postmanType } from './postman-type';

/**
 * Zod schema for the Postman model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const postman = z.lazy(() => {
  return z.object({
    secretId: z.string().optional(),
    type: postmanType.optional(),
    vaultId: z.string().optional(),
  });
});

/**
 * Information about the Postman-specific source of the variable's value.
 * @typedef  {Postman} postman - Information about the Postman-specific source of the variable's value. - Information about the Postman-specific source of the variable's value.
 * @property {string} - The variable's secret ID.
 * @property {PostmanType} - The variable's type:
- `cloud` — The variable value is synced and stored in the Postman Cloud.

 * @property {string} - The variable's ID in the Postman Vault.
 */
export type Postman = z.infer<typeof postman>;

/**
 * Zod schema for mapping API responses to the Postman application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postmanResponse = z.lazy(() => {
  return z
    .object({
      secretId: z.string().optional(),
      type: postmanType.optional(),
      vaultId: z.string().optional(),
    })
    .transform((data) => ({
      secretId: data['secretId'],
      type: data['type'],
      vaultId: data['vaultId'],
    }));
});

/**
 * Zod schema for mapping the Postman application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postmanRequest = z.lazy(() => {
  return z
    .object({
      secretId: z.string().optional(),
      type: postmanType.optional(),
      vaultId: z.string().optional(),
    })
    .transform((data) => ({
      secretId: data['secretId'],
      type: data['type'],
      vaultId: data['vaultId'],
    }));
});
