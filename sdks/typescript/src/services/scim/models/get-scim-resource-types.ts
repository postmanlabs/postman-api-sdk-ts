import { z } from 'zod';
import {
  SchemaExtensions,
  schemaExtensions,
  schemaExtensionsRequest,
  schemaExtensionsResponse,
} from './schema-extensions';

/**
 * Zod schema for the GetScimResourceTypes model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getScimResourceTypes = z.lazy(() => {
  return z.object({
    schemas: z.array(z.string()).optional(),
    id: z.string().optional(),
    name: z.string().optional(),
    endpoint: z.string().optional(),
    description: z.string().optional(),
    schema: z.string().optional(),
    schemaExtensions: z.array(schemaExtensions).optional(),
  });
});

/**
 *
 * @typedef  {GetScimResourceTypes} getScimResourceTypes
 * @property {string[]} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {string} - The resource's ID.
 * @property {string} - The resource's friendly name.
 * @property {string} - The resource's endpoint.
 * @property {string} - The resource's description.
 * @property {string} - The [SCIM schema URI](https://www.iana.org/assignments/scim/scim.xhtml).
 * @property {SchemaExtensions[]} - Information about the resource's schema extensions.
 */
export type GetScimResourceTypes = z.infer<typeof getScimResourceTypes>;

/**
 * Zod schema for mapping API responses to the GetScimResourceTypes application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getScimResourceTypesResponse = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      name: z.string().optional(),
      endpoint: z.string().optional(),
      description: z.string().optional(),
      schema: z.string().optional(),
      schemaExtensions: z.array(schemaExtensionsResponse).optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      name: data['name'],
      endpoint: data['endpoint'],
      description: data['description'],
      schema: data['schema'],
      schemaExtensions: data['schemaExtensions'],
    }));
});

/**
 * Zod schema for mapping the GetScimResourceTypes application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getScimResourceTypesRequest = z.lazy(() => {
  return z
    .object({
      schemas: z.array(z.string()).optional(),
      id: z.string().optional(),
      name: z.string().optional(),
      endpoint: z.string().optional(),
      description: z.string().optional(),
      schema: z.string().optional(),
      schemaExtensions: z.array(schemaExtensionsRequest).optional(),
    })
    .transform((data) => ({
      schemas: data['schemas'],
      id: data['id'],
      name: data['name'],
      endpoint: data['endpoint'],
      description: data['description'],
      schema: data['schema'],
      schemaExtensions: data['schemaExtensions'],
    }));
});
