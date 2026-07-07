import { z } from 'zod';

/**
 * Zod schema for the AuditLogUser model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const auditLogUser = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    username: z.string().optional(),
    email: z.string().optional(),
    id: z.number().optional(),
  });
});

/**
 * Information about the user.
 * @typedef  {AuditLogUser} auditLogUser - Information about the user. - Information about the user.
 * @property {string} - The user's name.
 * @property {string} - The user's username.
 * @property {string} - The user's email address.
 * @property {number} - The user's ID.
 */
export type AuditLogUser = z.infer<typeof auditLogUser>;

/**
 * Zod schema for mapping API responses to the AuditLogUser application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogUserResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      username: z.string().optional(),
      email: z.string().optional(),
      id: z.number().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      username: data['username'],
      email: data['email'],
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the AuditLogUser application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogUserRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      username: z.string().optional(),
      email: z.string().optional(),
      id: z.number().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      username: data['username'],
      email: data['email'],
      id: data['id'],
    }));
});
