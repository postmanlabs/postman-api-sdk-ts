import { z } from 'zod';
import {
  TeamsAccessRequestData,
  teamsAccessRequestData,
  teamsAccessRequestDataRequest,
  teamsAccessRequestDataResponse,
} from './teams-access-request-data';

/**
 * Zod schema for the CreateAccessRequestResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createAccessRequestResponse = z.lazy(() => {
  return z.object({
    result: z.array(teamsAccessRequestData).optional(),
  });
});

/**
 * @typedef {CreateAccessRequestResponse} createAccessRequestResponse
 * @property {TeamsAccessRequestData[]} result - A list of the created access requests.
 */
export type CreateAccessRequestResponse = z.infer<typeof createAccessRequestResponse>;

/**
 * Zod schema for mapping API responses to the CreateAccessRequestResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createAccessRequestResponseResponse = z.lazy(() => {
  return z
    .object({
      result: z.array(teamsAccessRequestDataResponse).optional(),
    })
    .transform((data) => ({
      result: data['result'],
    }));
});

/**
 * Zod schema for mapping the CreateAccessRequestResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createAccessRequestResponseRequest = z.lazy(() => {
  return z
    .object({
      result: z.array(teamsAccessRequestDataRequest).optional(),
    })
    .transform((data) => ({
      result: data['result'],
    }));
});
