import { z } from 'zod';
import {
  SearchResourceWebData,
  searchResourceWebData,
  searchResourceWebDataRequest,
  searchResourceWebDataResponse,
} from './search-resource-web-data';
import {
  SearchResourceLinksSelfData,
  searchResourceLinksSelfData,
  searchResourceLinksSelfDataRequest,
  searchResourceLinksSelfDataResponse,
} from './search-resource-links-self-data';

/**
 * Zod schema for the SearchResourceLinksData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const searchResourceLinksData = z.lazy(() => {
  return z.object({
    web: searchResourceWebData.optional(),
    self: searchResourceLinksSelfData.optional(),
  });
});

/**
 * Information about the resource's hypermedia links.
 * @typedef  {SearchResourceLinksData} searchResourceLinksData - Information about the resource's hypermedia links. - Information about the resource's hypermedia links.
 * @property {SearchResourceWebData} - The link to view the resource in the Postman web app.
 * @property {SearchResourceLinksSelfData} - The link to the resource through the Postman API.
 */
export type SearchResourceLinksData = z.infer<typeof searchResourceLinksData>;

/**
 * Zod schema for mapping API responses to the SearchResourceLinksData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchResourceLinksDataResponse = z.lazy(() => {
  return z
    .object({
      web: searchResourceWebDataResponse.optional(),
      self: searchResourceLinksSelfDataResponse.optional(),
    })
    .transform((data) => ({
      web: data['web'],
      self: data['self'],
    }));
});

/**
 * Zod schema for mapping the SearchResourceLinksData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const searchResourceLinksDataRequest = z.lazy(() => {
  return z
    .object({
      web: searchResourceWebDataRequest.optional(),
      self: searchResourceLinksSelfDataRequest.optional(),
    })
    .transform((data) => ({
      web: data['web'],
      self: data['self'],
    }));
});
