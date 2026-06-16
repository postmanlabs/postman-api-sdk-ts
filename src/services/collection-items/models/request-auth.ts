import { z } from 'zod';
import { RequestAuthType, requestAuthType } from './request-auth-type';
import {
  AuthAttributes,
  authAttributes,
  authAttributesRequest,
  authAttributesResponse,
} from '../../common/auth-attributes';

/**
 * Zod schema for the RequestAuth model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const requestAuth = z.lazy(() => {
  return z.object({
    type: requestAuthType,
    apikey: z.array(authAttributes).optional(),
    awsv4: z.array(authAttributes).optional(),
    basic: z.array(authAttributes).optional(),
    bearer: z.array(authAttributes).optional(),
    digest: z.array(authAttributes).optional(),
    edgegrid: z.array(authAttributes).optional(),
    hawk: z.array(authAttributes).optional(),
    ntlm: z.array(authAttributes).optional(),
    oauth1: z.array(authAttributes).optional(),
    oauth2: z.array(authAttributes).optional(),
    jwt: z.array(authAttributes).optional(),
    asap: z.array(authAttributes).optional(),
  });
});

/**
 * The request's authentication information.
 * @typedef  {RequestAuth} requestAuth - The request's authentication information. - The request's authentication information.
 * @property {RequestAuthType} - The authorization type.
 * @property {AuthAttributes[]} - The API key's authentication information.
 * @property {AuthAttributes[]} - The attributes for AWS Signature authentication.
 * @property {AuthAttributes[]} - The attributes for Basic Auth.
 * @property {AuthAttributes[]} - The attributes for Bearer Token authentication.
 * @property {AuthAttributes[]} - The attributes for Digest access authentication.
 * @property {AuthAttributes[]} - The attributes for Akamai Edgegrid authentication.
 * @property {AuthAttributes[]} - The attributes for Hawk authentication.
 * @property {AuthAttributes[]} - The attributes for NTLM authentication.
 * @property {AuthAttributes[]} - The attributes for OAuth1 authentication.
 * @property {AuthAttributes[]} - The attributes for OAuth2 authentication.
 * @property {AuthAttributes[]} - The attributes for JWT authentication.
 * @property {AuthAttributes[]} - The attributes for ASAP authentication.
 */
export type RequestAuth = z.infer<typeof requestAuth>;

/**
 * Zod schema for mapping API responses to the RequestAuth application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestAuthResponse = z.lazy(() => {
  return z
    .object({
      type: requestAuthType,
      apikey: z.array(authAttributesResponse).optional(),
      awsv4: z.array(authAttributesResponse).optional(),
      basic: z.array(authAttributesResponse).optional(),
      bearer: z.array(authAttributesResponse).optional(),
      digest: z.array(authAttributesResponse).optional(),
      edgegrid: z.array(authAttributesResponse).optional(),
      hawk: z.array(authAttributesResponse).optional(),
      ntlm: z.array(authAttributesResponse).optional(),
      oauth1: z.array(authAttributesResponse).optional(),
      oauth2: z.array(authAttributesResponse).optional(),
      jwt: z.array(authAttributesResponse).optional(),
      asap: z.array(authAttributesResponse).optional(),
    })
    .transform((data) => ({
      type: data['type'],
      apikey: data['apikey'],
      awsv4: data['awsv4'],
      basic: data['basic'],
      bearer: data['bearer'],
      digest: data['digest'],
      edgegrid: data['edgegrid'],
      hawk: data['hawk'],
      ntlm: data['ntlm'],
      oauth1: data['oauth1'],
      oauth2: data['oauth2'],
      jwt: data['jwt'],
      asap: data['asap'],
    }));
});

/**
 * Zod schema for mapping the RequestAuth application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const requestAuthRequest = z.lazy(() => {
  return z
    .object({
      type: requestAuthType,
      apikey: z.array(authAttributesRequest).optional(),
      awsv4: z.array(authAttributesRequest).optional(),
      basic: z.array(authAttributesRequest).optional(),
      bearer: z.array(authAttributesRequest).optional(),
      digest: z.array(authAttributesRequest).optional(),
      edgegrid: z.array(authAttributesRequest).optional(),
      hawk: z.array(authAttributesRequest).optional(),
      ntlm: z.array(authAttributesRequest).optional(),
      oauth1: z.array(authAttributesRequest).optional(),
      oauth2: z.array(authAttributesRequest).optional(),
      jwt: z.array(authAttributesRequest).optional(),
      asap: z.array(authAttributesRequest).optional(),
    })
    .transform((data) => ({
      type: data['type'],
      apikey: data['apikey'],
      awsv4: data['awsv4'],
      basic: data['basic'],
      bearer: data['bearer'],
      digest: data['digest'],
      edgegrid: data['edgegrid'],
      hawk: data['hawk'],
      ntlm: data['ntlm'],
      oauth1: data['oauth1'],
      oauth2: data['oauth2'],
      jwt: data['jwt'],
      asap: data['asap'],
    }));
});
