import { z } from 'zod';

/**
 * Zod schema for the CollectionRequestBodyGraphql1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestBodyGraphql1 = z.lazy(() => {
  return z.object({
    query: z.string().optional(),
    variables: z.string().optional().nullable(),
  });
});

/**
 * If the `mode` value is `graphql`, an object containing the GraphQL request information.
 * @typedef {CollectionRequestBodyGraphql1} collectionRequestBodyGraphql1
 * @property {string} query - The GraphQL query.
 * @property {string} variables - The GraphQL query variables, in JSON format.
 */
export type CollectionRequestBodyGraphql1 = z.infer<typeof collectionRequestBodyGraphql1>;

/**
 * Zod schema for mapping API responses to the CollectionRequestBodyGraphql1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBodyGraphql1Response = z.lazy(() => {
  return z
    .object({
      query: z.string().optional(),
      variables: z.string().optional().nullable(),
    })
    .transform((data) => ({
      query: data['query'],
      variables: data['variables'],
    }));
});

/**
 * Zod schema for mapping the CollectionRequestBodyGraphql1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBodyGraphql1Request = z.lazy(() => {
  return z
    .object({
      query: z.string().optional(),
      variables: z.string().optional().nullable(),
    })
    .transform((data) => ({
      query: data['query'],
      variables: data['variables'],
    }));
});
