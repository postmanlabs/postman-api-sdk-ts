import { z } from 'zod';

/**
 * Zod schema for the SdkErrorBuildStatusFailure model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const sdkErrorBuildStatusFailure = z.lazy(() => {
  return z.object({
    code: z.string(),
    message: z.string(),
  });
});

/**
 * Information about the SDK build's status when `buildStatus` is `failed`.
 * @typedef  {SdkErrorBuildStatusFailure} sdkErrorBuildStatusFailure - Information about the SDK build's status when `buildStatus` is `failed`. - Information about the SDK build's status when `buildStatus` is `failed`.
 * @property {string} - The build failure's error code.
 * @property {string} - Information about the build failure.
 */
export type SdkErrorBuildStatusFailure = z.infer<typeof sdkErrorBuildStatusFailure>;

/**
 * Zod schema for mapping API responses to the SdkErrorBuildStatusFailure application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkErrorBuildStatusFailureResponse = z.lazy(() => {
  return z
    .object({
      code: z.string(),
      message: z.string(),
    })
    .transform((data) => ({
      code: data['code'],
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the SdkErrorBuildStatusFailure application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const sdkErrorBuildStatusFailureRequest = z.lazy(() => {
  return z
    .object({
      code: z.string(),
      message: z.string(),
    })
    .transform((data) => ({
      code: data['code'],
      message: data['message'],
    }));
});
