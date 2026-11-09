import { z } from 'zod';

/**
 * Zod schema for the ScimOperationsUsersUserNameList model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const scimOperationsUsersUserNameList = z.lazy(() => {
  return z.object({
    op: z.string().optional(),
    path: z.string().optional(),
    value: z.string().optional(),
  });
});

/**
 * @typedef {ScimOperationsUsersUserNameList} scimOperationsUsersUserNameList
 * @property {ScimOperationsUsersUserNameListOp} op - The operation to perform. Accepts the `replace` value.
 * @property {ScimOperationsUsersUserNameListPath} path - The operation's path. Accepts the `userName` value.
 * @property {string} value - The user's email address.
 */
export type ScimOperationsUsersUserNameList = z.infer<typeof scimOperationsUsersUserNameList>;

/**
 * Zod schema for mapping API responses to the ScimOperationsUsersUserNameList application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimOperationsUsersUserNameListResponse = z.lazy(() => {
  return z
    .object({
      op: z.string().optional(),
      path: z.string().optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});

/**
 * Zod schema for mapping the ScimOperationsUsersUserNameList application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const scimOperationsUsersUserNameListRequest = z.lazy(() => {
  return z
    .object({
      op: z.string().optional(),
      path: z.string().optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      op: data['op'],
      path: data['path'],
      value: data['value'],
    }));
});
