import { z } from 'zod';
import { FileFormat, fileFormat } from './file-format';
import { SpecType, specType } from './spec-type';

/**
 * Zod schema for the SpecInformation model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const specInformation = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    fileFormat: fileFormat.optional(),
    name: z.string().optional(),
    type: specType.optional(),
    createdBy: z.number().optional(),
    updatedBy: z.number().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
  });
});

/**
 * Information about the API specification.
 * @typedef  {SpecInformation} specInformation - Information about the API specification. - Information about the API specification.
 * @property {string} - The specification's ID.
 * @property {FileFormat} - The specification's file format.
 * @property {string} - The specification's name.
 * @property {SpecType} - The type of API specification.
 * @property {number} - The user ID of the user that created the specification.
 * @property {number} - The ID of the user who updated the specification.
 * @property {string} - The date and time at which the specification was created.
 * @property {string} - The date and time at which the specification was updated.
 */
export type SpecInformation = z.infer<typeof specInformation>;

/**
 * Zod schema for mapping API responses to the SpecInformation application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const specInformationResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      fileFormat: fileFormat.optional(),
      name: z.string().optional(),
      type: specType.optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      fileFormat: data['fileFormat'],
      name: data['name'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});

/**
 * Zod schema for mapping the SpecInformation application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const specInformationRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      fileFormat: fileFormat.optional(),
      name: z.string().optional(),
      type: specType.optional(),
      createdBy: z.number().optional(),
      updatedBy: z.number().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      fileFormat: data['fileFormat'],
      name: data['name'],
      type: data['type'],
      createdBy: data['createdBy'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
    }));
});
