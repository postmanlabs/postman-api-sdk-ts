import { z } from 'zod';
import { InfoSchema, infoSchema } from './info-schema';

/**
 * Zod schema for the DataInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const dataInfo = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    schema: infoSchema.optional(),
  });
});

/**
 * Information about the collection.
 * @typedef  {DataInfo} dataInfo - Information about the collection. - Information about the collection.
 * @property {string} - The collection's name.
 * @property {InfoSchema} - The collection's schema format.
 */
export type DataInfo = z.infer<typeof dataInfo>;

/**
 * Zod schema for mapping API responses to the DataInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dataInfoResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      schema: infoSchema.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      schema: data['schema'],
    }));
});

/**
 * Zod schema for mapping the DataInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const dataInfoRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      schema: infoSchema.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      schema: data['schema'],
    }));
});
