import { z } from 'zod';
import {
  SecretTypeData,
  secretTypeData,
  secretTypeDataRequest,
  secretTypeDataResponse,
} from './secret-type-data';
import {
  SecretScannerMetaTotalSecretsData,
  secretScannerMetaTotalSecretsData,
  secretScannerMetaTotalSecretsDataRequest,
  secretScannerMetaTotalSecretsDataResponse,
} from './secret-scanner-meta-total-secrets-data';

/**
 * Zod schema for the GetSecretTypesOkResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getSecretTypesOkResponse = z.lazy(() => {
  return z.object({
    data: z.array(secretTypeData).optional(),
    meta: secretScannerMetaTotalSecretsData.optional(),
  });
});

/**
 * @typedef {GetSecretTypesOkResponse} getSecretTypesOkResponse
 * @property {SecretTypeData[]} data - A list of secret types the scanner can detect.
 * @property {SecretScannerMetaTotalSecretsData} meta - Aggregate counts across the returned records.
 */
export type GetSecretTypesOkResponse = z.infer<typeof getSecretTypesOkResponse>;

/**
 * Zod schema for mapping API responses to the GetSecretTypesOkResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSecretTypesOkResponseResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(secretTypeDataResponse).optional(),
      meta: secretScannerMetaTotalSecretsDataResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetSecretTypesOkResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSecretTypesOkResponseRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(secretTypeDataRequest).optional(),
      meta: secretScannerMetaTotalSecretsDataRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
