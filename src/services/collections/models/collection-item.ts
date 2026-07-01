import { z } from 'zod';
import {
  VariableList2,
  variableList2,
  variableList2Request,
  variableList2Response,
} from './variable-list-2';
import {
  CollectionEvent,
  collectionEvent,
  collectionEventRequest,
  collectionEventResponse,
} from './collection-event';
import {
  ResponseOriginalRequest2,
  responseOriginalRequest2,
  responseOriginalRequest2Request,
  responseOriginalRequest2Response,
} from './response-original-request-2';
import {
  ItemResponse2,
  itemResponse2,
  itemResponse2Request,
  itemResponse2Response,
} from './item-response-2';
import {
  ProtocolProfileBehavior,
  protocolProfileBehavior,
  protocolProfileBehaviorRequest,
  protocolProfileBehaviorResponse,
} from './protocol-profile-behavior';

/**
 * Zod schema for the CollectionItem model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionItem = z.lazy(() => {
  return z.object({
    id: z.string(),
    name: z.string().optional(),
    description: z.string().optional().nullable(),
    variable: z.array(variableList2).optional(),
    event: z.array(collectionEvent).optional(),
    request: responseOriginalRequest2.optional(),
    response: z.array(itemResponse2).optional(),
    protocolProfileBehavior: protocolProfileBehavior.optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    uid: z.string().optional(),
  });
});

/**
 * Information about the collection request or folder.
 * @typedef  {CollectionItem} collectionItem - Information about the collection request or folder. - Information about the collection request or folder.
 * @property {string} - The collection item's ID.
 * @property {string} - The item's name.
 * @property {string} - The item's description.
 * @property {VariableList2[]} - A list of the collection's [variables](https://learning.postman.com/docs/sending-requests/variables/variables/). Make certain not to include sensitive information in variables.
 * @property {CollectionEvent[]} - A list of scripts configured to run when specific events occur. These scripts can be referenced in the collection by their ID.
 * @property {ResponseOriginalRequest2} - Information about the collection request.
 * @property {ItemResponse2[]} - A list of the collection's responses.
 * @property {ProtocolProfileBehavior} - The [settings](https://learning.postman.com/docs/sending-requests/create-requests/request-settings/) used to alter the [Protocol Profile Behavior](https://github.com/postmanlabs/postman-runtime/blob/develop/docs/protocol-profile-behavior.md) of sending a request.
 * @property {string} - The date and time at which the collection item was created.
 * @property {string} - The date and time at which the collection item was updated.
 * @property {string} - The collection item's unique ID.
 */
export type CollectionItem = z.infer<typeof collectionItem>;

/**
 * Zod schema for mapping API responses to the CollectionItem application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionItemResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      variable: z.array(variableList2Response).optional(),
      event: z.array(collectionEventResponse).optional(),
      request: responseOriginalRequest2Response.optional(),
      response: z.array(itemResponse2Response).optional(),
      protocolProfileBehavior: protocolProfileBehaviorResponse.optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
      variable: data['variable'],
      event: data['event'],
      request: data['request'],
      response: data['response'],
      protocolProfileBehavior: data['protocolProfileBehavior'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      uid: data['uid'],
    }));
});

/**
 * Zod schema for mapping the CollectionItem application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionItemRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      variable: z.array(variableList2Request).optional(),
      event: z.array(collectionEventRequest).optional(),
      request: responseOriginalRequest2Request.optional(),
      response: z.array(itemResponse2Request).optional(),
      protocolProfileBehavior: protocolProfileBehaviorRequest.optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      uid: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      description: data['description'],
      variable: data['variable'],
      event: data['event'],
      request: data['request'],
      response: data['response'],
      protocolProfileBehavior: data['protocolProfileBehavior'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      uid: data['uid'],
    }));
});
