# ResponseOriginalRequest2

Information about the collection request.

**Properties**

| Name        | Type                                        | Required | Description                                                                                                                           |
| :---------- | :------------------------------------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| url         | [Url](Url.md)                               | ❌       | Information about the URL.                                                                                                            |
| auth        | [CollectionAuth](CollectionAuth.md)         | ❌       | The [authorization type supported by Postman](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/). |
| method      | string                                      | ❌       | The request's standard HTTP method.                                                                                                   |
| description | string                                      | ❌       | The request's description.                                                                                                            |
| header      | [ResponseHeader2_2](ResponseHeader2_2.md)[] | ❌       | A list of headers.                                                                                                                    |
| body        | CollectionRequestBody2                      | ❌       | Information about the collection's request body.                                                                                      |

# CollectionRequestBody2

Information about the collection's request body.

**Properties**

| Name       | Type                                                                      | Required | Description                                                                             |
| :--------- | :------------------------------------------------------------------------ | :------- | :-------------------------------------------------------------------------------------- |
| mode       | any                                                                       | ❌       | The data associated with the request.                                                   |
| raw        | string                                                                    | ❌       | If the `mode` value is `raw`, the raw content of the request body.                      |
| urlencoded | [CollectionRequestBodyUrlencoded2](CollectionRequestBodyUrlencoded2.md)[] | ❌       | A list of x-www-form-encoded key/value pairs.                                           |
| formdata   | [CollectionRequestBodyFormdata4](CollectionRequestBodyFormdata4.md)[]     | ❌       | If the `mode` value is `formdata`, then a list of form-data key/pair values.            |
| file       | CollectionRequestBodyFile2                                                | ❌       | If the `mode` value is `file`, an object containing the file request information.       |
| graphql    | CollectionRequestBodyGraphql2                                             | ❌       | If the `mode` value is `graphql`, an object containing the GraphQL request information. |
| options    | any                                                                       | ❌       | Additional configurations and options set for various modes.                            |

# CollectionRequestBodyFile2

If the `mode` value is `file`, an object containing the file request information.

**Properties**

| Name | Type   | Required | Description                                                                                                                   |
| :--- | :----- | :------- | :---------------------------------------------------------------------------------------------------------------------------- |
| src  | string | ❌       | The name of the file to upload (not its path). A null value indicates that no file is selected as a part of the request body. |

# CollectionRequestBodyGraphql2

If the `mode` value is `graphql`, an object containing the GraphQL request information.

**Properties**

| Name      | Type   | Required | Description                                  |
| :-------- | :----- | :------- | :------------------------------------------- |
| query     | string | ❌       | The GraphQL query.                           |
| variables | string | ❌       | The GraphQL query variables, in JSON format. |
