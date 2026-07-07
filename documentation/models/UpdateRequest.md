# UpdateRequest

The request properties to update. For a complete list of properties, refer to the **Request** property in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v1.0.0/draft-07/collection.json).

**Properties**

| Name            | Type                                                | Required | Description                                                                          |
| :-------------- | :-------------------------------------------------- | :------- | :----------------------------------------------------------------------------------- |
| name            | string                                              | ❌       | The request's name.                                                                  |
| description     | string                                              | ❌       | The request's description.                                                           |
| method          | [RequestMethod](RequestMethod.md)                   | ❌       | The request's HTTP method.                                                           |
| url             | string                                              | ❌       | The request's URL.                                                                   |
| headerData      | [RequestHeaderData](RequestHeaderData.md)[]         | ❌       | The request's headers.                                                               |
| queryParams     | [RequestQueryParams](RequestQueryParams.md)[]       | ❌       | The request's query parameters.                                                      |
| dataMode        | UpdateRequestDataMode                               | ❌       | The request body's data mode.                                                        |
| data            | [RequestData](RequestData.md)[]                     | ❌       | The request body's form data.                                                        |
| rawModeData     | string                                              | ❌       | The request body's raw mode data.                                                    |
| graphqlModeData | [RequestGraphqlModeData](RequestGraphqlModeData.md) | ❌       | The request body's GraphQL mode data.                                                |
| dataOptions     | [RequestDataOptions](RequestDataOptions.md)         | ❌       | Additional configurations and options set for the request body's various data modes. |
| auth            | [RequestAuth](RequestAuth.md)                       | ❌       | The request's authentication information.                                            |
| events          | [RequestEvents](RequestEvents.md)[]                 | ❌       | A list of scripts configured to run when specific events occur.                      |

# UpdateRequestDataMode

The request body's data mode.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| RAW        | string | ✅       | "raw"        |
| URLENCODED | string | ✅       | "urlencoded" |
| FORMDATA   | string | ✅       | "formdata"   |
| BINARY     | string | ✅       | "binary"     |
| GRAPHQL    | string | ✅       | "graphql"    |
