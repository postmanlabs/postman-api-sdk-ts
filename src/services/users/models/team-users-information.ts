import { z } from 'zod';
import {
  UserInformation,
  userInformation,
  userInformationRequest,
  userInformationResponse,
} from './user-information';

/**
 * Zod schema for the TeamUsersInformation model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const teamUsersInformation = z.lazy(() => {
  return z.object({
    data: z.array(userInformation).optional(),
  });
});

/**
 * @typedef {TeamUsersInformation} teamUsersInformation
 * @property {UserInformation[]} data - A list of users on the team.
 */
export type TeamUsersInformation = z.infer<typeof teamUsersInformation>;

/**
 * Zod schema for mapping API responses to the TeamUsersInformation application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const teamUsersInformationResponse = z.lazy(() => {
  return z
    .object({
      data: z.array(userInformationResponse).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});

/**
 * Zod schema for mapping the TeamUsersInformation application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const teamUsersInformationRequest = z.lazy(() => {
  return z
    .object({
      data: z.array(userInformationRequest).optional(),
    })
    .transform((data) => ({
      data: data['data'],
    }));
});
