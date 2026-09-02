import { z } from 'zod';

/**
 * Zod schema for the EntityTagData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const entityTagData = z.lazy(() => {
  return z.object({
    supported: z.boolean().optional(),
  });
});

/**
 * Information about the [entity tag](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag) (Etag) HTTP response header configuration.
 * @typedef {EntityTagData} entityTagData
 * @property {boolean} supported - If true, the feature is supported.
 */
export type EntityTagData = z.infer<typeof entityTagData>;

/**
 * Zod schema for mapping API responses to the EntityTagData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const entityTagDataResponse = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});

/**
 * Zod schema for mapping the EntityTagData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const entityTagDataRequest = z.lazy(() => {
  return z
    .object({
      supported: z.boolean().optional(),
    })
    .transform((data) => ({
      supported: data['supported'],
    }));
});
