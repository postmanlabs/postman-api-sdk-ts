import { z } from 'zod';
import {
  SuccessfulResponseDataType,
  successfulResponseDataType,
} from './successful-response-data-type';

/**
 * Zod schema for the SuccessfulResponseData3 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseData3 = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    id: z.string().optional(),
    type: successfulResponseDataType.optional(),
  });
});

/**
 * Information about the secret type.
 * @typedef  {SuccessfulResponseData3} successfulResponseData3 - Information about the secret type. - Information about the secret type.
 * @property {string} - The name of the secret type.
 * @property {string} - The ID of the secret type.
 * @property {SuccessfulResponseDataType} - The origin of the secret type:
- `DEFAULT` — Supported by default in Postman.
- `TEAM_REGEX` — A custom regex added by an Admin or Super Admin user in the ``Configure Alerts`` section of the [``Team Settings``](https://learning.postman.com/docs/administration/team-settings/) interface.

 */
export type SuccessfulResponseData3 = z.infer<typeof successfulResponseData3>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseData3 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseData3Response = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      id: z.string().optional(),
      type: successfulResponseDataType.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      id: data['id'],
      type: data['type'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseData3 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseData3Request = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      id: z.string().optional(),
      type: successfulResponseDataType.optional(),
    })
    .transform((data) => ({
      name: data['name'],
      id: data['id'],
      type: data['type'],
    }));
});
