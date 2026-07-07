import { z } from 'zod';
import {
  DocumentationColorSettings,
  documentationColorSettings,
  documentationColorSettingsRequest,
  documentationColorSettingsResponse,
} from './documentation-color-settings';

/**
 * Zod schema for the DocumentationThemeSettings model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const documentationThemeSettings = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    colors: documentationColorSettings.optional(),
    logo: z.string().optional().nullable(),
  });
});

/**
 *
 * @typedef  {DocumentationThemeSettings} documentationThemeSettings
 * @property {DocumentationThemeSettingsName} - The `light` or `dark` theme.
 * @property {DocumentationColorSettings} - The theme's colors, in six digit hexcode. The values in this object must match the hexcode values of either the `light` or `dark` theme defined in the `appearance` object.
 * @property {string} - The URL to the documentation's logo image. By default, public documentation uses your team logo.
 */
export type DocumentationThemeSettings = z.infer<typeof documentationThemeSettings>;

/**
 * Zod schema for mapping API responses to the DocumentationThemeSettings application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const documentationThemeSettingsResponse = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      colors: documentationColorSettingsResponse.optional(),
      logo: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      colors: data['colors'],
      logo: data['logo'],
    }));
});

/**
 * Zod schema for mapping the DocumentationThemeSettings application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const documentationThemeSettingsRequest = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      colors: documentationColorSettingsRequest.optional(),
      logo: z.string().optional().nullable(),
    })
    .transform((data) => ({
      name: data['name'],
      colors: data['colors'],
      logo: data['logo'],
    }));
});
