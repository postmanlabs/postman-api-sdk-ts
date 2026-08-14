import { z } from 'zod';

/**
 * Zod schema for the CollectionResponseCreatedData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionResponseCreatedData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    owner: z.string().optional(),
    request: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    lastUpdatedBy: z.string().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * Information about the response. For a complete list of properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @typedef {CollectionResponseCreatedData} collectionResponseCreatedData
 * @property {string} id - The response's ID.
 * @property {string} owner - The user ID of the response's owner.
 * @property {string} request - The request ID of the response's associated request.
 * @property {string} createdAt - The date and time at which the response was created.
 * @property {string} updatedAt - The date and time at which the response was last updated.
 * @property {string} lastUpdatedBy - The user ID of the user who last updated the response.
 */
export type CollectionResponseCreatedData = z.infer<typeof collectionResponseCreatedData>;

/**
 * Zod schema for mapping API responses to the CollectionResponseCreatedData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseCreatedDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      owner: z.string().optional(),
      request: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      lastUpdatedBy: z.string().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>([
        'id',
        'owner',
        'request',
        'createdAt',
        'updatedAt',
        'lastUpdatedBy',
      ]);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        id: data['id'],
        owner: data['owner'],
        request: data['request'],
        createdAt: data['createdAt'],
        updatedAt: data['updatedAt'],
        lastUpdatedBy: data['lastUpdatedBy'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the CollectionResponseCreatedData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionResponseCreatedDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      owner: z.string().optional(),
      request: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      lastUpdatedBy: z.string().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      id: data['id'],
      owner: data['owner'],
      request: data['request'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      lastUpdatedBy: data['lastUpdatedBy'],
    }));
});
