import { z } from 'zod';
import {
  CreateVersionSchemaGitLinkedWithRootFileSchemas,
  createVersionSchemaGitLinkedWithRootFileSchemas,
  createVersionSchemaGitLinkedWithRootFileSchemasRequest,
  createVersionSchemaGitLinkedWithRootFileSchemasResponse,
} from './create-version-schema-git-linked-with-root-file-schemas';
import {
  CreateVersionSchemaGitLinkedWithRootFileCollections,
  createVersionSchemaGitLinkedWithRootFileCollections,
  createVersionSchemaGitLinkedWithRootFileCollectionsRequest,
  createVersionSchemaGitLinkedWithRootFileCollectionsResponse,
} from './create-version-schema-git-linked-with-root-file-collections';

/**
 * Zod schema for the CreateVersionSchemaGitLinkedWithRootFile model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createVersionSchemaGitLinkedWithRootFile = z.lazy(() => {
  return z.object({
    name: z.string(),
    branch: z.string(),
    schemas: z.array(createVersionSchemaGitLinkedWithRootFileSchemas),
    collections: z.array(createVersionSchemaGitLinkedWithRootFileCollections),
    releaseNotes: z.string().optional(),
  });
});

/**
 * Information about the API version.
 * @typedef  {CreateVersionSchemaGitLinkedWithRootFile} createVersionSchemaGitLinkedWithRootFile - Information about the API version. - Information about the API version.
 * @property {string} - The version's name.
 * @property {string} - The branch ID.
 * @property {CreateVersionSchemaGitLinkedWithRootFileSchemas[]} - A list of the version's schemas.
 * @property {CreateVersionSchemaGitLinkedWithRootFileCollections[]} - A list of the version's collections.
 * @property {string} - Information about the API version release. For example, changelog notes.
 */
export type CreateVersionSchemaGitLinkedWithRootFile = z.infer<
  typeof createVersionSchemaGitLinkedWithRootFile
>;

/**
 * Zod schema for mapping API responses to the CreateVersionSchemaGitLinkedWithRootFile application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaGitLinkedWithRootFileResponse = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      branch: z.string(),
      schemas: z.array(createVersionSchemaGitLinkedWithRootFileSchemasResponse),
      collections: z.array(createVersionSchemaGitLinkedWithRootFileCollectionsResponse),
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
 * Zod schema for mapping the CreateVersionSchemaGitLinkedWithRootFile application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createVersionSchemaGitLinkedWithRootFileRequest = z.lazy(() => {
  return z
    .object({
      name: z.string(),
      branch: z.string(),
      schemas: z.array(createVersionSchemaGitLinkedWithRootFileSchemasRequest),
      collections: z.array(createVersionSchemaGitLinkedWithRootFileCollectionsRequest),
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
