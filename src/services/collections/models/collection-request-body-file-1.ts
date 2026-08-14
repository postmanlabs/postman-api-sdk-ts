import { z } from 'zod';

/**
 * Zod schema for the CollectionRequestBodyFile1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestBodyFile1 = z.lazy(() => {
  return z.object({
    src: z.string().optional().nullable(),
  });
});

/**
 * If the `mode` value is `file`, an object containing the file request information.
 * @typedef {CollectionRequestBodyFile1} collectionRequestBodyFile1
 * @property {string} src - The name of the file to upload (not its path). A null value indicates that no file is selected as a part of the request body.
 */
export type CollectionRequestBodyFile1 = z.infer<typeof collectionRequestBodyFile1>;

/**
 * Zod schema for mapping API responses to the CollectionRequestBodyFile1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBodyFile1Response = z.lazy(() => {
  return z
    .object({
      src: z.string().optional().nullable(),
    })
    .transform((data) => ({
      src: data['src'],
    }));
});

/**
 * Zod schema for mapping the CollectionRequestBodyFile1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestBodyFile1Request = z.lazy(() => {
  return z
    .object({
      src: z.string().optional().nullable(),
    })
    .transform((data) => ({
      src: data['src'],
    }));
});
