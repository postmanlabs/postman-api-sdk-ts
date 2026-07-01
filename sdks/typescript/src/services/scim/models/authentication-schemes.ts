import { z } from 'zod';

/**
 * Zod schema for the AuthenticationSchemes model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const authenticationSchemes = z.lazy(() => {
  return z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    specUri: z.string().optional(),
    type: z.string().optional(),
  });
});

/**
 * Information about the scheme.
 * @typedef  {AuthenticationSchemes} authenticationSchemes - Information about the scheme. - Information about the scheme.
 * @property {string} - The scheme's description.
 * @property {string} - The scheme's friendly name.
 * @property {string} - A link to the scheme's specification documentation.
 * @property {string} - The scheme's type.
 */
export type AuthenticationSchemes = z.infer<typeof authenticationSchemes>;

/**
 * Zod schema for mapping API responses to the AuthenticationSchemes application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const authenticationSchemesResponse = z.lazy(() => {
  return z
    .object({
      description: z.string().optional(),
      name: z.string().optional(),
      specUri: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      description: data['description'],
      name: data['name'],
      specUri: data['specUri'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the AuthenticationSchemes application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const authenticationSchemesRequest = z.lazy(() => {
  return z
    .object({
      description: z.string().optional(),
      name: z.string().optional(),
      specUri: z.string().optional(),
      type: z.string().optional(),
    })
    .transform((data) => ({
      description: data['description'],
      name: data['name'],
      specUri: data['specUri'],
      type: data['type'],
    }));
});
