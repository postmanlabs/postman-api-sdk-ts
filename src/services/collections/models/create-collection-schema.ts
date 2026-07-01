import { z } from 'zod';
import {
  CreateCollectionSchemaInfo,
  createCollectionSchemaInfo,
  createCollectionSchemaInfoRequest,
  createCollectionSchemaInfoResponse,
} from './create-collection-schema-info';
import {
  CreateCollectionSchemaItem,
  createCollectionSchemaItem,
  createCollectionSchemaItemRequest,
  createCollectionSchemaItemResponse,
} from './create-collection-schema-item';
import {
  CreateCollectionSchemaEvent,
  createCollectionSchemaEvent,
  createCollectionSchemaEventRequest,
  createCollectionSchemaEventResponse,
} from './create-collection-schema-event';
import { Variable, variable, variableRequest, variableResponse } from './variable';
import {
  CreateCollectionSchemaAuth,
  createCollectionSchemaAuth,
  createCollectionSchemaAuthRequest,
  createCollectionSchemaAuthResponse,
} from './create-collection-schema-auth';
import {
  ProtocolProfileBehavior,
  protocolProfileBehavior,
  protocolProfileBehaviorRequest,
  protocolProfileBehaviorResponse,
} from './protocol-profile-behavior';

/**
 * Zod schema for the CreateCollectionSchema model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createCollectionSchema = z.lazy(() => {
  return z.object({
    info: createCollectionSchemaInfo,
    item: z.array(createCollectionSchemaItem),
    event: z.array(createCollectionSchemaEvent).optional(),
    variable: z.array(variable).optional(),
    auth: createCollectionSchemaAuth.optional(),
    protocolProfileBehavior: protocolProfileBehavior.optional(),
  });
});

/**
 *
 * @typedef  {CreateCollectionSchema} createCollectionSchema
 * @property {CreateCollectionSchemaInfo} - Information about the collection.
 * @property {CreateCollectionSchemaItem[]}
 * @property {CreateCollectionSchemaEvent[]} - A list of scripts configured to run when specific events occur.
 * @property {Variable[]} - A list of the collection's [variables](https://learning.postman.com/docs/sending-requests/variables/variables/). Make certain not to include sensitive information in variables.
 * @property {CreateCollectionSchemaAuth} - The [authorization type supported by Postman](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/).
 * @property {ProtocolProfileBehavior} - The [settings](https://learning.postman.com/docs/sending-requests/create-requests/request-settings/) used to alter the [Protocol Profile Behavior](https://github.com/postmanlabs/postman-runtime/blob/develop/docs/protocol-profile-behavior.md) of sending a request.
 */
export type CreateCollectionSchema = z.infer<typeof createCollectionSchema>;

/**
 * Zod schema for mapping API responses to the CreateCollectionSchema application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionSchemaResponse = z.lazy(() => {
  return z
    .object({
      info: createCollectionSchemaInfoResponse,
      item: z.array(createCollectionSchemaItemResponse),
      event: z.array(createCollectionSchemaEventResponse).optional(),
      variable: z.array(variableResponse).optional(),
      auth: createCollectionSchemaAuthResponse.optional(),
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
 * Zod schema for mapping the CreateCollectionSchema application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionSchemaRequest = z.lazy(() => {
  return z
    .object({
      info: createCollectionSchemaInfoRequest,
      item: z.array(createCollectionSchemaItemRequest),
      event: z.array(createCollectionSchemaEventRequest).optional(),
      variable: z.array(variableRequest).optional(),
      auth: createCollectionSchemaAuthRequest.optional(),
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
