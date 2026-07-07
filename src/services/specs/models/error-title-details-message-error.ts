import { z } from 'zod';
import {
  ErrorTitleDetailsMessageErrorDetails,
  errorTitleDetailsMessageErrorDetails,
  errorTitleDetailsMessageErrorDetailsRequest,
  errorTitleDetailsMessageErrorDetailsResponse,
} from './error-title-details-message-error-details';

/**
 * Zod schema for the ErrorTitleDetailsMessageError model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const errorTitleDetailsMessageError = z.lazy(() => {
  return z.object({
    title: z.string().optional(),
    details: errorTitleDetailsMessageErrorDetails.optional(),
    message: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ErrorTitleDetailsMessageError} errorTitleDetailsMessageError
 * @property {string} - A short summary of the problem.
 * @property {ErrorTitleDetailsMessageErrorDetails} - Information about the error.
 * @property {string} - The error message.
 */
export type ErrorTitleDetailsMessageError = z.infer<typeof errorTitleDetailsMessageError>;

/**
 * Zod schema for mapping API responses to the ErrorTitleDetailsMessageError application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorTitleDetailsMessageErrorResponse = z.lazy(() => {
  return z
    .object({
      title: z.string().optional(),
      details: errorTitleDetailsMessageErrorDetailsResponse.optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      title: data['title'],
      details: data['details'],
      message: data['message'],
    }));
});

/**
 * Zod schema for mapping the ErrorTitleDetailsMessageError application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const errorTitleDetailsMessageErrorRequest = z.lazy(() => {
  return z
    .object({
      title: z.string().optional(),
      details: errorTitleDetailsMessageErrorDetailsRequest.optional(),
      message: z.string().optional(),
    })
    .transform((data) => ({
      title: data['title'],
      details: data['details'],
      message: data['message'],
    }));
});
