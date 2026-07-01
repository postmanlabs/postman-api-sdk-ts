import { z } from 'zod';
import {
  GetSpecVersionTagDataType,
  getSpecVersionTagDataType,
} from './get-spec-version-tag-data-type';
import { FileType, fileType } from './file-type';

/**
 * Zod schema for the GetSpecVersionTagData model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getSpecVersionTagData = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
    updatedBy: z.string().optional(),
    createdAt: z.string().optional(),
    updatedAt: z.string().optional(),
    createdBy: z.string().optional(),
    type: getSpecVersionTagDataType.optional(),
    path: z.string().optional(),
    fileType: fileType.optional(),
    content: z.string().optional(),
    parentId: z.string().optional(),
  });
});

/**
 * Information about the element.
 * @typedef  {GetSpecVersionTagData} getSpecVersionTagData - Information about the element. - Information about the element.
 * @property {string} - The file's ID.
 * @property {string} - The file's name.
 * @property {string} - The ID of the user who updated the file.
 * @property {string} - The date and time at which the file was created.
 * @property {string} - The date and time at which the file was updated.
 * @property {string} - The user ID of the user that created the file.
 * @property {GetSpecVersionTagDataType} - The file's type.
 * @property {string} - The file's path.
 * @property {FileType} - The type of file:

- `ROOT` — The file containing the full OpenAPI structure. This serves as the entry point for the API spec and references other (`DEFAULT`) spec files. Multi-file specs can only have one root file.
- `DEFAULT` — A file referenced by the `ROOT` file. This file contains a subset of the OpenAPI structure, such as specific components or paths.

This value doesn't return for folders.

 * @property {string} - The file's content. Folders don't return this property.
 * @property {string} - The file's parent folder ID. This property is absent for ROOT-level files.
 */
export type GetSpecVersionTagData = z.infer<typeof getSpecVersionTagData>;

/**
 * Zod schema for mapping API responses to the GetSpecVersionTagData application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecVersionTagDataResponse = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      createdBy: z.string().optional(),
      type: getSpecVersionTagDataType.optional(),
      path: z.string().optional(),
      fileType: fileType.optional(),
      content: z.string().optional(),
      parentId: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      createdBy: data['createdBy'],
      type: data['type'],
      path: data['path'],
      fileType: data['fileType'],
      content: data['content'],
      parentId: data['parentId'],
    }));
});

/**
 * Zod schema for mapping the GetSpecVersionTagData application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSpecVersionTagDataRequest = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
      updatedBy: z.string().optional(),
      createdAt: z.string().optional(),
      updatedAt: z.string().optional(),
      createdBy: z.string().optional(),
      type: getSpecVersionTagDataType.optional(),
      path: z.string().optional(),
      fileType: fileType.optional(),
      content: z.string().optional(),
      parentId: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
      updatedBy: data['updatedBy'],
      createdAt: data['createdAt'],
      updatedAt: data['updatedAt'],
      createdBy: data['createdBy'],
      type: data['type'],
      path: data['path'],
      fileType: data['fileType'],
      content: data['content'],
      parentId: data['parentId'],
    }));
});
