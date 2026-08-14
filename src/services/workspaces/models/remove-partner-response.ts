import { z } from 'zod';
import {
  RemovePartnerResponseResults,
  removePartnerResponseResults,
  removePartnerResponseResultsRequest,
  removePartnerResponseResultsResponse,
} from './remove-partner-response-results';

/**
 * Zod schema for the RemovePartnerResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const removePartnerResponse = z.lazy(() => {
  return z.object({
    targetEntity: z.string().optional(),
    targetEntityId: z.string().optional(),
    action: z.string().optional(),
    results: z.array(removePartnerResponseResults).optional(),
  });
});

/**
 * @typedef {RemovePartnerResponse} removePartnerResponse
 * @property {string} targetEntity - The target entity type.
 * @property {string} targetEntityId - The target entity's ID.
 * @property {string} action - The action performed.
 * @property {RemovePartnerResponseResults[]} results - A list of the action results.
 */
export type RemovePartnerResponse = z.infer<typeof removePartnerResponse>;

/**
 * Zod schema for mapping API responses to the RemovePartnerResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removePartnerResponseResponse = z.lazy(() => {
  return z
    .object({
      targetEntity: z.string().optional(),
      targetEntityId: z.string().optional(),
      action: z.string().optional(),
      results: z.array(removePartnerResponseResultsResponse).optional(),
    })
    .transform((data) => ({
      targetEntity: data['targetEntity'],
      targetEntityId: data['targetEntityId'],
      action: data['action'],
      results: data['results'],
    }));
});

/**
 * Zod schema for mapping the RemovePartnerResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const removePartnerResponseRequest = z.lazy(() => {
  return z
    .object({
      targetEntity: z.string().optional(),
      targetEntityId: z.string().optional(),
      action: z.string().optional(),
      results: z.array(removePartnerResponseResultsRequest).optional(),
    })
    .transform((data) => ({
      targetEntity: data['targetEntity'],
      targetEntityId: data['targetEntityId'],
      action: data['action'],
      results: data['results'],
    }));
});
