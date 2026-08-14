import { z } from 'zod';

/**
 * Zod schema for the AuditLogTeam model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const auditLogTeam = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    id: z.number().optional(),
  });
});

/**
 * The user's team information.
 * @typedef {AuditLogTeam} auditLogTeam
 * @property {string} name - The team's name.
 * @property {number} id - The team's ID.
 */
export type AuditLogTeam = z.infer<typeof auditLogTeam>;

/**
 * Zod schema for mapping API responses to the AuditLogTeam application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogTeamResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      id: z.number().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      id: data['id'],
    }));
});

/**
 * Zod schema for mapping the AuditLogTeam application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const auditLogTeamRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      id: z.number().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      id: data['id'],
    }));
});
