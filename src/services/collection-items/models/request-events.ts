import { z } from 'zod';
import {
  RequestEventsScript,
  requestEventsScript,
  requestEventsScriptRequest,
  requestEventsScriptResponse,
} from '../../common/request-events-script';

/**
 * Zod schema for the RequestEvents model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestEvents = z.lazy(() => {
  return z.object({
    listen: z.string().optional(),
    script: requestEventsScript.optional(),
  });
});

/**
 * @typedef {RequestEvents} requestEvents
 * @property {RequestEventsListen} listen - The event type.
 * @property {RequestEventsScript} script - Information about the Javascript code that can be used to to perform setup or teardown operations in a response.
 */
export type RequestEvents = z.infer<typeof requestEvents>;

/**
 * Zod schema for mapping API responses to the RequestEvents application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestEventsResponse = z.lazy(() => {
  return z
    .object({
      listen: z.string().optional(),
      script: requestEventsScriptResponse.optional(),
    })
    .transform((data) => ({
      listen: data['listen'],
      script: data['script'],
    }));
});

/**
 * Zod schema for mapping the RequestEvents application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestEventsRequest = z.lazy(() => {
  return z
    .object({
      listen: z.string().optional(),
      script: requestEventsScriptRequest.optional(),
    })
    .transform((data) => ({
      listen: data['listen'],
      script: data['script'],
    }));
});
