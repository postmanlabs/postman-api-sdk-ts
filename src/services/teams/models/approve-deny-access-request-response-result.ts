import { z } from 'zod';
import {
  ApproveDenyAccessRequestResponseResultEntityId,
  approveDenyAccessRequestResponseResultEntityId,
  approveDenyAccessRequestResponseResultEntityIdRequest,
  approveDenyAccessRequestResponseResultEntityIdResponse,
} from './approve-deny-access-request-response-result-entity-id';
import {
  AccessRequest,
  accessRequest,
  accessRequestRequest,
  accessRequestResponse,
} from './access-request';

/**
 * Zod schema for the ApproveDenyAccessRequestResponseResult model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const approveDenyAccessRequestResponseResult = z.lazy(() => {
  return z.object({
    entityType: z.string().optional(),
    entityId: approveDenyAccessRequestResponseResultEntityId.optional(),
    role: z.string().optional(),
    previousRole: z.string().optional().nullable(),
    status: z.string().optional(),
    accessRequest: accessRequest.optional(),
  });
});

/**
 * Information about the approved or denied access request.
 * @typedef  {ApproveDenyAccessRequestResponseResult} approveDenyAccessRequestResponseResult - Information about the approved or denied access request. - Information about the approved or denied access request.
 * @property {string} - The entity type.
 * @property {ApproveDenyAccessRequestResponseResultEntityId} - The entity's ID.
 * @property {string} - The requested team role.
 * @property {string} - The entity's previous role. This value only returns if the entity's role is modified.
 * @property {string} - The access request's status.
 * @property {AccessRequest} - Information about the access request.
 */
export type ApproveDenyAccessRequestResponseResult = z.infer<
  typeof approveDenyAccessRequestResponseResult
>;

/**
 * Zod schema for mapping API responses to the ApproveDenyAccessRequestResponseResult application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const approveDenyAccessRequestResponseResultResponse = z.lazy(() => {
  return z
    .object({
      entityType: z.string().optional(),
      entityId: approveDenyAccessRequestResponseResultEntityIdResponse.optional(),
      role: z.string().optional(),
      previousRole: z.string().optional().nullable(),
      status: z.string().optional(),
      accessRequest: accessRequestResponse.optional(),
    })
    .transform((data) => ({
      entityType: data['entityType'],
      entityId: data['entityId'],
      role: data['role'],
      previousRole: data['previousRole'],
      status: data['status'],
      accessRequest: data['accessRequest'],
    }));
});

/**
 * Zod schema for mapping the ApproveDenyAccessRequestResponseResult application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const approveDenyAccessRequestResponseResultRequest = z.lazy(() => {
  return z
    .object({
      entityType: z.string().optional(),
      entityId: approveDenyAccessRequestResponseResultEntityIdRequest.optional(),
      role: z.string().optional(),
      previousRole: z.string().optional().nullable(),
      status: z.string().optional(),
      accessRequest: accessRequestRequest.optional(),
    })
    .transform((data) => ({
      entityType: data['entityType'],
      entityId: data['entityId'],
      role: data['role'],
      previousRole: data['previousRole'],
      status: data['status'],
      accessRequest: data['accessRequest'],
    }));
});
