import { z } from 'zod';
import {
  CreateVersionSchemaNotGitLinkedSchemas,
  createVersionSchemaNotGitLinkedSchemas,
  createVersionSchemaNotGitLinkedSchemasRequest,
  createVersionSchemaNotGitLinkedSchemasResponse,
} from './create-version-schema-not-git-linked-schemas';
import {
  CreateVersionSchemaNotGitLinkedCollections,
  createVersionSchemaNotGitLinkedCollections,
  createVersionSchemaNotGitLinkedCollectionsRequest,
  createVersionSchemaNotGitLinkedCollectionsResponse,
} from './create-version-schema-not-git-linked-collections';

/**
 * Zod schema for the CreateVersionSchemaNotGitLinked model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createVersionSchemaNotGitLinked = z.lazy(() => {
  return z.object({
    name: z.string(),
    schemas: z.array(createVersionSchemaNotGitLinkedSchemas),
    collections: z.array(createVersionSchemaNotGitLinkedCollections),
    releaseNotes: z.string().optional(),
  });
});

/**
 * Information about the API version.
 * @typedef  {CreateVersionSchemaNotGitLinked} createVersionSchemaNotGitLinked - Information about the API version. - Information about the API version.
 * @property {string} - The version's name.
 * @property {CreateVersionSchemaNotGitLinkedSchemas[]} - A list of the version's schemas.
 * @property {CreateVersionSchemaNotGitLinkedCollections[]} - A list of the version's collections.
 * @property {string} - Information about the API version release. For example, changelog notes.
 */
export type CreateVersionSchemaNotGitLinked = z.infer<typeof createVersionSchemaNotGitLinked>;

/**
 * Zod schema for mapping API responses to the CreateVersionSchemaNotGitLinked application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaNotGitLinkedResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      schemas: z.array(createVersionSchemaNotGitLinkedSchemasResponse),
      collections: z.array(createVersionSchemaNotGitLinkedCollectionsResponse),
      releaseNotes: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      schemas: data['schemas'],
      collections: data['collections'],
      releaseNotes: data['releaseNotes'],
    }));
});

/**
 * Zod schema for mapping the CreateVersionSchemaNotGitLinked application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaNotGitLinkedRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      schemas: z.array(createVersionSchemaNotGitLinkedSchemasRequest),
      collections: z.array(createVersionSchemaNotGitLinkedCollectionsRequest),
      releaseNotes: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      schemas: data['schemas'],
      collections: data['collections'],
      releaseNotes: data['releaseNotes'],
    }));
});
