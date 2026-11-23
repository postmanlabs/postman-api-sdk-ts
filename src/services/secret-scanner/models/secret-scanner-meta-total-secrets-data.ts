import { z } from 'zod';

/**
 * Zod schema for the SecretScannerMetaTotalSecretsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const secretScannerMetaTotalSecretsData = z.lazy(() => {
  return z.object({
    total: z.number().optional(),
  });
});

/**
 * Aggregate counts across the returned records.
 * @typedef {SecretScannerMetaTotalSecretsData} secretScannerMetaTotalSecretsData
 * @property {number} total - The total number of supported secrets.
 */
export type SecretScannerMetaTotalSecretsData = z.infer<typeof secretScannerMetaTotalSecretsData>;

/**
 * Zod schema for mapping API responses to the SecretScannerMetaTotalSecretsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const secretScannerMetaTotalSecretsDataResponse = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
    }));
});

/**
 * Zod schema for mapping the SecretScannerMetaTotalSecretsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const secretScannerMetaTotalSecretsDataRequest = z.lazy(() => {
  return z
    .object({
      total: z.number().optional(),
    })
    .transform((data) => ({
      total: data['total'],
    }));
});
