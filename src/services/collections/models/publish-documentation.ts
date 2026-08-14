import { z } from 'zod';
import {
  DocumentationColorSettings,
  documentationColorSettings,
  documentationColorSettingsRequest,
  documentationColorSettingsResponse,
} from './documentation-color-settings';
import {
  DocumentationCustomizationSettings,
  documentationCustomizationSettings,
  documentationCustomizationSettingsRequest,
  documentationCustomizationSettingsResponse,
} from './documentation-customization-settings';

/**
 * Zod schema for the PublishDocumentation model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const publishDocumentation = z.lazy(() => {
  return z.object({
    environmentUid: z.string().optional(),
    customColor: documentationColorSettings,
    documentationLayout: z.string().optional(),
    customization: documentationCustomizationSettings,
  });
});

/**
 * @typedef {PublishDocumentation} publishDocumentation
 * @property {string} environmentUid - The unique ID of the environment to publish with the documentation. The initial values of all variables are published with the documentation. Make certain they don't contain sensitive information such as passwords or tokens.
 * @property {DocumentationColorSettings} customColor - The theme's colors, in six digit hexcode. The values in this object must match the hexcode values of either the `light` or `dark` theme defined in the `appearance` object.
 * @property {DocumentationLayout} documentationLayout - The documentation's default layout style:
- `classic-single-column` — Displays sample code inline beneath each request.
- `classic-double-column` — Displays sample code in a column next to the documentation.

 * @property {DocumentationCustomizationSettings} customization - Information about the documentation's customization.
 */
export type PublishDocumentation = z.infer<typeof publishDocumentation>;

/**
 * Zod schema for mapping API responses to the PublishDocumentation application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const publishDocumentationResponse1 = z.lazy(() => {
  return z
    .object({
      environmentUid: z.string().optional(),
      customColor: documentationColorSettingsResponse,
      documentationLayout: z.string().optional(),
      customization: documentationCustomizationSettingsResponse,
    })
    .transform((data) => ({
      environmentUid: data['environmentUid'],
      customColor: data['customColor'],
      documentationLayout: data['documentationLayout'],
      customization: data['customization'],
    }));
});

/**
 * Zod schema for mapping the PublishDocumentation application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const publishDocumentationRequest = z.lazy(() => {
  return z
    .object({
      environmentUid: z.string().optional(),
      customColor: documentationColorSettingsRequest,
      documentationLayout: z.string().optional(),
      customization: documentationCustomizationSettingsRequest,
    })
    .transform((data) => ({
      environmentUid: data['environmentUid'],
      customColor: data['customColor'],
      documentationLayout: data['documentationLayout'],
      customization: data['customization'],
    }));
});
