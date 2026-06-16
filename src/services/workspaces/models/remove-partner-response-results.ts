import { z } from 'zod';
import {
  RemovePartnerResponseResultsStatus,
  removePartnerResponseResultsStatus,
} from './remove-partner-response-results-status';

/**
 * Zod schema for the RemovePartnerResponseResults model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removePartnerResponseResults = z.lazy(() => {
  return z.object({
    error: z.string().optional(),
    message: z.string().optional(),
    status: removePartnerResponseResultsStatus.optional(),
    userId: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {RemovePartnerResponseResults} removePartnerResponseResults   
 * @property {string} - If the endpoint returns the `FAILED` status, the error message detailing the error.
 * @property {string} - A response message.
 * @property {RemovePartnerResponseResultsStatus} - The removal status:
- `REMOVED` — The partner was successfully removed.
- `FAILED` — The partner's removal failed.

 * @property {string} - The user ID.
 */
export type RemovePartnerResponseResults = z.infer<typeof removePartnerResponseResults>;

/**
 * Zod schema for mapping API responses to the RemovePartnerResponseResults application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removePartnerResponseResultsResponse = z.lazy(() => {
  return z
    .object({
      error: z.string().optional(),
      message: z.string().optional(),
      status: removePartnerResponseResultsStatus.optional(),
      userId: z.string().optional(),
    })
    .transform((data) => ({
      error: data['error'],
      message: data['message'],
      status: data['status'],
      userId: data['userId'],
    }));
});

/**
 * Zod schema for mapping the RemovePartnerResponseResults application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removePartnerResponseResultsRequest = z.lazy(() => {
  return z
    .object({
      error: z.string().optional(),
      message: z.string().optional(),
      status: removePartnerResponseResultsStatus.optional(),
      userId: z.string().optional(),
    })
    .transform((data) => ({
      error: data['error'],
      message: data['message'],
      status: data['status'],
      userId: data['userId'],
    }));
});
