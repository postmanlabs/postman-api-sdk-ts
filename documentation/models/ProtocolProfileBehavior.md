# ProtocolProfileBehavior

The [settings](https://learning.postman.com/docs/sending-requests/create-requests/request-settings/) used to alter the [Protocol Profile Behavior](https://github.com/postmanlabs/postman-runtime/blob/develop/docs/protocol-profile-behavior.md) of sending a request.

**Properties**

| Name                          | Type                  | Required | Description                                                                                      |
| :---------------------------- | :-------------------- | :------- | :----------------------------------------------------------------------------------------------- |
| strictSsl                     | boolean               | ❌       | If true, enables certificate verification.                                                       |
| followRedirects               | boolean               | ❌       | If true, follow HTTP 3xx responses as redirects.                                                 |
| maxRedirects                  | number                | ❌       | The maximum number of redirects to follow.                                                       |
| disableBodyPruning            | boolean               | ❌       | If true, disables request body pruning for the GET, COPY, HEAD, PURGE, and UNLOCK methods.       |
| disableUrlEncoding            | boolean               | ❌       | If true, disables the percent encoding of auth, path, query, and fragment URL segments.          |
| disabledSystemHeaders         | DisabledSystemHeaders | ❌       | Disable the system headers which are added implicitly.                                           |
| insecureHttpParser            | boolean               | ❌       | If true, uses an insecure HTTP parser that accepts invalid HTTP headers.                         |
| followOriginalHttpMethod      | boolean               | ❌       | If true, redirects with the original HTTP method. Redirects with the GET HTTP method by default. |
| followAuthorizationHeader     | boolean               | ❌       | If true, retains the `authorization` header when a redirect happens to a different hostname.     |
| protocolVersion               | ProtocolVersion       | ❌       | The HTTP protocol version to use. Supports the `http1`, `http2`, and `auto` values.              |
| removeRefererHeaderOnRedirect | boolean               | ❌       | If true, removes the `referer` header when a redirect happens.                                   |
| tlsPreferServerCiphers        | boolean               | ❌       | If true, uses the server's cipher suite order instead of the client's during negotiation.        |
| tlsDisabledProtocols          | string[]              | ❌       | The SSL and TLS protocol versions to disable during negotiation.                                 |
| tlsCipherSelection            | string[]              | ❌       | The order of cipher suites that the SSL server profile uses to establish a secure connection.    |

# DisabledSystemHeaders

Disable the system headers which are added implicitly.

**Properties**

| Name           | Type    | Required | Description |
| :------------- | :------ | :------- | :---------- |
| cacheControl   | boolean | ❌       |             |
| postmanToken   | boolean | ❌       |             |
| contentType    | boolean | ❌       |             |
| contentLength  | boolean | ❌       |             |
| acceptEncoding | boolean | ❌       |             |
| connection     | boolean | ❌       |             |
| host           | boolean | ❌       |             |

# ProtocolVersion

The HTTP protocol version to use. Supports the `http1`, `http2`, and `auto` values.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| HTTP1 | string | ✅       | "http1"     |
| HTTP2 | string | ✅       | "http2"     |
| AUTO  | string | ✅       | "auto"      |
