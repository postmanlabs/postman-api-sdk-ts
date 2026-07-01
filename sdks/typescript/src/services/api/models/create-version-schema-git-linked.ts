import { z } from 'zod';
import {
  CreateVersionSchemaGitLinkedSchemas,
  createVersionSchemaGitLinkedSchemas,
  createVersionSchemaGitLinkedSchemasRequest,
  createVersionSchemaGitLinkedSchemasResponse,
} from './create-version-schema-git-linked-schemas';
import {
  CreateVersionSchemaGitLinkedCollections,
  createVersionSchemaGitLinkedCollections,
  createVersionSchemaGitLinkedCollectionsRequest,
  createVersionSchemaGitLinkedCollectionsResponse,
} from './create-version-schema-git-linked-collections';

/**
 * Zod schema for the CreateVersionSchemaGitLinked model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createVersionSchemaGitLinked = z.lazy(() => {
  return z.object({
    name: z.string(),
    branch: z.string(),
    schemas: z.array(createVersionSchemaGitLinkedSchemas),
    collections: z.array(createVersionSchemaGitLinkedCollections),
    releaseNotes: z.string().optional(),
  });
});

/**
 * Information about the API version.
 * @typedef  {CreateVersionSchemaGitLinked} createVersionSchemaGitLinked - Information about the API version. - Information about the API version.
 * @property {string} - The version's name.
 * @property {string} - The branch ID.
 * @property {CreateVersionSchemaGitLinkedSchemas[]} - A list of the version's schemas.
 * @property {CreateVersionSchemaGitLinkedCollections[]} - A list of the version's collections.
 * @property {string} - Information about the API version release. For example, changelog notes.
 */
export type CreateVersionSchemaGitLinked = z.infer<typeof createVersionSchemaGitLinked>;

/**
 * Zod schema for mapping API responses to the CreateVersionSchemaGitLinked application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaGitLinkedResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      branch: z.string(),
      schemas: z.array(createVersionSchemaGitLinkedSchemasResponse),
      collections: z.array(createVersionSchemaGitLinkedCollectionsResponse),
      releaseNotes: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      branch: data['branch'],
      schemas: data['schemas'],
      collections: data['collections'],
      releaseNotes: data['releaseNotes'],
    }));
});

/**
 * Zod schema for mapping the CreateVersionSchemaGitLinked application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaGitLinkedRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      branch: z.string(),
      schemas: z.array(createVersionSchemaGitLinkedSchemasRequest),
      collections: z.array(createVersionSchemaGitLinkedCollectionsRequest),
      releaseNotes: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      branch: data['branch'],
      schemas: data['schemas'],
      collections: data['collections'],
      releaseNotes: data['releaseNotes'],
    }));
});
