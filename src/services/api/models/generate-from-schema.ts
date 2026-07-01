import { z } from 'zod';
import {
  GenerateFromSchemaOperationType,
  generateFromSchemaOperationType,
} from './generate-from-schema-operation-type';

/**
 * Zod schema for the GenerateFromSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const generateFromSchema = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    operationType: generateFromSchemaOperationType.optional(),
    options: z.any().optional(),
  });
});

/**
 *
 * @typedef  {GenerateFromSchema} generateFromSchema
 * @property {string} - The collection's name.
 * @property {GenerateFromSchemaOperationType} - The `GENERATE_FROM_SCHEMA` method.
 * @property {any} - The advanced creation options for collections and their values. For a complete list of properties and their values, see Postman's [OpenAPI to Postman Collection Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive.
 */
export type GenerateFromSchema = z.infer<typeof generateFromSchema>;

/**
 * Zod schema for mapping API responses to the GenerateFromSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateFromSchemaResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      operationType: generateFromSchemaOperationType.optional(),
      options: z.any().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      operationType: data['operationType'],
      options: data['options'],
    }));
});

/**
 * Zod schema for mapping the GenerateFromSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const generateFromSchemaRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      operationType: generateFromSchemaOperationType.optional(),
      options: z.any().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      operationType: data['operationType'],
      options: data['options'],
    }));
});
