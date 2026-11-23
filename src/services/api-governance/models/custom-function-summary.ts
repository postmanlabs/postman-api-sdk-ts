import { z } from 'zod';

/**
 * Zod schema for the CustomFunctionSummary model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const customFunctionSummary = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    path: z.string().optional(),
    description: z.string().optional(),
    type: z.string().optional(),
    createdBy: z.string().optional(),
    updatedBy: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  });
});

/**
 * Information about the custom function, without its content.
 * @typedef {CustomFunctionSummary} customFunctionSummary
 * @property {string} id - The custom function's ID.
 * @property {string} name - The custom function's name, derived from its path.
 * @property {string} path - The custom function's path, in the form `functions/<name>.js`.
 * @property {string} description - The custom function's description.
 * @property {CustomFunctionSummaryType} type - The custom function's type.
 * @property {string} createdBy - The ID of the user who created the custom function.
 * @property {string} updatedBy - The ID of the user who last updated the custom function.
 * @property {string} createdAt - The date and time at which the custom function was created.
 * @property {string} updatedAt - The date and time at which the custom function was last updated.
 */
export type CustomFunctionSummary = z.infer<typeof customFunctionSummary>;

/**
 * Zod schema for mapping API responses to the CustomFunctionSummary application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const customFunctionSummaryResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      path: z.string().optional(),
      description: z.string().optional(),
      type: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      path: data['path'],
      description: data['description'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the CustomFunctionSummary application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const customFunctionSummaryRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      path: z.string().optional(),
      description: z.string().optional(),
      type: z.string().optional(),
      createdBy: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      path: data['path'],
      description: data['description'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
