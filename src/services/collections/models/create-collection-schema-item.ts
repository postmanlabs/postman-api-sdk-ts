import { z } from 'zod';
import { Variable, variable, variableRequest, variableResponse } from './variable';
import {
  CreateCollectionSchemaEvent,
  createCollectionSchemaEvent,
  createCollectionSchemaEventRequest,
  createCollectionSchemaEventResponse,
} from './create-collection-schema-event';
import {
  ResponseOriginalRequest1,
  responseOriginalRequest1,
  responseOriginalRequest1Request,
  responseOriginalRequest1Response,
} from './response-original-request-1';
import {
  ItemResponse1,
  itemResponse1,
  itemResponse1Request,
  itemResponse1Response,
} from './item-response-1';
import {
  ProtocolProfileBehavior,
  protocolProfileBehavior,
  protocolProfileBehaviorRequest,
  protocolProfileBehaviorResponse,
} from './protocol-profile-behavior';

/**
 * Zod schema for the CreateCollectionSchemaItem model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createCollectionSchemaItem = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    description: z.string().optional().nullable(),
    variable: z.array(variable).optional(),
    event: z.array(createCollectionSchemaEvent).optional(),
    request: responseOriginalRequest1.optional(),
    response: z.array(itemResponse1).optional(),
    protocolProfileBehavior: protocolProfileBehavior.optional(),
  });
});

/**
 * Information about the collection request or folder.
 * @typedef  {CreateCollectionSchemaItem} createCollectionSchemaItem - Information about the collection request or folder. - Information about the collection request or folder.
 * @property {string} - The item's name.
 * @property {string} - The item's description.
 * @property {Variable[]} - A list of the collection's [variables](https://learning.postman.com/docs/sending-requests/variables/variables/). Make certain not to include sensitive information in variables.
 * @property {CreateCollectionSchemaEvent[]} - A list of scripts configured to run when specific events occur.
 * @property {ResponseOriginalRequest1} - Information about the collection request.
 * @property {ItemResponse1[]} - A list of the collection's responses.
 * @property {ProtocolProfileBehavior} - The [settings](https://learning.postman.com/docs/sending-requests/create-requests/request-settings/) used to alter the [Protocol Profile Behavior](https://github.com/postmanlabs/postman-runtime/blob/develop/docs/protocol-profile-behavior.md) of sending a request.
 */
export type CreateCollectionSchemaItem = z.infer<typeof createCollectionSchemaItem>;

/**
 * Zod schema for mapping API responses to the CreateCollectionSchemaItem application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionSchemaItemResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      variable: z.array(variableResponse).optional(),
      event: z.array(createCollectionSchemaEventResponse).optional(),
      request: responseOriginalRequest1Response.optional(),
      response: z.array(itemResponse1Response).optional(),
      protocolProfileBehavior: protocolProfileBehaviorResponse.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
      variable: data['variable'],
      event: data['event'],
      request: data['request'],
      response: data['response'],
      protocolProfileBehavior: data['protocolProfileBehavior'],
    }));
});

/**
 * Zod schema for mapping the CreateCollectionSchemaItem application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionSchemaItemRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      variable: z.array(variableRequest).optional(),
      event: z.array(createCollectionSchemaEventRequest).optional(),
      request: responseOriginalRequest1Request.optional(),
      response: z.array(itemResponse1Request).optional(),
      protocolProfileBehavior: protocolProfileBehaviorRequest.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      description: data['description'],
      variable: data['variable'],
      event: data['event'],
      request: data['request'],
      response: data['response'],
      protocolProfileBehavior: data['protocolProfileBehavior'],
    }));
});
