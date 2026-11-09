# MockCallLogRequestData

The server response's request information.

**Properties**

| Name    | Type                                                                | Required | Description                     |
| :------ | :------------------------------------------------------------------ | :------- | :------------------------------ |
| method  | string                                                              | ❌       | The request method.             |
| path    | string                                                              | ❌       | The request's path.             |
| headers | [MockServerResponseHeadersData](MockServerResponseHeadersData.md)[] | ❌       | The request's headers.          |
| body    | [MockCallLogRequestBodyData](MockCallLogRequestBodyData.md)         | ❌       | The request's body information. |
