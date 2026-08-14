import { z } from 'zod';
import {
  RequestEventsScript,
  requestEventsScript,
  requestEventsScriptRequest,
  requestEventsScriptResponse,
} from '../../common/request-events-script';

/**
 * Zod schema for the CollectionEvent model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionEvent = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    listen: z.string(),
    script: requestEventsScript.optional(),
  });
});

/**
 * Information about the collection's events.
 * @typedef {CollectionEvent} collectionEvent
 * @property {string} id - The event's ID.
 * @property {EventListen2} listen - The `prerequest` (pre-request) or `test` (post-response) value.
 * @property {RequestEventsScript} script - Information about the Javascript code that can be used to to perform setup or teardown operations in a response.
 */
export type CollectionEvent = z.infer<typeof collectionEvent>;

/**
 * Zod schema for mapping API responses to the CollectionEvent application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionEventResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      listen: z.string(),
      script: requestEventsScriptResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      listen: data['listen'],
      script: data['script'],
    }));
});

/**
 * Zod schema for mapping the CollectionEvent application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionEventRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      listen: z.string(),
      script: requestEventsScriptRequest.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      listen: data['listen'],
      script: data['script'],
    }));
});
