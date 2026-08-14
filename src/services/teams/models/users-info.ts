import { z } from 'zod';

/**
 * Zod schema for the UsersInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const usersInfo = z.lazy(() => {
  return z.object({
    _userId_: z.array(z.string()).optional(),
  });
});

/**
 * @typedef {UsersInfo} usersInfo
 * @property {TeamRoles[]} _userId_ - A list of the user's roles. The array's name is the user's ID.
 */
export type UsersInfo = z.infer<typeof usersInfo>;

/**
 * Zod schema for mapping API responses to the UsersInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const usersInfoResponse = z.lazy(() => {
  return z
    .object({
      '{{userId}}': z.array(z.string()).optional(),
    })
    .transform((data) => ({
      _userId_: data['{{userId}}'],
    }));
});

/**
 * Zod schema for mapping the UsersInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const usersInfoRequest = z.lazy(() => {
  return z
    .object({
      _userId_: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      '{{userId}}': data['_userId_'],
    }));
});
