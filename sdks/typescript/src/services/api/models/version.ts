import { z } from 'zod';
import {
  VersionSchemas,
  versionSchemas,
  versionSchemasRequest,
  versionSchemasResponse,
} from './version-schemas';
import {
  VersionCollections,
  versionCollections,
  versionCollectionsRequest,
  versionCollectionsResponse,
} from './version-collections';

/**
 * Zod schema for the Version model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const version = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    releaseNotes: z.string().optional(),
    schemas: z.array(versionSchemas).optional(),
    collections: z.array(versionCollections).optional(),
  });
});

/**
 * Information about the API version.
 * @typedef  {Version} version - Information about the API version. - Information about the API version.
 * @property {string} - The version's ID.
 * @property {string} - The version's name.
 * @property {string} - The date and time at which the version was created.
 * @property {string} - The date and time at which the version was last updated.
 * @property {string} - The version's release notes.
 * @property {VersionSchemas[]} - A list of the API's schemas.
 * @property {VersionCollections[]} - A list of the API's collections.
 */
export type Version = z.infer<typeof version>;

/**
 * Zod schema for mapping API responses to the Version application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const versionResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      releaseNotes: z.string().optional(),
      schemas: z.array(versionSchemasResponse).optional(),
      collections: z.array(versionCollectionsResponse).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      releaseNotes: data['releaseNotes'],
      schemas: data['schemas'],
      collections: data['collections'],
    }));
});

/**
 * Zod schema for mapping the Version application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const versionRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      releaseNotes: z.string().optional(),
      schemas: z.array(versionSchemasRequest).optional(),
      collections: z.array(versionCollectionsRequest).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      releaseNotes: data['releaseNotes'],
      schemas: data['schemas'],
      collections: data['collections'],
    }));
});
