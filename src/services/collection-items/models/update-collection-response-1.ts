import { z } from 'zod';
import {
  ResponseHeader2_2,
  responseHeader2_2,
  responseHeader2_2Request,
  responseHeader2_2Response,
} from '../../common/response-header-2-2';
import {
  RequestDataOptions,
  requestDataOptions,
  requestDataOptionsRequest,
  requestDataOptionsResponse,
} from './request-data-options';
import {
  UpdateCollectionResponseResponseCode,
  updateCollectionResponseResponseCode,
  updateCollectionResponseResponseCodeRequest,
  updateCollectionResponseResponseCodeResponse,
} from './update-collection-response-response-code';

/**
 * Zod schema for the UpdateCollectionResponse1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const updateCollectionResponse1 = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    description: z.string().optional().nullable(),
    url: z.string().optional().nullable(),
    method: z.string().optional(),
    headers: z.array(responseHeader2_2).optional(),
    dataMode: z.string().optional(),
    rawModeData: z.string().optional().nullable(),
    dataOptions: requestDataOptions.optional().nullable(),
    responseCode: updateCollectionResponseResponseCode.optional(),
    status: z.string().optional().nullable(),
    time: z.string().optional(),
    cookies: z.string().optional().nullable(),
    mime: z.string().optional().nullable(),
    text: z.string().optional(),
    language: z.string().optional(),
    rawDataType: z.string().optional().nullable(),
    requestObject: z.string().optional(),
    additionalProperties: z.record(z.string(), z.unknown()).optional(),
  });
});

/**
 * The response properties to update. For a complete list of properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v1.0.0/draft-07/collection.json).
 * @typedef {UpdateCollectionResponse1} updateCollectionResponse1
 * @property {string} name - The response's name.
 * @property {string} description - The response's description.
 * @property {string} url - The associated request's URL.
 * @property {RequestMethod} method - The request's HTTP method.
 * @property {ResponseHeader2_2[]} headers - A list of headers.
 * @property {UpdateCollectionResponseDataMode} dataMode - The associated request body's data mode.
 * @property {string} rawModeData - The associated request body's raw mode data.
 * @property {RequestDataOptions} dataOptions - Additional configurations and options set for the request body's various data modes.
 * @property {UpdateCollectionResponseResponseCode} responseCode - The response's HTTP response code information.
 * @property {string} status - The response's HTTP status text.
 * @property {string} time - The time taken by the request to complete, in milliseconds.
 * @property {string} cookies - The response's cookie data.
 * @property {string} mime - The response's MIME type.
 * @property {string} text - The raw text of the response body.
 * @property {string} language - The response body's language type.
 * @property {string} rawDataType - The response's raw data type.
 * @property {string} requestObject - A JSON-stringified representation of the associated request.
 */
export type UpdateCollectionResponse1 = z.infer<typeof updateCollectionResponse1>;

/**
 * Zod schema for mapping API responses to the UpdateCollectionResponse1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionResponse1Response = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      url: z.string().optional().nullable(),
      method: z.string().optional(),
      headers: z.array(responseHeader2_2Response).optional(),
      dataMode: z.string().optional(),
      rawModeData: z.string().optional().nullable(),
      dataOptions: requestDataOptionsResponse.optional().nullable(),
      responseCode: updateCollectionResponseResponseCodeResponse.optional(),
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
 * Zod schema for mapping the UpdateCollectionResponse1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const updateCollectionResponse1Request = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      description: z.string().optional().nullable(),
      url: z.string().optional().nullable(),
      method: z.string().optional(),
      headers: z.array(responseHeader2_2Request).optional(),
      dataMode: z.string().optional(),
      rawModeData: z.string().optional().nullable(),
      dataOptions: requestDataOptionsRequest.optional().nullable(),
      responseCode: updateCollectionResponseResponseCodeRequest.optional(),
      status: z.string().optional().nullable(),
      time: z.string().optional(),
      cookies: z.string().optional().nullable(),
      mime: z.string().optional().nullable(),
      text: z.string().optional(),
      language: z.string().optional(),
      rawDataType: z.string().optional().nullable(),
      requestObject: z.string().optional(),
      additionalProperties: z.record(z.string(), z.unknown()).optional(),
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
