import { z } from 'zod';
import {
  TeamEntityInfo,
  teamEntityInfo,
  teamEntityInfoRequest,
  teamEntityInfoResponse,
} from './team-entity-info';

/**
 * Zod schema for the CreateAccessRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createAccessRequest = z.lazy(() => {
  return z.object({
    entityList: z.array(teamEntityInfo),
    role: z.string().nullable(),
    reason: z.string(),
    requestType: z.string(),
  });
});

/**
 *
 * @typedef  {CreateAccessRequest} createAccessRequest
 * @property {TeamEntityInfo[]} - A list of the entities for which to create access requests.
 * @property {CreateAccessRequestRole} - The team role to request.
 * @property {string} - The reason for the access request.
 * @property {RequestType} - The type of access request.
 */
export type CreateAccessRequest = z.infer<typeof createAccessRequest>;

/**
 * Zod schema for mapping API responses to the CreateAccessRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createAccessRequestResponse1 = z.lazy(() => {
  return z
    .object({
      entityList: z.array(teamEntityInfoResponse),
      role: z.string().nullable(),
      reason: z.string(),
      requestType: z.string(),
    })
    .transform((data) => ({
      entityList: data['entityList'],
      role: data['role'],
      reason: data['reason'],
      requestType: data['requestType'],
    }));
});

/**
 * Zod schema for mapping the CreateAccessRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createAccessRequestRequest = z.lazy(() => {
  return z
    .object({
      entityList: z.array(teamEntityInfoRequest),
      role: z.string().nullable(),
      reason: z.string(),
      requestType: z.string(),
    })
    .transform((data) => ({
      entityList: data['entityList'],
      role: data['role'],
      reason: data['reason'],
      requestType: data['requestType'],
    }));
});
