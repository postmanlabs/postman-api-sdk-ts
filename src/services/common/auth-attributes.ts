import { z } from 'zod';
import {
  AuthAttributesValue,
  authAttributesValue,
  authAttributesValueRequest,
  authAttributesValueResponse,
} from '../collections/models/auth-attributes-value';

/**
 * Zod schema for the AuthAttributes model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const authAttributes = z.lazy(() => {
  return z.object({
    key: z.string(),
    value: authAttributesValue.optional(),
    type: z.string().optional(),
  });
});

/**
 * Information about the supported Postman [authorization type](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/).
 * @typedef {AuthAttributes} authAttributes
 * @property {string} key - The auth method's key value.
 * @property {AuthAttributesValue} value - The key's value.
 * @property {AuthAttributesType} type - The value's type.
 */
export type AuthAttributes = z.infer<typeof authAttributes>;

/**
 * Zod schema for mapping API responses to the AuthAttributes application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const authAttributesResponse = z.lazy(() => {
  return z
    .object({
      key: z.string(),
      value: authAttributesValueResponse.optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the AuthAttributes application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const authAttributesRequest = z.lazy(() => {
  return z
    .object({
      key: z.string(),
      value: authAttributesValueRequest.optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      type: data['type'],
    }));
});
