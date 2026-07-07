import { z } from 'zod';
import {
  AuditLogActor,
  auditLogActor,
  auditLogActorRequest,
  auditLogActorResponse,
} from './audit-log-actor';
import {
  AuditLogUser,
  auditLogUser,
  auditLogUserRequest,
  auditLogUserResponse,
} from './audit-log-user';
import {
  AuditLogTeam,
  auditLogTeam,
  auditLogTeamRequest,
  auditLogTeamResponse,
} from './audit-log-team';

/**
 * Zod schema for the AuditLogData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const auditLogData = z.lazy(() => {
  return z.object({
    actor: auditLogActor.optional(),
    user: auditLogUser.optional(),
    team: auditLogTeam.optional(),
    variables: z.any().optional(),
  });
});

/**
 * Information about the audit log.
 * @typedef  {AuditLogData} auditLogData - Information about the audit log. - Information about the audit log.
 * @property {AuditLogActor} - Information about the user who preformed the audit event.
 * @property {AuditLogUser} - Information about the user.
 * @property {AuditLogTeam} - The user's team information.
 * @property {any} - Additional information about the performed action.
 */
export type AuditLogData = z.infer<typeof auditLogData>;

/**
 * Zod schema for mapping API responses to the AuditLogData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogDataResponse = z.lazy(() => {
  return z
    .object({
      actor: auditLogActorResponse.optional(),
      user: auditLogUserResponse.optional(),
      team: auditLogTeamResponse.optional(),
      variables: z.any().optional(),
    })
    .transform((data) => ({
      actor: data['actor'],
      user: data['user'],
      team: data['team'],
      variables: data['variables'],
    }));
});

/**
 * Zod schema for mapping the AuditLogData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogDataRequest = z.lazy(() => {
  return z
    .object({
      actor: auditLogActorRequest.optional(),
      user: auditLogUserRequest.optional(),
      team: auditLogTeamRequest.optional(),
      variables: z.any().optional(),
    })
    .transform((data) => ({
      actor: data['actor'],
      user: data['user'],
      team: data['team'],
      variables: data['variables'],
    }));
});
