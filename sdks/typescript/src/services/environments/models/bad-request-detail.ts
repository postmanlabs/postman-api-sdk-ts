import { z } from 'zod';

/**
 * Zod schema for the BadRequestDetail model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const badRequestDetail = z.lazy(() => {
  return z.union([z.string(), z.array(z.string())]);
});

/**
 * Details about the occurrence of the error.
 * @typedef  {BadRequestDetail} badRequestDetail - Details about the occurrence of the error. - Details about the occurrence of the error.
 * @property {string}
 * @property {string[]}
 */
export type BadRequestDetail = z.infer<typeof badRequestDetail>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const badRequestDetailResponse = z.lazy(() => {
  return z.union([z.string(), z.array(z.string())]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const badRequestDetailRequest = z.lazy(() => {
  return z.union([z.string(), z.array(z.string())]);
});
