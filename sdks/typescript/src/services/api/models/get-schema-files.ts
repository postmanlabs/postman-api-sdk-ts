import { z } from 'zod';
import { Data, data, dataRequest, dataResponse } from './data';
import { FilesMeta, filesMeta, filesMetaRequest, filesMetaResponse } from './files-meta';

/**
 * Zod schema for the GetSchemaFiles model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const getSchemaFiles = z.lazy(() => {
  return z.object({
    data: z.array(data).optional(),
    meta: filesMeta.optional(),
  });
});

/**
 * Information about the schema's files. The response is paginated and limited to one page.
 * @typedef  {GetSchemaFiles} getSchemaFiles - Information about the schema's files. The response is paginated and limited to one page. - Information about the schema's files. The response is paginated and limited to one page.
 * @property {Data[]} - A list of the schema files.
 * @property {FilesMeta} - The response's non-standard meta information.
 */
export type GetSchemaFiles = z.infer<typeof getSchemaFiles>;

/**
 * Zod schema for mapping API responses to the GetSchemaFiles application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSchemaFilesResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(dataResponse).optional(),
      meta: filesMetaResponse.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});

/**
 * Zod schema for mapping the GetSchemaFiles application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const getSchemaFilesRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(dataRequest).optional(),
      meta: filesMetaRequest.optional(),
    })
    .transform((data) => ({
      data: data['data'],
      meta: data['meta'],
    }));
});
