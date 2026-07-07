import { z } from 'zod';

/**
 * Zod schema for the AuditLogActor model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const auditLogActor = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    username: z.string().optional(),
    email: z.string().optional(),
    id: z.number().optional(),
    active: z.boolean().optional(),
  });
});

/**
 * Information about the user who preformed the audit event.
 * @typedef  {AuditLogActor} auditLogActor - Information about the user who preformed the audit event. - Information about the user who preformed the audit event.
 * @property {string} - The user's name.
 * @property {string} - The user's username.
 * @property {string} - The user's email address.
 * @property {number} - The user's ID.
 * @property {boolean} - If true, the user is active. If false, the user is deactivated.
 */
export type AuditLogActor = z.infer<typeof auditLogActor>;

/**
 * Zod schema for mapping API responses to the AuditLogActor application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogActorResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      username: z.string().optional(),
      email: z.string().optional(),
      id: z.number().optional(),
      active: z.boolean().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      username: data['username'],
      email: data['email'],
      id: data['id'],
      active: data['active'],
    }));
});

/**
 * Zod schema for mapping the AuditLogActor application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogActorRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      username: z.string().optional(),
      email: z.string().optional(),
      id: z.number().optional(),
      active: z.boolean().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      username: data['username'],
      email: data['email'],
      id: data['id'],
      active: data['active'],
    }));
});
