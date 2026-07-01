import { z } from 'zod';
import { DataRole, dataRole } from './data-role';
import {
  DataEntityId,
  dataEntityId,
  dataEntityIdRequest,
  dataEntityIdResponse,
} from './data-entity-id';
import {
  DataCreatedBy,
  dataCreatedBy,
  dataCreatedByRequest,
  dataCreatedByResponse,
} from './data-created-by';

/**
 * Zod schema for the GetTeamAccessRequestsData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getTeamAccessRequestsData = z.lazy(() => {
  return z.object({
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    id: z.number().optional(),
    role: dataRole.optional(),
    requestType: z.string().optional(),
    reason: z.string().optional(),
    status: z.string().optional(),
    entityType: z.string().optional(),
    entityId: dataEntityId.optional(),
    objectType: z.string().optional(),
    objectId: z.number().optional(),
    createdBy: dataCreatedBy.optional(),
  });
});

/**
 * Information about the access request.
 * @typedef  {GetTeamAccessRequestsData} getTeamAccessRequestsData - Information about the access request. - Information about the access request.
 * @property {string} - The date and time the access request was created.
 * @property {string} - The date and time the access request was last updated.
 * @property {number} - The access request's ID.
 * @property {DataRole} - The requested team role.
 * @property {string} - The access request type.
 * @property {string} - The reason the access request was created.
 * @property {string} - The access request's status.
 * @property {string} - The entity type.
 * @property {DataEntityId} - The entity's ID.
 * @property {string} - The entity type.
 * @property {number} - The entity's ID.
 * @property {DataCreatedBy} - The user ID of the user who created the access request.
 */
export type GetTeamAccessRequestsData = z.infer<typeof getTeamAccessRequestsData>;

/**
 * Zod schema for mapping API responses to the GetTeamAccessRequestsData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTeamAccessRequestsDataResponse = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      id: z.number().optional(),
      role: dataRole.optional(),
      requestType: z.string().optional(),
      reason: z.string().optional(),
      status: z.string().optional(),
      entityType: z.string().optional(),
      entityId: dataEntityIdResponse.optional(),
      objectType: z.string().optional(),
      objectId: z.number().optional(),
      createdBy: dataCreatedByResponse.optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      id: data['id'],
      role: data['role'],
      requestType: data['requestType'],
      reason: data['reason'],
      status: data['status'],
      entityType: data['entityType'],
      entityId: data['entityId'],
      objectType: data['objectType'],
      objectId: data['objectId'],
      createdBy: data['createdBy'],
    }));
});

/**
 * Zod schema for mapping the GetTeamAccessRequestsData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getTeamAccessRequestsDataRequest = z.lazy(() => {
  return z
    .object({
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      id: z.number().optional(),
      role: dataRole.optional(),
      requestType: z.string().optional(),
      reason: z.string().optional(),
      status: z.string().optional(),
      entityType: z.string().optional(),
      entityId: dataEntityIdRequest.optional(),
      objectType: z.string().optional(),
      objectId: z.number().optional(),
      createdBy: dataCreatedByRequest.optional(),
    })
    .transform((data) => ({
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      id: data['id'],
      role: data['role'],
      requestType: data['requestType'],
      reason: data['reason'],
      status: data['status'],
      entityType: data['entityType'],
      entityId: data['entityId'],
      objectType: data['objectType'],
      objectId: data['objectId'],
      createdBy: data['createdBy'],
    }));
});
