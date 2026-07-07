import { z } from 'zod';
import { UserName, userName, userNameRequest, userNameResponse } from './user-name';

/**
 * Zod schema for the TaggedUsers model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const taggedUsers = z.lazy(() => {
  return z.object({
    _userName_: userName.optional(),
  });
});

/**
 * Information about users tagged in the `body` comment.
 * @typedef  {TaggedUsers} taggedUsers - Information about users tagged in the `body` comment. - Information about users tagged in the `body` comment.
 * @property {UserName} - An object that contains information about the tagged user. The object's name is the user's Postman username. For example, `@user-postman`.
 */
export type TaggedUsers = z.infer<typeof taggedUsers>;

/**
 * Zod schema for mapping API responses to the TaggedUsers application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taggedUsersResponse = z.lazy(() => {
  return z
    .object({
      '{{userName}}': userNameResponse.optional(),
    })
    .transform((data) => ({
      _userName_: data['{{userName}}'],
    }));
});

/**
 * Zod schema for mapping the TaggedUsers application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const taggedUsersRequest = z.lazy(() => {
  return z
    .object({
      _userName_: userNameRequest.optional(),
    })
    .transform((data) => ({
      '{{userName}}': data['_userName_'],
    }));
});
