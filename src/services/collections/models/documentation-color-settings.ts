import { z } from 'zod';

/**
 * Zod schema for the DocumentationColorSettings model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const documentationColorSettings = z.lazy(() => {
  return z.object({
    highlight: z.string().optional(),
    rightSidebar: z.string().optional(),
    topBar: z.string().optional(),
  });
});

/**
 * The theme's colors, in six digit hexcode. The values in this object must match the hexcode values of either the `light` or `dark` theme defined in the `appearance` object.
 * @typedef  {DocumentationColorSettings} documentationColorSettings - The theme's colors, in six digit hexcode. The values in this object must match the hexcode values of either the `light` or `dark` theme defined in the `appearance` object. - The theme's colors, in six digit hexcode. The values in this object must match the hexcode values of either the `light` or `dark` theme defined in the `appearance` object.
 * @property {string} - The hexcode color code for the documentation's highlighting.
 * @property {string} - The hexcode color code for the documentation's right sidebar color.
 * @property {string} - The hexcode color code for the documentation's top bar color.
 */
export type DocumentationColorSettings = z.infer<typeof documentationColorSettings>;

/**
 * Zod schema for mapping API responses to the DocumentationColorSettings application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const documentationColorSettingsResponse = z.lazy(() => {
  return z
    .object({
      highlight: z.string().optional(),
      rightSidebar: z.string().optional(),
      topBar: z.string().optional(),
    })
    .transform((data) => ({
      highlight: data['highlight'],
      rightSidebar: data['rightSidebar'],
      topBar: data['topBar'],
    }));
});

/**
 * Zod schema for mapping the DocumentationColorSettings application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const documentationColorSettingsRequest = z.lazy(() => {
  return z
    .object({
      highlight: z.string().optional(),
      rightSidebar: z.string().optional(),
      topBar: z.string().optional(),
    })
    .transform((data) => ({
      highlight: data['highlight'],
      rightSidebar: data['rightSidebar'],
      topBar: data['topBar'],
    }));
});
