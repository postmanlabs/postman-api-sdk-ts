import { z } from 'zod';
import { Default_, default_ } from './default_';
import {
  DocumentationThemeSettings,
  documentationThemeSettings,
  documentationThemeSettingsRequest,
  documentationThemeSettingsResponse,
} from './documentation-theme-settings';

/**
 * Zod schema for the DocumentationApperanceSettings model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const documentationApperanceSettings = z.lazy(() => {
  return z.object({
    default: default_.optional(),
    themes: z.array(documentationThemeSettings).optional(),
  });
});

/**
 * Information about the documentation appearance, such as colors and theme.
 * @typedef  {DocumentationApperanceSettings} documentationApperanceSettings - Information about the documentation appearance, such as colors and theme. - Information about the documentation appearance, such as colors and theme.
 * @property {Default_} - The default color theme (`light` or `dark`). Documentation uses the given theme value by default.
 * @property {DocumentationThemeSettings[]} - A list of theme settings for the `light` and `dark` themes.
 */
export type DocumentationApperanceSettings = z.infer<typeof documentationApperanceSettings>;

/**
 * Zod schema for mapping API responses to the DocumentationApperanceSettings application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const documentationApperanceSettingsResponse = z.lazy(() => {
  return z
    .object({
      default: default_.optional(),
      themes: z.array(documentationThemeSettingsResponse).optional(),
    })
    .transform((data) => ({
      default: data['default'],
      themes: data['themes'],
    }));
});

/**
 * Zod schema for mapping the DocumentationApperanceSettings application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const documentationApperanceSettingsRequest = z.lazy(() => {
  return z
    .object({
      default: default_.optional(),
      themes: z.array(documentationThemeSettingsRequest).optional(),
    })
    .transform((data) => ({
      default: data['default'],
      themes: data['themes'],
    }));
});
