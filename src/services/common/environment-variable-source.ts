import { z } from 'zod';
import { Postman, postman, postmanRequest, postmanResponse } from '../collections/models/postman';

/**
 * Zod schema for the EnvironmentVariableSource model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const environmentVariableSource = z.lazy(() => {
  return z.object({
    postman: postman.optional(),
    provider: z.string().optional(),
  });
});

/**
 * Information about the source of the variable's value.
 * @typedef {EnvironmentVariableSource} environmentVariableSource
 * @property {Postman} postman - Information about the Postman-specific source of the variable's value.
 * @property {Provider} provider - The secret's provider.
 */
export type EnvironmentVariableSource = z.infer<typeof environmentVariableSource>;

/**
 * Zod schema for mapping API responses to the EnvironmentVariableSource application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentVariableSourceResponse = z.lazy(() => {
  return z
    .object({
      postman: postmanResponse.optional(),
      provider: z.string().optional(),
    })
    .transform((data) => ({
      postman: data['postman'],
      provider: data['provider'],
    }));
});

/**
 * Zod schema for mapping the EnvironmentVariableSource application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const environmentVariableSourceRequest = z.lazy(() => {
  return z
    .object({
      postman: postmanRequest.optional(),
      provider: z.string().optional(),
    })
    .transform((data) => ({
      postman: data['postman'],
      provider: data['provider'],
    }));
});
