# CreateCollectionResponseRequest

Information about the response. For a complete list of properties, refer to the **Response** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). **Note:** It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a response with a blank name.

**Properties**

| Name          | Type                                        | Required | Description                                                                                                                                                                                        |
| :------------ | :------------------------------------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name          | string                                      | ❌       | The response's name. It is recommended that you pass the `name` property in the request body. If you do not, the system uses a null value. As a result, this creates a response with a blank name. |
| description   | string                                      | ❌       | The response's description.                                                                                                                                                                        |
| url           | string                                      | ❌       | The associated request's URL.                                                                                                                                                                      |
| method        | [RequestMethod](RequestMethod.md)           | ❌       | The request's HTTP method.                                                                                                                                                                         |
| headers       | [ResponseHeader2_2](ResponseHeader2_2.md)[] | ❌       | A list of headers.                                                                                                                                                                                 |
| dataMode      | CollectionResponseCreatedDataMode           | ❌       | The associated request body's data mode.                                                                                                                                                           |
| rawModeData   | string                                      | ❌       | The associated request body's raw mode data.                                                                                                                                                       |
| dataOptions   | [RequestDataOptions](RequestDataOptions.md) | ❌       | Additional configurations and options set for the request body's various data modes.                                                                                                               |
| responseCode  | CollectionResponseCreatedResponseCode       | ❌       | The response's HTTP response code information.                                                                                                                                                     |
| status        | string                                      | ❌       | The response's HTTP status text.                                                                                                                                                                   |
| time          | string                                      | ❌       | The time taken by the request to complete, in milliseconds.                                                                                                                                        |
| cookies       | string                                      | ❌       | The response's cookie data.                                                                                                                                                                        |
| mime          | string                                      | ❌       | The response's MIME type.                                                                                                                                                                          |
| text          | string                                      | ❌       | The raw text of the response body.                                                                                                                                                                 |
| language      | string                                      | ❌       | The response body's language type.                                                                                                                                                                 |
| rawDataType   | string                                      | ❌       | The response's raw data type.                                                                                                                                                                      |
| requestObject | string                                      | ❌       | A JSON-stringified representation of the associated request.                                                                                                                                       |

# CollectionResponseCreatedDataMode

The associated request body's data mode.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| RAW        | string | ✅       | "raw"        |
| URLENCODED | string | ✅       | "urlencoded" |
| FORMDATA   | string | ✅       | "formdata"   |
| BINARY     | string | ✅       | "binary"     |
| GRAPHQL    | string | ✅       | "graphql"    |

# CollectionResponseCreatedResponseCode

The response's HTTP response code information.

**Properties**

| Name | Type   | Required | Description                               |
| :--- | :----- | :------- | :---------------------------------------- |
| code | number | ❌       | The response's HTTP response status code. |
| name | string | ❌       | The name of the status code.              |
