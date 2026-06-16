import { z } from 'zod';
import { EventListen1, eventListen1 } from './event-listen-1';
import { EventScript, eventScript, eventScriptRequest, eventScriptResponse } from './event-script';

/**
 * Zod schema for the CreateCollectionSchemaEvent model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createCollectionSchemaEvent = z.lazy(() => {
  return z.object({
    listen: eventListen1,
    script: eventScript.optional(),
  });
});

/**
 * Information about the collection's events.
 * @typedef  {CreateCollectionSchemaEvent} createCollectionSchemaEvent - Information about the collection's events. - Information about the collection's events.
 * @property {EventListen1} - Can be set to `test` or `prerequest` for test scripts or pre-request scripts respectively.
 * @property {EventScript} - Information about the Javascript code that can be used to to perform setup or teardown operations in a response.
 */
export type CreateCollectionSchemaEvent = z.infer<typeof createCollectionSchemaEvent>;

/**
 * Zod schema for mapping API responses to the CreateCollectionSchemaEvent application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionSchemaEventResponse = z.lazy(() => {
  return z
    .object({
      listen: eventListen1,
      script: eventScriptResponse.optional(),
    })
    .transform((data) => ({
      listen: data['listen'],
      script: data['script'],
    }));
});

/**
 * Zod schema for mapping the CreateCollectionSchemaEvent application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionSchemaEventRequest = z.lazy(() => {
  return z
    .object({
      listen: eventListen1,
      script: eventScriptRequest.optional(),
    })
    .transform((data) => ({
      listen: data['listen'],
      script: data['script'],
    }));
});
