import { z } from 'zod';

/**
 * Zod schema for the CollectionRequestBodyGraphql2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestBodyGraphql2 = z.lazy(() => {
  return z.object({
    query: z.string().optional(),
    variables: z.string().optional().nullable(),
  });
});

/**
 * If the `mode` value is `graphql`, an object containing the GraphQL request information.
 * @typedef  {CollectionRequestBodyGraphql2} collectionRequestBodyGraphql2 - If the `mode` value is `graphql`, an object containing the GraphQL request information. - If the `mode` value is `graphql`, an object containing the GraphQL request information.
 * @property {string} - The GraphQL query.
 * @property {string} - The GraphQL query variables, in JSON format.
 */
export type CollectionRequestBodyGraphql2 = z.infer<typeof collectionRequestBodyGraphql2>;

/**
 * Zod schema for mapping API responses to the CollectionRequestBodyGraphql2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBodyGraphql2Response = z.lazy(() => {
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
 * Zod schema for mapping the CollectionRequestBodyGraphql2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBodyGraphql2Request = z.lazy(() => {
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
