import { z } from 'zod';
import {
  CallLogsRequest1,
  callLogsRequest1,
  callLogsRequest1Request,
  callLogsRequest1Response,
} from './call-logs-request-1';
import {
  CallLogsResponse1,
  callLogsResponse1,
  callLogsResponse1Request,
  callLogsResponse1Response,
} from './call-logs-response-1';

/**
 * Zod schema for the CallLogs model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const callLogs = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    responseName: z.string().optional(),
    servedAt: z.string().optional(),
    request: callLogsRequest1.optional(),
    response: callLogsResponse1.optional(),
  });
});

/**
 * Information about the mock server's server response.
 * @typedef {CallLogs} callLogs
 * @property {string} id - The server response's ID.
 * @property {string} responseName - The server response's name.
 * @property {string} servedAt - The date and time at which the server response was served.
 * @property {CallLogsRequest1} request - The server response's request information.
 * @property {CallLogsResponse1} response - The server response's response information.
 */
export type CallLogs = z.infer<typeof callLogs>;

/**
 * Zod schema for mapping API responses to the CallLogs application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const callLogsResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      responseName: z.string().optional(),
      servedAt: z.string().optional(),
      request: callLogsRequest1Response.optional(),
      response: callLogsResponse1Response.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      responseName: data['responseName'],
      servedAt: data['servedAt'],
      request: data['request'],
      response: data['response'],
    }));
});

/**
 * Zod schema for mapping the CallLogs application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const callLogsRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      responseName: z.string().optional(),
      servedAt: z.string().optional(),
      request: callLogsRequest1Request.optional(),
      response: callLogsResponse1Request.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      responseName: data['responseName'],
      servedAt: data['servedAt'],
      request: data['request'],
      response: data['response'],
    }));
});
