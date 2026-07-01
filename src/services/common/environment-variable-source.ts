import { z } from 'zod';
import { Postman, postman, postmanRequest, postmanResponse } from '../collections/models/postman';
import { Provider, provider } from '../collections/models/provider';

/**
 * Zod schema for the EnvironmentVariableSource model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const environmentVariableSource = z.lazy(() => {
  return z.object({
    postman: postman.optional(),
    provider: provider.optional(),
  });
});

/**
 * Information about the source of the variable's value.
 * @typedef  {EnvironmentVariableSource} environmentVariableSource - Information about the source of the variable's value. - Information about the source of the variable's value.
 * @property {Postman} - Information about the Postman-specific source of the variable's value.
 * @property {Provider} - The secret's provider.
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
      provider: provider.optional(),
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
      provider: provider.optional(),
    })
    .transform((data) => ({
      postman: data['postman'],
      provider: data['provider'],
    }));
});
