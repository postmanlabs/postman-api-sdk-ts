import { z } from 'zod';

/**
 * Zod schema for the CreateComponent model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const createComponent = z.lazy(() => {
  return z.object({
    name: z
      .string()
      .min(1)
      .max(60)
      .regex(/^[a-zA-Z0-9\-_.]+$/),
    type: z.string(),
    content: z.string(),
    format: z.string().optional(),
  });
});

/**
 *
 * @typedef  {CreateComponent} createComponent
 * @property {string} - The component's name. This must be unique within the team and can only contain letters, digits, hyphens, underscores, and periods and can't exceed 60 characters.
 * @property {ComponentType} - The component's type. Corresponds to the specification that the component's content adheres to.
 * @property {string} - The component's content, up to a maximum of 500 KB (UTF-8).
 * @property {ComponentContentFormat} - The component's content format.
 */
export type CreateComponent = z.infer<typeof createComponent>;

/**
 * Zod schema for mapping API responses to the CreateComponent application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createComponentResponse1 = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .min(1)
        .max(60)
        .regex(/^[a-zA-Z0-9\-_.]+$/),
      type: z.string(),
      content: z.string(),
      format: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      content: data['content'],
      format: data['format'],
    }));
});

/**
 * Zod schema for mapping the CreateComponent application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const createComponentRequest = z.lazy(() => {
  return z
    .object({
      name: z
        .string()
        .min(1)
        .max(60)
        .regex(/^[a-zA-Z0-9\-_.]+$/),
      type: z.string(),
      content: z.string(),
      format: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      type: data['type'],
      content: data['content'],
      format: data['format'],
    }));
});
