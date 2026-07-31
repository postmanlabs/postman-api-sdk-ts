import { z } from 'zod';
import {
  ModifyCollectionSchemaInfo,
  modifyCollectionSchemaInfo,
  modifyCollectionSchemaInfoRequest,
  modifyCollectionSchemaInfoResponse,
} from './modify-collection-schema-info';
import {
  CollectionItem,
  collectionItem,
  collectionItemRequest,
  collectionItemResponse,
} from './collection-item';
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
import {
  CollectionAuth,
  collectionAuth,
  collectionAuthRequest,
  collectionAuthResponse,
} from './collection-auth';
import {
  ProtocolProfileBehavior,
  protocolProfileBehavior,
  protocolProfileBehaviorRequest,
  protocolProfileBehaviorResponse,
} from './protocol-profile-behavior';

/**
 * Zod schema for the ModifyCollectionSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const modifyCollectionSchema = z.lazy(() => {
  return z.object({
    info: modifyCollectionSchemaInfo,
    item: z.array(collectionItem),
    event: z.array(collectionEvent).optional(),
    variable: z.array(collectionVariableList).optional(),
    auth: collectionAuth.optional(),
    protocolProfileBehavior: protocolProfileBehavior.optional(),
  });
});

/**
 *
 * @typedef  {ModifyCollectionSchema} modifyCollectionSchema
 * @property {ModifyCollectionSchemaInfo} - Information about the collection.
 * @property {CollectionItem[]}
 * @property {CollectionEvent[]} - A list of scripts configured to run when specific events occur. These scripts can be referenced in the collection by their ID.
 * @property {CollectionVariableList[]} - A list of the collection's [variables](https://learning.postman.com/docs/sending-requests/variables/variables/). Make certain not to include sensitive information in variables.
 * @property {CollectionAuth} - The [authorization type supported by Postman](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/).
 * @property {ProtocolProfileBehavior} - The [settings](https://learning.postman.com/docs/sending-requests/create-requests/request-settings/) used to alter the [Protocol Profile Behavior](https://github.com/postmanlabs/postman-runtime/blob/develop/docs/protocol-profile-behavior.md) of sending a request.
 */
export type ModifyCollectionSchema = z.infer<typeof modifyCollectionSchema>;

/**
 * Zod schema for mapping API responses to the ModifyCollectionSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const modifyCollectionSchemaResponse = z.lazy(() => {
  return z
    .object({
      info: modifyCollectionSchemaInfoResponse,
      item: z.array(collectionItemResponse),
      event: z.array(collectionEventResponse).optional(),
      variable: z.array(collectionVariableListResponse).optional(),
      auth: collectionAuthResponse.optional(),
      protocolProfileBehavior: protocolProfileBehaviorResponse.optional(),
    })
    .transform((data) => ({
      info: data['info'],
      item: data['item'],
      event: data['event'],
      variable: data['variable'],
      auth: data['auth'],
      protocolProfileBehavior: data['protocolProfileBehavior'],
    }));
});

/**
 * Zod schema for mapping the ModifyCollectionSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const modifyCollectionSchemaRequest = z.lazy(() => {
  return z
    .object({
      info: modifyCollectionSchemaInfoRequest,
      item: z.array(collectionItemRequest),
      event: z.array(collectionEventRequest).optional(),
      variable: z.array(collectionVariableListRequest).optional(),
      auth: collectionAuthRequest.optional(),
      protocolProfileBehavior: protocolProfileBehaviorRequest.optional(),
    })
    .transform((data) => ({
      info: data['info'],
      item: data['item'],
      event: data['event'],
      variable: data['variable'],
      auth: data['auth'],
      protocolProfileBehavior: data['protocolProfileBehavior'],
    }));
});
