import { z } from 'zod';

/**
 * Zod schema for the RequestGraphqlModeData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestGraphqlModeData = z.lazy(() => {
  return z.object({
    query: z.string().optional(),
    variables: z.string().optional(),
  });
});

/**
 * The request body's GraphQL mode data.
 * @typedef {RequestGraphqlModeData} requestGraphqlModeData
 * @property {string} query - The GraphQL query.
 * @property {string} variables - The GraphQL query variables, in JSON format.
 */
export type RequestGraphqlModeData = z.infer<typeof requestGraphqlModeData>;

/**
 * Zod schema for mapping API responses to the RequestGraphqlModeData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestGraphqlModeDataResponse = z.lazy(() => {
  return z
    .object({
      query: z.string().optional(),
      variables: z.string().optional(),
    })
    .transform((data) => ({
      query: data['query'],
      variables: data['variables'],
    }));
});

/**
 * Zod schema for mapping the RequestGraphqlModeData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestGraphqlModeDataRequest = z.lazy(() => {
  return z
    .object({
      query: z.string().optional(),
      variables: z.string().optional(),
    })
    .transform((data) => ({
      query: data['query'],
      variables: data['variables'],
    }));
});
