import { z } from 'zod';

/**
 * Zod schema for the MigrateToSpecHubResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const migrateToSpecHubResponse = z.lazy(() => {
  return z.object({
    message: z.string().optional(),
    success: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {MigrateToSpecHubResponse} migrateToSpecHubResponse
 * @property {string} - The operation's message.
 * @property {boolean} - If true, the migration succeeded.
 */
export type MigrateToSpecHubResponse = z.infer<typeof migrateToSpecHubResponse>;

/**
 * Zod schema for mapping API responses to the MigrateToSpecHubResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrateToSpecHubResponseResponse = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
      success: z.boolean().optional(),
    })
    .transform((data) => ({
      message: data['message'],
      success: data['success'],
    }));
});

/**
 * Zod schema for mapping the MigrateToSpecHubResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const migrateToSpecHubResponseRequest = z.lazy(() => {
  return z
    .object({
      message: z.string().optional(),
      success: z.boolean().optional(),
    })
    .transform((data) => ({
      message: data['message'],
      success: data['success'],
    }));
});
