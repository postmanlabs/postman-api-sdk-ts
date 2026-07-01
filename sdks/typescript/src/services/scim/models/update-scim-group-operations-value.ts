import { z } from 'zod';

/**
 * Zod schema for the UpdateScimGroupOperationsValue model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateScimGroupOperationsValue = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    displayName: z.string().optional(),
  });
});

/**
 * The performed operation's value.
 * @typedef  {UpdateScimGroupOperationsValue} updateScimGroupOperationsValue - The performed operation's value. - The performed operation's value.
 * @property {string} - The group's ID.
 * @property {string} - The group's name.
 */
export type UpdateScimGroupOperationsValue = z.infer<typeof updateScimGroupOperationsValue>;

/**
 * Zod schema for mapping API responses to the UpdateScimGroupOperationsValue application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateScimGroupOperationsValueResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      displayName: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      displayName: data['displayName'],
    }));
});

/**
 * Zod schema for mapping the UpdateScimGroupOperationsValue application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateScimGroupOperationsValueRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      displayName: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      displayName: data['displayName'],
    }));
});
