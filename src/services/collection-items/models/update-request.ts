import { z } from 'zod';
import {
  RequestHeaderData,
  requestHeaderData,
  requestHeaderDataRequest,
  requestHeaderDataResponse,
} from './request-header-data';
import {
  RequestQueryParams,
  requestQueryParams,
  requestQueryParamsRequest,
  requestQueryParamsResponse,
} from './request-query-params';
import { RequestData, requestData, requestDataRequest, requestDataResponse } from './request-data';
import {
  RequestGraphqlModeData,
  requestGraphqlModeData,
  requestGraphqlModeDataRequest,
  requestGraphqlModeDataResponse,
} from './request-graphql-mode-data';
import {
  RequestDataOptions,
  requestDataOptions,
  requestDataOptionsRequest,
  requestDataOptionsResponse,
} from './request-data-options';
import { RequestAuth, requestAuth, requestAuthRequest, requestAuthResponse } from './request-auth';
import {
  RequestEvents,
  requestEvents,
  requestEventsRequest,
  requestEventsResponse,
} from './request-events';

/**
 * Zod schema for the UpdateRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    description: z.string().optional().nullable(),
    method: z.string().optional(),
    url: z.string().optional().nullable(),
    headerData: z.array(requestHeaderData).optional(),
    queryParams: z.array(requestQueryParams).optional(),
    dataMode: z.string().optional(),
    data: z.array(requestData).optional().nullable(),
    rawModeData: z.string().optional().nullable(),
    graphqlModeData: requestGraphqlModeData.optional().nullable(),
    dataOptions: requestDataOptions.optional().nullable(),
    auth: requestAuth.optional().nullable(),
    events: z.array(requestEvents).optional().nullable(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * The request properties to update. For a complete list of properties, refer to the **Request** property in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v1.0.0/draft-07/collection.json).
 * @typedef {UpdateRequest} updateRequest
 * @property {string} name - The request's name.
 * @property {string} description - The request's description.
 * @property {RequestMethod} method - The request's HTTP method.
 * @property {string} url - The request's URL.
 * @property {RequestHeaderData[]} headerData - The request's headers.
 * @property {RequestQueryParams[]} queryParams - The request's query parameters.
 * @property {UpdateRequestDataMode} dataMode - The request body's data mode.
 * @property {RequestData[]} data - The request body's form data.
 * @property {string} rawModeData - The request body's raw mode data.
 * @property {RequestGraphqlModeData} graphqlModeData - The request body's GraphQL mode data.
 * @property {RequestDataOptions} dataOptions - Additional configurations and options set for the request body's various data modes.
 * @property {RequestAuth} auth - The request's authentication information.
 * @property {RequestEvents[]} events - A list of scripts configured to run when specific events occur.
 */
export type UpdateRequest = z.infer<typeof updateRequest>;

/**
 * Zod schema for mapping API responses to the UpdateRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      method: z.string().optional(),
      url: z.string().optional().nullable(),
      headerData: z.array(requestHeaderDataResponse).optional(),
      queryParams: z.array(requestQueryParamsResponse).optional(),
      dataMode: z.string().optional(),
      data: z.array(requestDataResponse).optional().nullable(),
      rawModeData: z.string().optional().nullable(),
      graphqlModeData: requestGraphqlModeDataResponse.optional().nullable(),
      dataOptions: requestDataOptionsResponse.optional().nullable(),
      auth: requestAuthResponse.optional().nullable(),
      events: z.array(requestEventsResponse).optional().nullable(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>([
        'name',
        'description',
        'method',
        'url',
        'headerData',
        'queryParams',
        'dataMode',
        'data',
        'rawModeData',
        'graphqlModeData',
        'dataOptions',
        'auth',
        'events',
      ]);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        name: data['name'],
        description: data['description'],
        method: data['method'],
        url: data['url'],
        headerData: data['headerData'],
        queryParams: data['queryParams'],
        dataMode: data['dataMode'],
        data: data['data'],
        rawModeData: data['rawModeData'],
        graphqlModeData: data['graphqlModeData'],
        dataOptions: data['dataOptions'],
        auth: data['auth'],
        events: data['events'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the UpdateRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      method: z.string().optional(),
      url: z.string().optional().nullable(),
      headerData: z.array(requestHeaderDataRequest).optional(),
      queryParams: z.array(requestQueryParamsRequest).optional(),
      dataMode: z.string().optional(),
      data: z.array(requestDataRequest).optional().nullable(),
      rawModeData: z.string().optional().nullable(),
      graphqlModeData: requestGraphqlModeDataRequest.optional().nullable(),
      dataOptions: requestDataOptionsRequest.optional().nullable(),
      auth: requestAuthRequest.optional().nullable(),
      events: z.array(requestEventsRequest).optional().nullable(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      name: data['name'],
      description: data['description'],
      method: data['method'],
      url: data['url'],
      headerData: data['headerData'],
      queryParams: data['queryParams'],
      dataMode: data['dataMode'],
      data: data['data'],
      rawModeData: data['rawModeData'],
      graphqlModeData: data['graphqlModeData'],
      dataOptions: data['dataOptions'],
      auth: data['auth'],
      events: data['events'],
    }));
});
