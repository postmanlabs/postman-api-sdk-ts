import { z } from 'zod';

/**
 * Zod schema for the SuccessfulResponseData2 model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const successfulResponseData2 = z.lazy(() => {
  return z.object({
    isResourceDeleted: z.boolean().optional(),
    leakedBy: z.number().optional(),
    location: z.string().optional(),
    occurrences: z.number().optional(),
    parentResourceId: z.string().optional(),
    resourceId: z.string().optional(),
    resourceType: z.string().optional(),
    detectedAt: z.string().optional(),
    url: z.string().optional(),
  });
});

/**
 * Information about the secret finding locations.
 * @typedef {SuccessfulResponseData2} successfulResponseData2
 * @property {boolean} isResourceDeleted - If true, the resource in which the secret was found was deleted.
 * @property {number} leakedBy - The ID of the user who exposed the secret.
 * @property {string} location - The location where the secret was found.
 * @property {number} occurrences - The number of times the secret occurs in the location.
 * @property {string} parentResourceId - The parent resource's unique ID. If the resource is a request, folder, or example, this value is a collection ID. If the resource is a collection, globals, or environment, this is the resource's ID.
 * @property {string} resourceId - The unique ID of the resource where the secret was detected.
 * @property {string} resourceType - The type of resource in which the secret was detected.
 * @property {string} detectedAt - The date and time at which the secret was detected.
 * @property {string} url - The URL to the resource that contains the secret.
 */
export type SuccessfulResponseData2 = z.infer<typeof successfulResponseData2>;

/**
 * Zod schema for mapping API responses to the SuccessfulResponseData2 application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseData2Response = z.lazy(() => {
  return z
    .object({
      isResourceDeleted: z.boolean().optional(),
      leakedBy: z.number().optional(),
      location: z.string().optional(),
      occurrences: z.number().optional(),
      parentResourceId: z.string().optional(),
      resourceId: z.string().optional(),
      resourceType: z.string().optional(),
      detectedAt: z.string().optional(),
      url: z.string().optional(),
    })
    .transform((data) => ({
      isResourceDeleted: data['isResourceDeleted'],
      leakedBy: data['leakedBy'],
      location: data['location'],
      occurrences: data['occurrences'],
      parentResourceId: data['parentResourceId'],
      resourceId: data['resourceId'],
      resourceType: data['resourceType'],
      detectedAt: data['detectedAt'],
      url: data['url'],
    }));
});

/**
 * Zod schema for mapping the SuccessfulResponseData2 application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const successfulResponseData2Request = z.lazy(() => {
  return z
    .object({
      isResourceDeleted: z.boolean().optional(),
      leakedBy: z.number().optional(),
      location: z.string().optional(),
      occurrences: z.number().optional(),
      parentResourceId: z.string().optional(),
      resourceId: z.string().optional(),
      resourceType: z.string().optional(),
      detectedAt: z.string().optional(),
      url: z.string().optional(),
    })
    .transform((data) => ({
      isResourceDeleted: data['isResourceDeleted'],
      leakedBy: data['leakedBy'],
      location: data['location'],
      occurrences: data['occurrences'],
      parentResourceId: data['parentResourceId'],
      resourceId: data['resourceId'],
      resourceType: data['resourceType'],
      detectedAt: data['detectedAt'],
      url: data['url'],
    }));
});
