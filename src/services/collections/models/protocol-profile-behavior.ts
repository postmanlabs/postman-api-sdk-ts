import { z } from 'zod';
import {
  DisabledSystemHeaders,
  disabledSystemHeaders,
  disabledSystemHeadersRequest,
  disabledSystemHeadersResponse,
} from './disabled-system-headers';

/**
 * Zod schema for the ProtocolProfileBehavior model.
 * Defines the structure and validation rules for this data type.
 * This is the shape used in application code - what developers interact with.
 */
export const protocolProfileBehavior = z.lazy(() => {
  return z.object({
    strictSsl: z.boolean().optional(),
    followRedirects: z.boolean().optional(),
    maxRedirects: z.number().optional(),
    disableBodyPruning: z.boolean().optional(),
    disableUrlEncoding: z.boolean().optional(),
    disabledSystemHeaders: disabledSystemHeaders.optional(),
    insecureHttpParser: z.boolean().optional(),
    followOriginalHttpMethod: z.boolean().optional(),
    followAuthorizationHeader: z.boolean().optional(),
    protocolVersion: z.string().optional(),
    removeRefererHeaderOnRedirect: z.boolean().optional(),
    tlsPreferServerCiphers: z.boolean().optional(),
    tlsDisabledProtocols: z.array(z.string()).optional(),
    tlsCipherSelection: z.array(z.string()).optional(),
  });
});

/**
 * The [settings](https://learning.postman.com/docs/sending-requests/create-requests/request-settings/) used to alter the [Protocol Profile Behavior](https://github.com/postmanlabs/postman-runtime/blob/develop/docs/protocol-profile-behavior.md) of sending a request.
 * @typedef  {ProtocolProfileBehavior} protocolProfileBehavior - The [settings](https://learning.postman.com/docs/sending-requests/create-requests/request-settings/) used to alter the [Protocol Profile Behavior](https://github.com/postmanlabs/postman-runtime/blob/develop/docs/protocol-profile-behavior.md) of sending a request. - The [settings](https://learning.postman.com/docs/sending-requests/create-requests/request-settings/) used to alter the [Protocol Profile Behavior](https://github.com/postmanlabs/postman-runtime/blob/develop/docs/protocol-profile-behavior.md) of sending a request.
 * @property {boolean} - If true, enables certificate verification.
 * @property {boolean} - If true, follow HTTP 3xx responses as redirects.
 * @property {number} - The maximum number of redirects to follow.
 * @property {boolean} - If true, disables request body pruning for the GET, COPY, HEAD, PURGE, and UNLOCK methods.
 * @property {boolean} - If true, disables the percent encoding of auth, path, query, and fragment URL segments.
 * @property {DisabledSystemHeaders} - Disable the system headers which are added implicitly.
 * @property {boolean} - If true, uses an insecure HTTP parser that accepts invalid HTTP headers.
 * @property {boolean} - If true, redirects with the original HTTP method. Redirects with the GET HTTP method by default.
 * @property {boolean} - If true, retains the `authorization` header when a redirect happens to a different hostname.
 * @property {ProtocolVersion} - The HTTP protocol version to use. Supports the `http1`, `http2`, and `auto` values.
 * @property {boolean} - If true, removes the `referer` header when a redirect happens.
 * @property {boolean} - If true, uses the server's cipher suite order instead of the client's during negotiation.
 * @property {string[]} - The SSL and TLS protocol versions to disable during negotiation.
 * @property {string[]} - The order of cipher suites that the SSL server profile uses to establish a secure connection.
 */
export type ProtocolProfileBehavior = z.infer<typeof protocolProfileBehavior>;

/**
 * Zod schema for mapping API responses to the ProtocolProfileBehavior application shape.
 * Handles any property name transformations from the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const protocolProfileBehaviorResponse = z.lazy(() => {
  return z
    .object({
      strictSSL: z.boolean().optional(),
      followRedirects: z.boolean().optional(),
      maxRedirects: z.number().optional(),
      disableBodyPruning: z.boolean().optional(),
      disableUrlEncoding: z.boolean().optional(),
      disabledSystemHeaders: disabledSystemHeadersResponse.optional(),
      insecureHTTPParser: z.boolean().optional(),
      followOriginalHttpMethod: z.boolean().optional(),
      followAuthorizationHeader: z.boolean().optional(),
      protocolVersion: z.string().optional(),
      removeRefererHeaderOnRedirect: z.boolean().optional(),
      tlsPreferServerCiphers: z.boolean().optional(),
      tlsDisabledProtocols: z.array(z.string()).optional(),
      tlsCipherSelection: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      strictSsl: data['strictSSL'],
      followRedirects: data['followRedirects'],
      maxRedirects: data['maxRedirects'],
      disableBodyPruning: data['disableBodyPruning'],
      disableUrlEncoding: data['disableUrlEncoding'],
      disabledSystemHeaders: data['disabledSystemHeaders'],
      insecureHttpParser: data['insecureHTTPParser'],
      followOriginalHttpMethod: data['followOriginalHttpMethod'],
      followAuthorizationHeader: data['followAuthorizationHeader'],
      protocolVersion: data['protocolVersion'],
      removeRefererHeaderOnRedirect: data['removeRefererHeaderOnRedirect'],
      tlsPreferServerCiphers: data['tlsPreferServerCiphers'],
      tlsDisabledProtocols: data['tlsDisabledProtocols'],
      tlsCipherSelection: data['tlsCipherSelection'],
    }));
});

/**
 * Zod schema for mapping the ProtocolProfileBehavior application shape to API requests.
 * Handles any property name transformations required by the API schema.
 * If property names match the API schema exactly, this is identical to the application shape.
 */
export const protocolProfileBehaviorRequest = z.lazy(() => {
  return z
    .object({
      strictSsl: z.boolean().optional(),
      followRedirects: z.boolean().optional(),
      maxRedirects: z.number().optional(),
      disableBodyPruning: z.boolean().optional(),
      disableUrlEncoding: z.boolean().optional(),
      disabledSystemHeaders: disabledSystemHeadersRequest.optional(),
      insecureHttpParser: z.boolean().optional(),
      followOriginalHttpMethod: z.boolean().optional(),
      followAuthorizationHeader: z.boolean().optional(),
      protocolVersion: z.string().optional(),
      removeRefererHeaderOnRedirect: z.boolean().optional(),
      tlsPreferServerCiphers: z.boolean().optional(),
      tlsDisabledProtocols: z.array(z.string()).optional(),
      tlsCipherSelection: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      strictSSL: data['strictSsl'],
      followRedirects: data['followRedirects'],
      maxRedirects: data['maxRedirects'],
      disableBodyPruning: data['disableBodyPruning'],
      disableUrlEncoding: data['disableUrlEncoding'],
      disabledSystemHeaders: data['disabledSystemHeaders'],
      insecureHTTPParser: data['insecureHttpParser'],
      followOriginalHttpMethod: data['followOriginalHttpMethod'],
      followAuthorizationHeader: data['followAuthorizationHeader'],
      protocolVersion: data['protocolVersion'],
      removeRefererHeaderOnRedirect: data['removeRefererHeaderOnRedirect'],
      tlsPreferServerCiphers: data['tlsPreferServerCiphers'],
      tlsDisabledProtocols: data['tlsDisabledProtocols'],
      tlsCipherSelection: data['tlsCipherSelection'],
    }));
});
