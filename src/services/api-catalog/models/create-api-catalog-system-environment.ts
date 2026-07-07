import { z } from 'zod';

/**
 * Zod schema for the CreateApiCatalogSystemEnvironment model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createApiCatalogSystemEnvironment = z.lazy(() => {
  return z.object({
    name: z.string().min(1).max(255),
    label: z
      .string()
      .max(50)
      .regex(/^[a-z0-9_-]+$/)
      .optional(),
    description: z.string().max(500).optional(),
    color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
    isProduction: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {CreateApiCatalogSystemEnvironment} createApiCatalogSystemEnvironment
 * @property {string} - The system environment's name. This value must be unique within the team.
 * @property {string} - A lowercase, terminal-friendly identifier for the system environment. Accepts only alphanumeric characters, hyphens, and underscores.
 * @property {string} - A description of the system environment. To remove a description, pass this value as an empty string.
 * @property {string} - A six-digit hex color code.
 * @property {boolean} - If true, the system environment is a production environment.
 */
export type CreateApiCatalogSystemEnvironment = z.infer<typeof createApiCatalogSystemEnvironment>;

/**
 * Zod schema for mapping API responses to the CreateApiCatalogSystemEnvironment application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiCatalogSystemEnvironmentResponse1 = z.lazy(() => {
  return z
    .object({
      name: z.string().min(1).max(255),
      label: z
        .string()
        .max(50)
        .regex(/^[a-z0-9_-]+$/)
        .optional(),
      description: z.string().max(500).optional(),
      color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
      isProduction: z.boolean().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      label: data['label'],
      description: data['description'],
      color: data['color'],
      isProduction: data['isProduction'],
    }));
});

/**
 * Zod schema for mapping the CreateApiCatalogSystemEnvironment application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createApiCatalogSystemEnvironmentRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().min(1).max(255),
      label: z
        .string()
        .max(50)
        .regex(/^[a-z0-9_-]+$/)
        .optional(),
      description: z.string().max(500).optional(),
      color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
      isProduction: z.boolean().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      label: data['label'],
      description: data['description'],
      color: data['color'],
      isProduction: data['isProduction'],
    }));
});
