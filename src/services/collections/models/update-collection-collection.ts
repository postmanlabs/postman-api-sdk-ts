import { z } from 'zod';
import {
  UpdateCollectionCollectionInfo,
  updateCollectionCollectionInfo,
  updateCollectionCollectionInfoRequest,
  updateCollectionCollectionInfoResponse,
} from './update-collection-collection-info';
import {
  VariableList2,
  variableList2,
  variableList2Request,
  variableList2Response,
} from './variable-list-2';
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

/**
 * Zod schema for the UpdateCollectionCollection model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateCollectionCollection = z.lazy(() => {
  return z.object({
    info: updateCollectionCollectionInfo.optional(),
    variable: z.array(variableList2).optional(),
    auth: collectionAuth.optional(),
    events: z.array(collectionEvent).optional(),
  });
});

/**
 *
 * @typedef  {UpdateCollectionCollection} updateCollectionCollection
 * @property {UpdateCollectionCollectionInfo} - An object that contains the collection's updated name and description.
 * @property {VariableList2[]} - A list of the collection's [variables](https://learning.postman.com/docs/sending-requests/variables/variables/). Make certain not to include sensitive information in variables.
 * @property {CollectionAuth} - The [authorization type supported by Postman](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/).
 * @property {CollectionEvent[]} - A list of scripts configured to run when specific events occur. These scripts can be referenced in the collection by their ID.
 */
export type UpdateCollectionCollection = z.infer<typeof updateCollectionCollection>;

/**
 * Zod schema for mapping API responses to the UpdateCollectionCollection application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionCollectionResponse = z.lazy(() => {
  return z
    .object({
      info: updateCollectionCollectionInfoResponse.optional(),
      variable: z.array(variableList2Response).optional(),
      auth: collectionAuthResponse.optional(),
      events: z.array(collectionEventResponse).optional(),
    })
    .transform((data) => ({
      info: data['info'],
      variable: data['variable'],
      auth: data['auth'],
      events: data['events'],
    }));
});

/**
 * Zod schema for mapping the UpdateCollectionCollection application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionCollectionRequest = z.lazy(() => {
  return z
    .object({
      info: updateCollectionCollectionInfoRequest.optional(),
      variable: z.array(variableList2Request).optional(),
      auth: collectionAuthRequest.optional(),
      events: z.array(collectionEventRequest).optional(),
    })
    .transform((data) => ({
      info: data['info'],
      variable: data['variable'],
      auth: data['auth'],
      events: data['events'],
    }));
});
