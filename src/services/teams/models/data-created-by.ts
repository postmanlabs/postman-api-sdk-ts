import { z } from 'zod';

/**
 * Zod schema for the DataCreatedBy model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const dataCreatedBy = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The user ID of the user who created the access request.
 * @typedef {DataCreatedBy} dataCreatedBy
 */
export type DataCreatedBy = z.infer<typeof dataCreatedBy>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const dataCreatedByResponse = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const dataCreatedByRequest = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
