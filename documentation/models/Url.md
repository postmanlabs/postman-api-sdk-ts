# Url

Information about the URL.

# Url2

**Properties**

| Name     | Type                | Required | Description                                                                                            |
| :------- | :------------------ | :------- | :----------------------------------------------------------------------------------------------------- |
| raw      | string              | ❌       | The request's raw URL.                                                                                 |
| protocol | string              | ❌       | The request protocol.                                                                                  |
| host     | string[]            | ❌       | The host's URL.                                                                                        |
| path     | string[]            | ❌       | A list of the URL's path components.                                                                   |
| port     | string              | ❌       | The URL's port number. An empty value indicates port `80` (http) or `443` (https).                     |
| query    | [Query](Query.md)[] | ❌       | A list of query parameters. These are the query string parts of the URL, parsed as separate variables. |
