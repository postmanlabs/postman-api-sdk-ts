import { z } from 'zod';
import {
  AuditLogEvent,
  auditLogEvent,
  auditLogEventRequest,
  auditLogEventResponse,
} from './audit-log-event';

/**
 * Zod schema for the GetAuditLogs model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getAuditLogs = z.lazy(() => {
  return z.object({
    trails: z.array(auditLogEvent).optional(),
  });
});

/**
 *
 * @typedef  {GetAuditLogs} getAuditLogs
 * @property {AuditLogEvent[]} - A list of audit log events.
 */
export type GetAuditLogs = z.infer<typeof getAuditLogs>;

/**
 * Zod schema for mapping API responses to the GetAuditLogs application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAuditLogsResponse = z.lazy(() => {
  return z
    .object({
      trails: z.array(auditLogEventResponse).optional(),
    })
    .transform((data) => ({
      trails: data['trails'],
    }));
});

/**
 * Zod schema for mapping the GetAuditLogs application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getAuditLogsRequest = z.lazy(() => {
  return z
    .object({
      trails: z.array(auditLogEventRequest).optional(),
    })
    .transform((data) => ({
      trails: data['trails'],
    }));
});
