import { z } from 'zod';
import {
  AuditLogData,
  auditLogData,
  auditLogDataRequest,
  auditLogDataResponse,
} from './audit-log-data';

/**
 * Zod schema for the AuditLogEvent model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const auditLogEvent = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    ip: z.string().optional(),
    userAgent: z.string().optional(),
    action: z.string().optional(),
    timestamp: z.string().optional(),
    message: z.string().optional(),
    data: auditLogData.optional(),
  });
});

/**
 * Information about the audit log event.
 * @typedef  {AuditLogEvent} auditLogEvent - Information about the audit log event. - Information about the audit log event.
 * @property {number} - The audit event's ID.
 * @property {string} - The IP address of the user that performed the action.
 * @property {string} - The user agent information.
 * @property {string} - The action performed by the user.
 * @property {string} - The date and time at which the event occurred.
 * @property {string} - The audit event's description.
 * @property {AuditLogData} - Information about the audit log.
 */
export type AuditLogEvent = z.infer<typeof auditLogEvent>;

/**
 * Zod schema for mapping API responses to the AuditLogEvent application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogEventResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      ip: z.string().optional(),
      userAgent: z.string().optional(),
      action: z.string().optional(),
      timestamp: z.string().optional(),
      message: z.string().optional(),
      data: auditLogDataResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      ip: data['ip'],
      userAgent: data['userAgent'],
      action: data['action'],
      timestamp: data['timestamp'],
      message: data['message'],
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the AuditLogEvent application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogEventRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      ip: z.string().optional(),
      userAgent: z.string().optional(),
      action: z.string().optional(),
      timestamp: z.string().optional(),
      message: z.string().optional(),
      data: auditLogDataRequest.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      ip: data['ip'],
      userAgent: data['userAgent'],
      action: data['action'],
      timestamp: data['timestamp'],
      message: data['message'],
      data: data['data'],
    }));
});
