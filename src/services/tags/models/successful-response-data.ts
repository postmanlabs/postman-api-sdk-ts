import { z } from 'zod';
import { Entities, entities, entitiesRequest, entitiesResponse } from './entities';

/**
 * Zod schema for the SuccessfulResponseData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseData = z.lazy(() => {
  return z.object({
    entities: z.array(entities),
  });
});

/**
 * An object containing the paginated elements.
 * @typedef {SuccessfulResponseData} successfulResponseData
 * @property {Entities[]} entities - A list of the Postman elements that contain the given tag.
 */
export type SuccessfulResponseData = z.infer<typeof successfulResponseData>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseDataResponse = z.lazy(() => {
  return z
    .object({
      entities: z.array(entitiesResponse),
    })
    .transform((data) => ({
      entities: data['entities'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseDataRequest = z.lazy(() => {
  return z
    .object({
      entities: z.array(entitiesRequest),
    })
    .transform((data) => ({
      entities: data['entities'],
    }));
});
