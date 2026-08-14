import { z } from 'zod';

/**
 * Zod schema for the ComponentVersionData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const componentVersionData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    label: z.string().optional(),
    url: z.string().optional(),
    format: z.string().optional(),
    publishedAt: z.string().optional(),
    content: z.string().optional(),
  });
});

/**
 * Information about a component's version.
 * @typedef {ComponentVersionData} componentVersionData
 * @property {string} id - The component version's ID.
 * @property {string} label - The component version's label.
 * @property {string} url - The URL where the component version can be accessed.
 * @property {string} format - The component version's content format.
 * @property {string} publishedAt - The date and time at which the component version was published.
 * @property {string} content - The version's content. This returns when you include the `include` parameter.
 */
export type ComponentVersionData = z.infer<typeof componentVersionData>;

/**
 * Zod schema for mapping API responses to the ComponentVersionData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const componentVersionDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      label: z.string().optional(),
      url: z.string().optional(),
      format: z.string().optional(),
      publishedAt: z.string().optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      label: data['label'],
      url: data['url'],
      format: data['format'],
      publishedAt: data['publishedAt'],
      content: data['content'],
    }));
});

/**
 * Zod schema for mapping the ComponentVersionData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const componentVersionDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      label: z.string().optional(),
      url: z.string().optional(),
      format: z.string().optional(),
      publishedAt: z.string().optional(),
      content: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      label: data['label'],
      url: data['url'],
      format: data['format'],
      publishedAt: data['publishedAt'],
      content: data['content'],
    }));
});
