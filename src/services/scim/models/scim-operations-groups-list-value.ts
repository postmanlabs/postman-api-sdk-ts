import { z } from 'zod';

/**
 * Zod schema for the ScimOperationsGroupsListValue model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimOperationsGroupsListValue = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    displayName: z.string().optional(),
  });
});

/**
 * The performed operation's value.
 * @typedef {ScimOperationsGroupsListValue} scimOperationsGroupsListValue
 * @property {string} id - The group's ID.
 * @property {string} displayName - The group's name.
 */
export type ScimOperationsGroupsListValue = z.infer<typeof scimOperationsGroupsListValue>;

/**
 * Zod schema for mapping API responses to the ScimOperationsGroupsListValue application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimOperationsGroupsListValueResponse = z.lazy(() => {
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
 * Zod schema for mapping the ScimOperationsGroupsListValue application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimOperationsGroupsListValueRequest = z.lazy(() => {
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
