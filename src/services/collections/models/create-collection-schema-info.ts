import { z } from 'zod';

/**
 * Zod schema for the CreateCollectionSchemaInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createCollectionSchemaInfo = z.lazy(() => {
  return z.object({
    name: z.string(),
    description: z.string().optional(),
    schema: z.string(),
  });
});

/**
 * Information about the collection.
 * @typedef  {CreateCollectionSchemaInfo} createCollectionSchemaInfo - Information about the collection. - Information about the collection.
 * @property {string} - The collection's name.
 * @property {string} - The collection's description.
 * @property {InformationSchema1} - The "https://schema.postman.com/json/collection/v2.1.0/collection.json" Postman Collection Format v2.1.0 schema.
 */
export type CreateCollectionSchemaInfo = z.infer<typeof createCollectionSchemaInfo>;

/**
 * Zod schema for mapping API responses to the CreateCollectionSchemaInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionSchemaInfoResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      description: z.string().optional(),
      schema: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
      schema: data['schema'],
    }));
});

/**
 * Zod schema for mapping the CreateCollectionSchemaInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionSchemaInfoRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      description: z.string().optional(),
      schema: z.string(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
      schema: data['schema'],
    }));
});
