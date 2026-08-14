import { z } from 'zod';
import {
  ComponentData,
  componentData,
  componentDataRequest,
  componentDataResponse,
} from './component-data';

/**
 * Zod schema for the GetComponent model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getComponent = z.lazy(() => {
  return z.object({
    data: componentData.optional(),
  });
});

/**
 * @typedef {GetComponent} getComponent
 * @property {ComponentData} data - Information about the component.
 */
export type GetComponent = z.infer<typeof getComponent>;

/**
 * Zod schema for mapping API responses to the GetComponent application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getComponentResponse = z.lazy(() => {
  return z
    .object({
      data: componentDataResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the GetComponent application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getComponentRequest = z.lazy(() => {
  return z
    .object({
      data: componentDataRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
