import { z } from 'zod';
import {
  PostmanGroupsInformationData,
  postmanGroupsInformationData,
  postmanGroupsInformationDataRequest,
  postmanGroupsInformationDataResponse,
} from './postman-groups-information-data';

/**
 * Zod schema for the PostmanGroupsInformation model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const postmanGroupsInformation = z.lazy(() => {
  return z.object({
    data: z.array(postmanGroupsInformationData).optional(),
  });
});

/**
 * @typedef {PostmanGroupsInformation} postmanGroupsInformation
 * @property {PostmanGroupsInformationData[]} data - A list of Postman groups.
 */
export type PostmanGroupsInformation = z.infer<typeof postmanGroupsInformation>;

/**
 * Zod schema for mapping API responses to the PostmanGroupsInformation application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postmanGroupsInformationResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(postmanGroupsInformationDataResponse).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the PostmanGroupsInformation application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const postmanGroupsInformationRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(postmanGroupsInformationDataRequest).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
