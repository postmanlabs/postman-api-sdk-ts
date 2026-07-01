import { z } from 'zod';
import { apiData, apiDataRequest, apiDataResponse } from './api-data';
import {
  extendedApiData,
  extendedApiDataRequest,
  extendedApiDataResponse,
} from './extended-api-data';

/**
 * Zod schema for the GetAnApi model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAnApi = z.lazy(() => {
  return z.union([apiData, extendedApiData]);
});

/**
 *
 * @typedef  {GetAnApi} getAnApi
 * @property {ApiData}
 * @property {ExtendedApiData}
 */
export type GetAnApi = z.infer<typeof getAnApi>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const getAnApiResponse = z.lazy(() => {
  return z.union([apiDataResponse, extendedApiDataResponse]);
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const getAnApiRequest = z.lazy(() => {
  return z.union([apiDataRequest, extendedApiDataRequest]);
});
