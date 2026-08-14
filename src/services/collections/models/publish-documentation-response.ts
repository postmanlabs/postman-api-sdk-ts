import { z } from 'zod';
import {
  DocumentationCustomizationSettings,
  documentationCustomizationSettings,
  documentationCustomizationSettingsRequest,
  documentationCustomizationSettingsResponse,
} from './documentation-customization-settings';
import {
  DocumentationColorSettings,
  documentationColorSettings,
  documentationColorSettingsRequest,
  documentationColorSettingsResponse,
} from './documentation-color-settings';

/**
 * Zod schema for the PublishDocumentationResponse model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const publishDocumentationResponse = z.lazy(() => {
  return z.object({
    published: z.boolean().optional(),
    documentationLayout: z.string().optional(),
    customization: documentationCustomizationSettings.optional(),
    publishDate: z.string().optional(),
    publisherId: z.string().optional(),
    environmentUid: z.string().optional(),
    customColor: documentationColorSettings.optional(),
    publicUrl: z.string().optional(),
    id: z.string().optional(),
    collectionId: z.string().optional(),
  });
});

/**
 * @typedef {PublishDocumentationResponse} publishDocumentationResponse
 * @property {boolean} published - If true, the documentation is published.
 * @property {string} documentationLayout - The documentation's default layout style.
 * @property {DocumentationCustomizationSettings} customization - Information about the documentation's customization.
 * @property {string} publishDate - The date and time at which the documentation was published.
 * @property {string} publisherId - The user ID of the user that published the documentation.
 * @property {string} environmentUid - The unique ID of the environment published with the collection documentation.
 * @property {DocumentationColorSettings} customColor - The theme's colors, in six digit hexcode. The values in this object must match the hexcode values of either the `light` or `dark` theme defined in the `appearance` object.
 * @property {string} publicUrl - The public URL of the published documentation.
 * @property {string} id - The published documentation's ID.
 * @property {string} collectionId - The collection's ID.
 */
export type PublishDocumentationResponse = z.infer<typeof publishDocumentationResponse>;

/**
 * Zod schema for mapping API responses to the PublishDocumentationResponse application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const publishDocumentationResponseResponse = z.lazy(() => {
  return z
    .object({
      published: z.boolean().optional(),
      documentationLayout: z.string().optional(),
      customization: documentationCustomizationSettingsResponse.optional(),
      publishDate: z.string().optional(),
      publisherId: z.string().optional(),
      environmentUid: z.string().optional(),
      customColor: documentationColorSettingsResponse.optional(),
      publicUrl: z.string().optional(),
      id: z.string().optional(),
      collectionId: z.string().optional(),
    })
    .transform((data) => ({
      published: data['published'],
      documentationLayout: data['documentationLayout'],
      customization: data['customization'],
      publishDate: data['publishDate'],
      publisherId: data['publisherId'],
      environmentUid: data['environmentUid'],
      customColor: data['customColor'],
      publicUrl: data['publicUrl'],
      id: data['id'],
      collectionId: data['collectionId'],
    }));
});

/**
 * Zod schema for mapping the PublishDocumentationResponse application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const publishDocumentationResponseRequest = z.lazy(() => {
  return z
    .object({
      published: z.boolean().optional(),
      documentationLayout: z.string().optional(),
      customization: documentationCustomizationSettingsRequest.optional(),
      publishDate: z.string().optional(),
      publisherId: z.string().optional(),
      environmentUid: z.string().optional(),
      customColor: documentationColorSettingsRequest.optional(),
      publicUrl: z.string().optional(),
      id: z.string().optional(),
      collectionId: z.string().optional(),
    })
    .transform((data) => ({
      published: data['published'],
      documentationLayout: data['documentationLayout'],
      customization: data['customization'],
      publishDate: data['publishDate'],
      publisherId: data['publisherId'],
      environmentUid: data['environmentUid'],
      customColor: data['customColor'],
      publicUrl: data['publicUrl'],
      id: data['id'],
      collectionId: data['collectionId'],
    }));
});
