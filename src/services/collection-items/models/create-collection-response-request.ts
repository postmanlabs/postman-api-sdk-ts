import { z } from 'zod';
import { RequestMethod, requestMethod } from './request-method';
import {
  ResponseHeader2_2,
  responseHeader2_2,
  responseHeader2_2Request,
  responseHeader2_2Response,
} from '../../common/response-header-2-2';
import {
  CollectionResponseCreatedDataMode,
  collectionResponseCreatedDataMode,
} from './collection-response-created-data-mode';
import {
  RequestDataOptions,
  requestDataOptions,
  requestDataOptionsRequest,
  requestDataOptionsResponse,
} from './request-data-options';
import {
  CollectionResponseCreatedResponseCode,
  collectionResponseCreatedResponseCode,
  collectionResponseCreatedResponseCodeRequest,
  collectionResponseCreatedResponseCodeResponse,
} from './collection-response-created-response-code';

/**
 * Zod schema for the CreateCollectionResponseRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createCollectionResponseRequest = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    description: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    method: requestMethod.optional(),
    headers: z.array(responseHeader2_2).optional(),
    dataMode: collectionResponseCreatedDataMode.optional(),
    rawModeData: z.string().optional().nullable(),
    dataOptions: requestDataOptions.optional().nullable(),
    responseCode: collectionResponseCreatedResponseCode.optional(),
    status: z.string().optional().nullable(),
    time: z.string().optional(),
    cookies: z.string().optional().nullable(),
    mime: z.string().optional().nullable(),
    text: z.string().optional(),
    language: z.string().optional(),
    rawDataType: z.string().optional().nullable(),
    requestObject: z.string().optional(),
    additionalProperties: z.record(z.unknown()).optional(),
  });
});

/**
 * Information about the response. For a complete list of properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

**Note:**

It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a response with a blank name.

 * @typedef  {CreateCollectionResponseRequest} createCollectionResponseRequest - Information about the response. For a complete list of properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

**Note:**

It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a response with a blank name.
 - Information about the response. For a complete list of properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html).

**Note:**

It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a response with a blank name.

 * @property {string} - The response's name. It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a response with a blank name.
 * @property {string} - The response's description.
 * @property {string} - The associated request's URL.
 * @property {RequestMethod} - The request's HTTP method.
 * @property {ResponseHeader2_2[]} - A list of headers.
 * @property {CollectionResponseCreatedDataMode} - The associated request body's data mode.
 * @property {string} - The associated request body's raw mode data.
 * @property {RequestDataOptions} - Additional configurations and options set for the request body's various data modes.
 * @property {CollectionResponseCreatedResponseCode} - The response's HTTP response code information.
 * @property {string} - The response's HTTP status text.
 * @property {string} - The time taken by the request to complete, in milliseconds.
 * @property {string} - The response's cookie data.
 * @property {string} - The response's MIME type.
 * @property {string} - The raw text of the response body.
 * @property {string} - The response body's language type.
 * @property {string} - The response's raw data type.
 * @property {string} - A JSON-stringified representation of the associated request.
 */
export type CreateCollectionResponseRequest = z.infer<typeof createCollectionResponseRequest>;

/**
 * Zod schema for mapping API responses to the CreateCollectionResponseRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionResponseRequestResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      url: z.string().optional().nullable(),
      method: requestMethod.optional(),
      headers: z.array(responseHeader2_2Response).optional(),
      dataMode: collectionResponseCreatedDataMode.optional(),
      rawModeData: z.string().optional().nullable(),
      dataOptions: requestDataOptionsResponse.optional().nullable(),
      responseCode: collectionResponseCreatedResponseCodeResponse.optional(),
      status: z.string().optional().nullable(),
      time: z.string().optional(),
      cookies: z.string().optional().nullable(),
      mime: z.string().optional().nullable(),
      text: z.string().optional(),
      language: z.string().optional(),
      rawDataType: z.string().optional().nullable(),
      requestObject: z.string().optional(),
    })
    .passthrough()
    .transform((data) => {
      const additionalProperties: { [key: string]: unknown } = {};
      const declaredKeys = new Set<string>([
        'name',
        'description',
        'url',
        'method',
        'headers',
        'dataMode',
        'rawModeData',
        'dataOptions',
        'responseCode',
        'status',
        'time',
        'cookies',
        'mime',
        'text',
        'language',
        'rawDataType',
        'requestObject',
      ]);
      for (const key of globalThis.Object.keys(data)) {
        if (!declaredKeys.has(key)) {
          additionalProperties[key] = (data as { [key: string]: unknown })[key];
        }
      }
      return {
        name: data['name'],
        description: data['description'],
        url: data['url'],
        method: data['method'],
        headers: data['headers'],
        dataMode: data['dataMode'],
        rawModeData: data['rawModeData'],
        dataOptions: data['dataOptions'],
        responseCode: data['responseCode'],
        status: data['status'],
        time: data['time'],
        cookies: data['cookies'],
        mime: data['mime'],
        text: data['text'],
        language: data['language'],
        rawDataType: data['rawDataType'],
        requestObject: data['requestObject'],
        additionalProperties,
      };
    });
});

/**
 * Zod schema for mapping the CreateCollectionResponseRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createCollectionResponseRequestRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      url: z.string().optional().nullable(),
      method: requestMethod.optional(),
      headers: z.array(responseHeader2_2Request).optional(),
      dataMode: collectionResponseCreatedDataMode.optional(),
      rawModeData: z.string().optional().nullable(),
      dataOptions: requestDataOptionsRequest.optional().nullable(),
      responseCode: collectionResponseCreatedResponseCodeRequest.optional(),
      status: z.string().optional().nullable(),
      time: z.string().optional(),
      cookies: z.string().optional().nullable(),
      mime: z.string().optional().nullable(),
      text: z.string().optional(),
      language: z.string().optional(),
      rawDataType: z.string().optional().nullable(),
      requestObject: z.string().optional(),
      additionalProperties: z.record(z.unknown()).optional(),
    })
    .transform((data) => ({
      ...(data['additionalProperties'] ?? {}),
      name: data['name'],
      description: data['description'],
      url: data['url'],
      method: data['method'],
      headers: data['headers'],
      dataMode: data['dataMode'],
      rawModeData: data['rawModeData'],
      dataOptions: data['dataOptions'],
      responseCode: data['responseCode'],
      status: data['status'],
      time: data['time'],
      cookies: data['cookies'],
      mime: data['mime'],
      text: data['text'],
      language: data['language'],
      rawDataType: data['rawDataType'],
      requestObject: data['requestObject'],
    }));
});
