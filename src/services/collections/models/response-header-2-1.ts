import { z } from 'zod';

/**
 * Zod schema for the ResponseHeader2_1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const responseHeader2_1 = z.lazy(() => {
  return z.object({
    key: z.string(),
    value: z.string(),
    disabled: z.boolean().optional(),
    description: z.string().optional().nullable(),
  });
});

/**
 * Information about the header.
 * @typedef  {ResponseHeader2_1} responseHeader2_1 - Information about the header. - Information about the header.
 * @property {string} - The header's key, such as `Content-Type` or `X-Custom-Header`.
 * @property {string} - The header key's value.
 * @property {boolean} - If true, the current header isn't sent with requests.
 * @property {string} - The header's description.
 */
export type ResponseHeader2_1 = z.infer<typeof responseHeader2_1>;

/**
 * Zod schema for mapping API responses to the ResponseHeader2_1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const responseHeader2_1Response = z.lazy(() => {
  return z
    .object({
      key: z.string(),
      value: z.string(),
      disabled: z.boolean().optional(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      disabled: data['disabled'],
      description: data['description'],
    }));
});

/**
 * Zod schema for mapping the ResponseHeader2_1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const responseHeader2_1Request = z.lazy(() => {
  return z
    .object({
      key: z.string(),
      value: z.string(),
      disabled: z.boolean().optional(),
      description: z.string().optional().nullable(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
      disabled: data['disabled'],
      description: data['description'],
    }));
});
