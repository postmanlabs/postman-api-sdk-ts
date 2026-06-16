import { z } from 'zod';

/**
 * Zod schema for the ErrorTypeTitleDetailDetail model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorTypeTitleDetailDetail = z.lazy(() => {
  return z.union([z.string(), z.any()]);
});

/**
 * Information about the error.
 * @typedef  {ErrorTypeTitleDetailDetail} errorTypeTitleDetailDetail - Information about the error. - Information about the error.
 * @property {string}
 * @property {any}
 */
export type ErrorTypeTitleDetailDetail = z.infer<typeof errorTypeTitleDetailDetail>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const errorTypeTitleDetailDetailResponse = z.lazy(() => {
  return z.union([z.string(), z.any()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const errorTypeTitleDetailDetailRequest = z.lazy(() => {
  return z.union([z.string(), z.any()]);
});
