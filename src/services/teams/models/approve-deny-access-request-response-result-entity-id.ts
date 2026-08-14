import { z } from 'zod';

/**
 * Zod schema for the ApproveDenyAccessRequestResponseResultEntityId model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const approveDenyAccessRequestResponseResultEntityId = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The entity's ID.
 * @typedef {ApproveDenyAccessRequestResponseResultEntityId} approveDenyAccessRequestResponseResultEntityId
 */
export type ApproveDenyAccessRequestResponseResultEntityId = z.infer<
  typeof approveDenyAccessRequestResponseResultEntityId
>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const approveDenyAccessRequestResponseResultEntityIdResponse = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const approveDenyAccessRequestResponseResultEntityIdRequest = z.lazy(() => {
  return z.union([z.number(), z.string()]);
});
