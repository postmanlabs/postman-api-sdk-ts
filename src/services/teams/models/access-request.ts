import { z } from 'zod';

/**
 * Zod schema for the AccessRequest model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const accessRequest = z.lazy(() => {
  return z.object({
    id: z.number().optional(),
    requestType: z.string().optional(),
    reason: z.string().optional(),
    status: z.string().optional(),
    objectType: z.string().optional(),
    objectId: z.number().optional(),
    createdBy: z.number().optional(),
  });
});

/**
 * Information about the access request.
 * @typedef  {AccessRequest} accessRequest - Information about the access request. - Information about the access request.
 * @property {number} - The access request's ID.
 * @property {string} - The access request type.
 * @property {string} - The reason the access request was created.
 * @property {string} - The access request's status.
 * @property {string} - The entity type.
 * @property {number} - The entity's ID.
 * @property {number} - The user ID of the user who created the access request.
 */
export type AccessRequest = z.infer<typeof accessRequest>;

/**
 * Zod schema for mapping API responses to the AccessRequest application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const accessRequestResponse = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      requestType: z.string().optional(),
      reason: z.string().optional(),
      status: z.string().optional(),
      objectType: z.string().optional(),
      objectId: z.number().optional(),
      createdBy: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      requestType: data['requestType'],
      reason: data['reason'],
      status: data['status'],
      objectType: data['objectType'],
      objectId: data['objectId'],
      createdBy: data['createdBy'],
    }));
});

/**
 * Zod schema for mapping the AccessRequest application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const accessRequestRequest = z.lazy(() => {
  return z
    .object({
      id: z.number().optional(),
      requestType: z.string().optional(),
      reason: z.string().optional(),
      status: z.string().optional(),
      objectType: z.string().optional(),
      objectId: z.number().optional(),
      createdBy: z.number().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      requestType: data['requestType'],
      reason: data['reason'],
      status: data['status'],
      objectType: data['objectType'],
      objectId: data['objectId'],
      createdBy: data['createdBy'],
    }));
});
