import { z } from 'zod';

/**
 * Zod schema for the ErrorTypeTitleDetailStatusType model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorTypeTitleDetailStatusType = z.lazy(() => {
  return z.union([z.string(), z.string()]);
});

/**
 * The type of error.
 * @typedef {ErrorTypeTitleDetailStatusType} errorTypeTitleDetailStatusType
 */
export type ErrorTypeTitleDetailStatusType = z.infer<typeof errorTypeTitleDetailStatusType>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const errorTypeTitleDetailStatusTypeResponse = z.lazy(() => {
  return z.union([z.string(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const errorTypeTitleDetailStatusTypeRequest = z.lazy(() => {
  return z.union([z.string(), z.string()]);
});
