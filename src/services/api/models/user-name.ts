import { z } from 'zod';

/**
 * Zod schema for the UserName model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const userName = z.lazy(() => {
  return z.object({
    type: z.string(),
    id: z.string(),
  });
});

/**
 * An object that contains information about the tagged user. The object's name is the user's Postman username. For example, `@user-postman`.
 * @typedef  {UserName} userName - An object that contains information about the tagged user. The object's name is the user's Postman username. For example, `@user-postman`. - An object that contains information about the tagged user. The object's name is the user's Postman username. For example, `@user-postman`.
 * @property {UserNameType} - The `user` value.
 * @property {string} - The user's ID.
 */
export type UserName = z.infer<typeof userName>;

/**
 * Zod schema for mapping API responses to the UserName application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const userNameResponse = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      id: z.string(),
    })
    .transform((data) => ({
      type: data['type'],
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the UserName application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const userNameRequest = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      id: z.string(),
    })
    .transform((data) => ({
      type: data['type'],
      id: data['id'],
    }));
});
