import { z } from 'zod';

/**
 * Zod schema for the AuditLogAction model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const auditLogAction = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    displayName: z.string().optional(),
  });
});

/**
 * Information about the audit log event action.
 * @typedef {AuditLogAction} auditLogAction
 * @property {string} name - The audit log event action's name.
 * @property {string} displayName - The audit log event's display name as it appears in Postman's Audit Logs dashboard.
 */
export type AuditLogAction = z.infer<typeof auditLogAction>;

/**
 * Zod schema for mapping API responses to the AuditLogAction application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogActionResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      displayName: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      displayName: data['displayName'],
    }));
});

/**
 * Zod schema for mapping the AuditLogAction application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogActionRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      displayName: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      displayName: data['displayName'],
    }));
});
