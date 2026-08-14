import { z } from 'zod';

/**
 * Zod schema for the OrgsInfo model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const orgsInfo = z.lazy(() => {
  return z.object({
    _orgId_: z.array(z.string()).optional(),
  });
});

/**
 * @typedef {OrgsInfo} orgsInfo
 * @property {TeamRoles[]} _orgId_ - A list of the organization's roles. The array's name is the organization's ID.
 */
export type OrgsInfo = z.infer<typeof orgsInfo>;

/**
 * Zod schema for mapping API responses to the OrgsInfo application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const orgsInfoResponse = z.lazy(() => {
  return z
    .object({
      '{{orgId}}': z.array(z.string()).optional(),
    })
    .transform((data) => ({
      _orgId_: data['{{orgId}}'],
    }));
});

/**
 * Zod schema for mapping the OrgsInfo application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const orgsInfoRequest = z.lazy(() => {
  return z
    .object({
      _orgId_: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      '{{orgId}}': data['_orgId_'],
    }));
});
