import { z } from 'zod';
import { Entities, entities, entitiesRequest, entitiesResponse } from './entities';

/**
 * Zod schema for the SuccessfulResponseData1 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseData1 = z.lazy(() => {
  return z.object({
    entities: z.array(entities),
  });
});

/**
 * An object containing the paginated elements.
 * @typedef  {SuccessfulResponseData1} successfulResponseData1 - An object containing the paginated elements. - An object containing the paginated elements.
 * @property {Entities[]} - A list of the Postman elements that contain the given tag.
 */
export type SuccessfulResponseData1 = z.infer<typeof successfulResponseData1>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseData1 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseData1Response = z.lazy(() => {
  return z
    .object({
      entities: z.array(entitiesResponse),
    })
    .transform((data) => ({
      entities: data['entities'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseData1 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseData1Request = z.lazy(() => {
  return z
    .object({
      entities: z.array(entitiesRequest),
    })
    .transform((data) => ({
      entities: data['entities'],
    }));
});
