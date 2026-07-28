import { z } from 'zod';

/**
 * Zod schema for the ErrorNameMessageDetailsErrorDetails model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorNameMessageDetailsErrorDetails = z.lazy(() => {
  return z.union([z.any(), z.array(z.string())]);
});

/**
 * Information about the error.
 * @typedef  {ErrorNameMessageDetailsErrorDetails} errorNameMessageDetailsErrorDetails - Information about the error. - Information about the error.
 * @property {any}
 * @property {string[]}
 */
export type ErrorNameMessageDetailsErrorDetails = z.infer<
  typeof errorNameMessageDetailsErrorDetails
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const errorNameMessageDetailsErrorDetailsResponse = z.lazy(() => {
  return z.union([z.any(), z.array(z.string())]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const errorNameMessageDetailsErrorDetailsRequest = z.lazy(() => {
  return z.union([z.any(), z.array(z.string())]);
});
