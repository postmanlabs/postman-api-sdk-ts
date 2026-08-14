import { z } from 'zod';
import { ErrorName, errorName, errorNameRequest, errorNameResponse } from './error-name';

/**
 * Zod schema for the ErrorNameMessageError2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorNameMessageError2 = z.lazy(() => {
  return z.object({
    name: errorName.optional(),
  });
});

/**
 * Information about the error.
 * @typedef {ErrorNameMessageError2} errorNameMessageError2
 * @property {ErrorName} name
 */
export type ErrorNameMessageError2 = z.infer<typeof errorNameMessageError2>;

/**
 * Zod schema for mapping API responses to the ErrorNameMessageError2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorNameMessageError2Response = z.lazy(() => {
  return z
    .object({
      name: errorNameResponse.optional(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});

/**
 * Zod schema for mapping the ErrorNameMessageError2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorNameMessageError2Request = z.lazy(() => {
  return z
    .object({
      name: errorNameRequest.optional(),
    })
    .transform((data) => ({
      name: data['name'],
    }));
});
