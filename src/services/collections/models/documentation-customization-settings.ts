import { z } from 'zod';
import {
  DocumentationMetaTags,
  documentationMetaTags,
  documentationMetaTagsRequest,
  documentationMetaTagsResponse,
} from './documentation-meta-tags';
import {
  DocumentationApperanceSettings,
  documentationApperanceSettings,
  documentationApperanceSettingsRequest,
  documentationApperanceSettingsResponse,
} from './documentation-apperance-settings';

/**
 * Zod schema for the DocumentationCustomizationSettings model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const documentationCustomizationSettings = z.lazy(() => {
  return z.object({
    metaTags: z.array(documentationMetaTags).optional(),
    appearance: documentationApperanceSettings.optional(),
  });
});

/**
 * Information about the documentation's customization.
 * @typedef {DocumentationCustomizationSettings} documentationCustomizationSettings
 * @property {DocumentationMetaTags[]} metaTags - The key-pair values that contain the documentation's `title` and `description` metadata information.
 * @property {DocumentationApperanceSettings} appearance - Information about the documentation appearance, such as colors and theme.
 */
export type DocumentationCustomizationSettings = z.infer<typeof documentationCustomizationSettings>;

/**
 * Zod schema for mapping API responses to the DocumentationCustomizationSettings application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const documentationCustomizationSettingsResponse = z.lazy(() => {
  return z
    .object({
      metaTags: z.array(documentationMetaTagsResponse).optional(),
      appearance: documentationApperanceSettingsResponse.optional(),
    })
    .transform((data) => ({
      metaTags: data['metaTags'],
      appearance: data['appearance'],
    }));
});

/**
 * Zod schema for mapping the DocumentationCustomizationSettings application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const documentationCustomizationSettingsRequest = z.lazy(() => {
  return z
    .object({
      metaTags: z.array(documentationMetaTagsRequest).optional(),
      appearance: documentationApperanceSettingsRequest.optional(),
    })
    .transform((data) => ({
      metaTags: data['metaTags'],
      appearance: data['appearance'],
    }));
});
