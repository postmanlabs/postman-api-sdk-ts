import { z } from 'zod';
import {
  CollectionInfo,
  collectionInfo,
  collectionInfoRequest,
  collectionInfoResponse,
} from './collection-info';
import {
  CollectionItem,
  collectionItem,
  collectionItemRequest,
  collectionItemResponse,
} from './collection-item';
import {
  CollectionAuth,
  collectionAuth,
  collectionAuthRequest,
  collectionAuthResponse,
} from './collection-auth';
import {
  CollectionEvent,
  collectionEvent,
  collectionEventRequest,
  collectionEventResponse,
} from './collection-event';
import {
  CollectionVariableList,
  collectionVariableList,
  collectionVariableListRequest,
  collectionVariableListResponse,
} from './collection-variable-list';

/**
 * Zod schema for the CollectionInformationCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionInformationCollection = z.lazy(() => {
  return z.object({
    info: collectionInfo.optional(),
    item: z.array(collectionItem).optional(),
    auth: collectionAuth.optional(),
    event: z.array(collectionEvent).optional(),
    variable: z.array(collectionVariableList).optional(),
    additionalProperties: z.record(z.string(), z.unknown()).optional(),
  });
});

/**
 * For a complete list of this endpoint's possible values, use the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).
 * @typedef {CollectionInformationCollection} collectionInformationCollection
 * @property {CollectionInfo} info - Information about the collection.
 * @property {CollectionItem[]} item - A list of the collection's requests and folders.
 * @property {CollectionAuth} auth - The [authorization type supported by Postman](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/).
 * @property {CollectionEvent[]} event - A list of scripts configured to run when specific events occur. These scripts can be referenced in the collection by their ID.
 * @property {CollectionVariableList[]} variable - A list of the collection's [variables](https://learning.postman.com/docs/sending-requests/variables/variables/). Make certain not to include sensitive information in variables.
 */
export type CollectionInformationCollection = z.infer<typeof collectionInformationCollection>;

/**
 * Zod schema for mapping API responses to the CollectionInformationCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionInformationCollectionResponse = z.lazy(() => {
  return z
    .object({
      info: collectionInfoResponse.optional(),
      item: z.array(collectionItemResponse).optional(),
      auth: collectionAuthResponse.optional(),
      event: z.array(collectionEventResponse).optional(),
      variable: z.array(collectionVariableListResponse).optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>(['info', 'item', 'auth', 'event', 'variable']);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        info: data['info'],
        item: data['item'],
        auth: data['auth'],
        event: data['event'],
        variable: data['variable'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the CollectionInformationCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionInformationCollectionRequest = z.lazy(() => {
  return z
    .object({
      info: collectionInfoRequest.optional(),
      item: z.array(collectionItemRequest).optional(),
      auth: collectionAuthRequest.optional(),
      event: z.array(collectionEventRequest).optional(),
      variable: z.array(collectionVariableListRequest).optional(),
      additionalProperties: z.record(z.string(), z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      info: data['info'],
      item: data['item'],
      auth: data['auth'],
      event: data['event'],
      variable: data['variable'],
    }));
});
