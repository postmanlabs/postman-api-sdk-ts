import { z } from 'zod';

/**
 * Zod schema for the SdkDownload model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sdkDownload = z.lazy(() => {
  return z.object({
    id: z.string(),
    language: z.string(),
    url: z.string(),
    expiresAt: z.string(),
  });
});

/**
 *
 * @typedef  {SdkDownload} sdkDownload
 * @property {string} - The SDK's ID.
 * @property {SdkLanguage} - The target output language for the generated SDK.
 * @property {string} - A short-lived signed URL to the generated SDK archive (zip).
 * @property {string} - The date and time at which the signed URL expires.
 */
export type SdkDownload = z.infer<typeof sdkDownload>;

/**
 * Zod schema for mapping API responses to the SdkDownload application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkDownloadResponse = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      language: z.string(),
      url: z.string(),
      expiresAt: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      language: data['language'],
      url: data['url'],
      expiresAt: data['expiresAt'],
    }));
});

/**
 * Zod schema for mapping the SdkDownload application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkDownloadRequest = z.lazy(() => {
  return z
    .object({
      id: z.string(),
      language: z.string(),
      url: z.string(),
      expiresAt: z.string(),
    })
    .transform((data) => ({
      id: data['id'],
      language: data['language'],
      url: data['url'],
      expiresAt: data['expiresAt'],
    }));
});
