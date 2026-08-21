import { z } from 'zod';
import {
  AuditLogAction,
  auditLogAction,
  auditLogActionRequest,
  auditLogActionResponse,
} from './audit-log-action';

/**
 * Zod schema for the AuditLogEvents model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const auditLogEvents = z.lazy(() => {
  return z.object({
    data: z.array(auditLogAction).optional(),
  });
});

/**
 * @typedef {AuditLogEvents} auditLogEvents
 * @property {AuditLogAction[]} data - A list of available audit log event actions.
 */
export type AuditLogEvents = z.infer<typeof auditLogEvents>;

/**
 * Zod schema for mapping API responses to the AuditLogEvents application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogEventsResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(auditLogActionResponse).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the AuditLogEvents application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogEventsRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(auditLogActionRequest).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
