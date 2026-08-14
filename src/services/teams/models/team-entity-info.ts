import { z } from 'zod';
import {
  TeamEntityInfoEntityId,
  teamEntityInfoEntityId,
  teamEntityInfoEntityIdRequest,
  teamEntityInfoEntityIdResponse,
} from './team-entity-info-entity-id';

/**
 * Zod schema for the TeamEntityInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const teamEntityInfo = z.lazy(() => {
  return z.object({
    entityType: z.string(),
    entityId: teamEntityInfoEntityId,
  });
});

/**
 * @typedef {TeamEntityInfo} teamEntityInfo
 * @property {TeamEntityInfoEntityType} entityType - The entity type.
 * @property {TeamEntityInfoEntityId} entityId - The entity's ID.
 */
export type TeamEntityInfo = z.infer<typeof teamEntityInfo>;

/**
 * Zod schema for mapping API responses to the TeamEntityInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const teamEntityInfoResponse = z.lazy(() => {
  return z
    .object({
      entityType: z.string(),
      entityId: teamEntityInfoEntityIdResponse,
    })
    .transform((data) => ({
      entityType: data['entityType'],
      entityId: data['entityId'],
    }));
});

/**
 * Zod schema for mapping the TeamEntityInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const teamEntityInfoRequest = z.lazy(() => {
  return z
    .object({
      entityType: z.string(),
      entityId: teamEntityInfoEntityIdRequest,
    })
    .transform((data) => ({
      entityType: data['entityType'],
      entityId: data['entityId'],
    }));
});
