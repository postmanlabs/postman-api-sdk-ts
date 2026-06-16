import { z } from 'zod';
import { AuthMethodType2, authMethodType2 } from './auth-method-type-2';
import {
  AuthAttributes,
  authAttributes,
  authAttributesRequest,
  authAttributesResponse,
} from '../../common/auth-attributes';

/**
 * Zod schema for the CollectionAuth model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const collectionAuth = z.lazy(() => {
  return z.object({
    type: authMethodType2,
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
 * The [authorization type supported by Postman](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/).
 * @typedef  {CollectionAuth} collectionAuth - The [authorization type supported by Postman](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/). - The [authorization type supported by Postman](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/).
 * @property {AuthMethodType2} - The authorization type.
 * @property {AuthAttributes[]} - The API key's authentication information.
 * @property {AuthAttributes[]} - The attributes for [AWS Signature](https://learning.postman.com/docs/sending-requests/authorization/aws-signature/) authentication.
 * @property {AuthAttributes[]} - The attributes for [Basic Auth](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/#basic-auth).
 * @property {AuthAttributes[]} - The attributes for [Bearer Token](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/#bearer-token) authentication.
 * @property {AuthAttributes[]} - The attributes for [Digest](https://learning.postman.com/docs/sending-requests/authorization/digest-auth/) access authentication.
 * @property {AuthAttributes[]} - The attributes for [Akamai Edgegrid](https://learning.postman.com/docs/sending-requests/authorization/akamai-edgegrid/) authentication.
 * @property {AuthAttributes[]} - The attributes for [Hawk](https://learning.postman.com/docs/sending-requests/authorization/hawk-authentication/) authentication.
 * @property {AuthAttributes[]} - The attributes for [NTLM](https://learning.postman.com/docs/sending-requests/authorization/ntlm-authentication/) authentication.
 * @property {AuthAttributes[]} - The attributes for [OAuth1](https://learning.postman.com/docs/sending-requests/authorization/oauth-10/) authentication.
 * @property {AuthAttributes[]} - The attributes for [OAuth2](https://learning.postman.com/docs/sending-requests/authorization/oauth-20/) authentication.
 * @property {AuthAttributes[]} - The attributes for JWT (JSON Web Token). Includes the `payload`, `secret`, `algorithm`, `addTokenTo`, and `headerPrefix` properties.
 * @property {AuthAttributes[]} - The attributes for ASAP (Atlassian S2S Authentication Protocol). Includes the `kid`, `aud`, `iss`, `alg`, `privateKey`, and `claims` properties.
 */
export type CollectionAuth = z.infer<typeof collectionAuth>;

/**
 * Zod schema for mapping API responses to the CollectionAuth application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionAuthResponse = z.lazy(() => {
  return z
    .object({
      type: authMethodType2,
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
 * Zod schema for mapping the CollectionAuth application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const collectionAuthRequest = z.lazy(() => {
  return z
    .object({
      type: authMethodType2,
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
