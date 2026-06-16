import { z } from 'zod';

/**
 * Zod schema for the CollectionRequestCreatedData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionRequestCreatedData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    owner: z.string().optional(),
    folder: z.string().optional().nullable(),
    responses: z.array(z.string()).optional(),
    collection: z.string().optional(),
    responsesOrder: z
      .array(z.string())
      .refine((items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length, {
        message: 'Array items must be unique',
      })
      .optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    lastUpdatedBy: z.string().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * Information about the created request. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @typedef  {CollectionRequestCreatedData} collectionRequestCreatedData - Information about the created request. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). - Information about the created request. For a complete list of properties, refer to the **Request** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @property {string} - The request's ID.
 * @property {string} - The request's name.
 * @property {string} - The user ID of the request's owner.
 * @property {string} - Information about the request's parent folder.
 * @property {string[]} - A list of the request's responses.
 * @property {string} - The collection ID that the request belongs to.
 * @property {string[]} - A list of response IDs and their order in the folder.
 * @property {string} - The requeset's creation date and time.
 * @property {string} - The date and time at which the request was last updated.
 * @property {string} - The user ID of the user that last updated the folder.
 */
export type CollectionRequestCreatedData = z.infer<typeof collectionRequestCreatedData>;

/**
 * Zod schema for mapping API responses to the CollectionRequestCreatedData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestCreatedDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      owner: z.string().optional(),
      folder: z.string().optional().nullable(),
      responses: z.array(z.string()).optional(),
      collection: z.string().optional(),
      responses_order: z
        .array(z.string())
        .refine(
          (items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length,
          { message: 'Array items must be unique' },
        )
        .optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      lastUpdatedBy: z.string().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>([
        'id',
        'name',
        'owner',
        'folder',
        'responses',
        'collection',
        'responses_order',
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
        name: data['name'],
        owner: data['owner'],
        folder: data['folder'],
        responses: data['responses'],
        collection: data['collection'],
        responsesOrder: data['responses_order'],
        createdAt: data['createdAt'],
        updatedAt: data['updatedAt'],
        lastUpdatedBy: data['lastUpdatedBy'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the CollectionRequestCreatedData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionRequestCreatedDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      owner: z.string().optional(),
      folder: z.string().optional().nullable(),
      responses: z.array(z.string()).optional(),
      collection: z.string().optional(),
      responsesOrder: z
        .array(z.string())
        .refine(
          (items) => new Set(items.map((item) => JSON.stringify(item))).size === items.length,
          { message: 'Array items must be unique' },
        )
        .optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      lastUpdatedBy: z.string().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      id: data['id'],
      name: data['name'],
      owner: data['owner'],
      folder: data['folder'],
      responses: data['responses'],
      collection: data['collection'],
      responses_order: data['responsesOrder'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      lastUpdatedBy: data['lastUpdatedBy'],
    }));
});
