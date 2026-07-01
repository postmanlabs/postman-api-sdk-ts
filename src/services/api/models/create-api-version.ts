import { z } from 'zod';
import {
  createVersionSchemaNotGitLinked,
  createVersionSchemaNotGitLinkedRequest,
  createVersionSchemaNotGitLinkedResponse,
} from './create-version-schema-not-git-linked';
import {
  createVersionSchemaGitLinked,
  createVersionSchemaGitLinkedRequest,
  createVersionSchemaGitLinkedResponse,
} from './create-version-schema-git-linked';
import {
  createVersionSchemaGitLinkedWithRootFile,
  createVersionSchemaGitLinkedWithRootFileRequest,
  createVersionSchemaGitLinkedWithRootFileResponse,
} from './create-version-schema-git-linked-with-root-file';

/**
 * Zod schema for the CreateApiVersion model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createApiVersion = z.lazy(() => {
  return z.union([
    createVersionSchemaNotGitLinked,
    createVersionSchemaGitLinked,
    createVersionSchemaGitLinkedWithRootFile,
  ]);
});

/**
 *
 * @typedef  {CreateApiVersion} createApiVersion
 * @property {CreateVersionSchemaNotGitLinked} - Information about the API version.
 * @property {CreateVersionSchemaGitLinked} - Information about the API version.
 * @property {CreateVersionSchemaGitLinkedWithRootFile} - Information about the API version.
 */
export type CreateApiVersion = z.infer<typeof createApiVersion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiVersionResponse = z.lazy(() => {
  return z.union([
    createVersionSchemaNotGitLinkedResponse,
    createVersionSchemaGitLinkedResponse,
    createVersionSchemaGitLinkedWithRootFileResponse,
  ]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const createApiVersionRequest = z.lazy(() => {
  return z.union([
    createVersionSchemaNotGitLinkedRequest,
    createVersionSchemaGitLinkedRequest,
    createVersionSchemaGitLinkedWithRootFileRequest,
  ]);
});
