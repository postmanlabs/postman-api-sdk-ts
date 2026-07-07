import { z } from 'zod';
import {
  GitRepoDataSchema,
  gitRepoDataSchema,
  gitRepoDataSchemaRequest,
  gitRepoDataSchemaResponse,
} from './git-repo-data-schema';
import {
  ExtendedApiDataSchemas,
  extendedApiDataSchemas,
  extendedApiDataSchemasRequest,
  extendedApiDataSchemasResponse,
} from './extended-api-data-schemas';
import { Versions, versions, versionsRequest, versionsResponse } from './versions';
import {
  ExtendedApiDataCollections,
  extendedApiDataCollections,
  extendedApiDataCollectionsRequest,
  extendedApiDataCollectionsResponse,
} from './extended-api-data-collections';

/**
 * Zod schema for the ExtendedApiData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const extendedApiData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    summary: z.string().optional(),
    createdAt: z.string().optional(),
    createdBy: z.number().optional(),
    updatedAt: z.string().optional(),
    updatedBy: z.number().optional(),
    description: z.string().optional(),
    gitInfo: gitRepoDataSchema.optional(),
    schemas: z.array(extendedApiDataSchemas).optional(),
    versions: z.array(versions).optional(),
    collections: z.array(extendedApiDataCollections).optional(),
  });
});

/**
 *
 * @typedef  {ExtendedApiData} extendedApiData
 * @property {string} - The API's ID.
 * @property {string} - The API's name.
 * @property {string} - The API's short summary.
 * @property {string} - The date and time at which the API was created.
 * @property {number} - The Postman ID of the user that created the API.
 * @property {string} - The date and time at which the API was updated.
 * @property {number} - The Postman ID of the user that updated the API.
 * @property {string} - The API's description.
 * @property {GitRepoDataSchema} - Information about the API's Git repository integration.
 * @property {ExtendedApiDataSchemas[]} - The API's schemas.
 * @property {Versions[]} - The API's versions.
 * @property {ExtendedApiDataCollections[]} - The API's collections.
 */
export type ExtendedApiData = z.infer<typeof extendedApiData>;

/**
 * Zod schema for mapping API responses to the ExtendedApiData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const extendedApiDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      summary: z.string().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.number().optional(),
      description: z.string().optional(),
      gitInfo: gitRepoDataSchemaResponse.optional(),
      schemas: z.array(extendedApiDataSchemasResponse).optional(),
      versions: z.array(versionsResponse).optional(),
      collections: z.array(extendedApiDataCollectionsResponse).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      summary: data['summary'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
      description: data['description'],
      gitInfo: data['gitInfo'],
      schemas: data['schemas'],
      versions: data['versions'],
      collections: data['collections'],
    }));
});

/**
 * Zod schema for mapping the ExtendedApiData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const extendedApiDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      summary: z.string().optional(),
      createdAt: z.string().optional(),
      createdBy: z.number().optional(),
      updatedAt: z.string().optional(),
      updatedBy: z.number().optional(),
      description: z.string().optional(),
      gitInfo: gitRepoDataSchemaRequest.optional(),
      schemas: z.array(extendedApiDataSchemasRequest).optional(),
      versions: z.array(versionsRequest).optional(),
      collections: z.array(extendedApiDataCollectionsRequest).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      summary: data['summary'],
      createdAt: data['createdAt'],
      createdBy: data['createdBy'],
      updatedAt: data['updatedAt'],
      updatedBy: data['updatedBy'],
      description: data['description'],
      gitInfo: data['gitInfo'],
      schemas: data['schemas'],
      versions: data['versions'],
      collections: data['collections'],
    }));
});
