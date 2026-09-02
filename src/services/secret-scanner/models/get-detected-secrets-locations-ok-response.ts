import { z } from 'zod';
import {
  SecretsLocationsData,
  secretsLocationsData,
  secretsLocationsDataRequest,
  secretsLocationsDataResponse,
} from './secrets-locations-data';
import {
  SecretScannerMetaData,
  secretScannerMetaData,
  secretScannerMetaDataRequest,
  secretScannerMetaDataResponse,
} from './secret-scanner-meta-data';

/**
 * Zod schema for the GetDetectedSecretsLocationsOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getDetectedSecretsLocationsOkResponse = z.lazy(() => {
  return z.object({
    data: z.array(secretsLocationsData).optional(),
    meta: secretScannerMetaData.optional(),
  });
});

/**
 * @typedef {GetDetectedSecretsLocationsOkResponse} getDetectedSecretsLocationsOkResponse
 * @property {SecretsLocationsData[]} data - A list of the locations where the detected secret was found.
 * @property {SecretScannerMetaData} meta - The response's meta information for paginated results.
 */
export type GetDetectedSecretsLocationsOkResponse = z.infer<
  typeof getDetectedSecretsLocationsOkResponse
>;

/**
 * Zod schema for mapping API responses to the GetDetectedSecretsLocationsOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getDetectedSecretsLocationsOkResponseResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(secretsLocationsDataResponse).optional(),
      meta: secretScannerMetaDataResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetDetectedSecretsLocationsOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getDetectedSecretsLocationsOkResponseRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(secretsLocationsDataRequest).optional(),
      meta: secretScannerMetaDataRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
