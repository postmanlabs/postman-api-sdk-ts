import { z } from 'zod';

/**
 * Zod schema for the AuthenticationSchemesData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const authenticationSchemesData = z.lazy(() => {
  return z.object({
    description: z.string().optional(),
    name: z.string().optional(),
    specUri: z.string().optional(),
    type: z.string().optional(),
  });
});

/**
 * Information about the scheme.
 * @typedef {AuthenticationSchemesData} authenticationSchemesData
 * @property {string} description - The scheme's description.
 * @property {string} name - The scheme's friendly name.
 * @property {string} specUri - A link to the scheme's specification documentation.
 * @property {string} type - The scheme's type.
 */
export type AuthenticationSchemesData = z.infer<typeof authenticationSchemesData>;

/**
 * Zod schema for mapping API responses to the AuthenticationSchemesData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const authenticationSchemesDataResponse = z.lazy(() => {
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
 * Zod schema for mapping the AuthenticationSchemesData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const authenticationSchemesDataRequest = z.lazy(() => {
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
