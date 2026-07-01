import { z } from 'zod';

/**
 * Zod schema for the GitRepoDataSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const gitRepoDataSchema = z.lazy(() => {
  return z.object({
    domain: z.string().optional().nullable(),
    repository: z.string().optional(),
    organization: z.string().optional(),
    schemaFolder: z.string().optional(),
    collectionFolder: z.string().optional(),
  });
});

/**
 * Information about the API's Git repository integration.
 * @typedef  {GitRepoDataSchema} gitRepoDataSchema - Information about the API's Git repository integration. - Information about the API's Git repository integration.
 * @property {string} - The domain at which the Git repository is hosted.
 * @property {string} - The repository's name.
 * @property {string} - The organization that owns the repository.
 * @property {string} - The API definition's repository folder location.
 * @property {string} - The API definition's collection repository folder location.
 */
export type GitRepoDataSchema = z.infer<typeof gitRepoDataSchema>;

/**
 * Zod schema for mapping API responses to the GitRepoDataSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const gitRepoDataSchemaResponse = z.lazy(() => {
  return z
    .object({
      domain: z.string().optional().nullable(),
      repository: z.string().optional(),
      organization: z.string().optional(),
      schemaFolder: z.string().optional(),
      collectionFolder: z.string().optional(),
    })
    .transform((data) => ({
      domain: data['domain'],
      repository: data['repository'],
      organization: data['organization'],
      schemaFolder: data['schemaFolder'],
      collectionFolder: data['collectionFolder'],
    }));
});

/**
 * Zod schema for mapping the GitRepoDataSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const gitRepoDataSchemaRequest = z.lazy(() => {
  return z
    .object({
      domain: z.string().optional().nullable(),
      repository: z.string().optional(),
      organization: z.string().optional(),
      schemaFolder: z.string().optional(),
      collectionFolder: z.string().optional(),
    })
    .transform((data) => ({
      domain: data['domain'],
      repository: data['repository'],
      organization: data['organization'],
      schemaFolder: data['schemaFolder'],
      collectionFolder: data['collectionFolder'],
    }));
});
