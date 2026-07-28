# SdkRetryOptions

Retry behavior baked into the generated SDK's HTTP client. A power-user option; sensible defaults apply for any field left unset.

**Properties**

| Name               | Type                                          | Required | Description                                                             |
| :----------------- | :-------------------------------------------- | :------- | :---------------------------------------------------------------------- |
| retryDelay         | number                                        | ✅       | The base wait between attempts, in milliseconds.                        |
| enabled            | boolean                                       | ❌       | If true, the generated SDK includes retry behavior.                     |
| maxAttempts        | number                                        | ❌       | The maximum number of attempts to try before giving up.                 |
| maxDelay           | number                                        | ❌       | The maximum wait between attempts, in milliseconds.                     |
| backOffFactor      | number                                        | ❌       | The exponent base used to compute exponential backoff between attempts. |
| retryDelayJitter   | number                                        | ❌       | The maximum random jitter added to wait times, in milliseconds.         |
| httpCodesToRetry   | number[]                                      | ❌       | A list of HTTP status codes that the SDK attempts its retries on.       |
| httpMethodsToRetry | [HttpMethodsToRetry](HttpMethodsToRetry.md)[] | ❌       | A list of the HTTP methods that the SDK attempts its retries on.        |
