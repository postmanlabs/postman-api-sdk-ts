# GetApiCollection

**Properties**

| Name     | Type                 | Required | Description                                                                                                                                                                                                                 |
| :------- | :------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| item     | any[]                | ❌       | A list of the collection's contents.                                                                                                                                                                                        |
| info     | GetApiCollectionInfo | ❌       | Information about the collection.                                                                                                                                                                                           |
| auth     | any                  | ❌       | The collection's auth information. For a complete list of values, refer to the **Auth** entry in the [Postman Collection Format documentation](https://schema.postman.com/collection/json/v2.1.0/draft-07/docs/index.html). |
| variable | any[]                | ❌       | A list of the collection's variables.                                                                                                                                                                                       |

# GetApiCollectionInfo

Information about the collection.

**Properties**

| Name        | Type   | Required | Description                       |
| :---------- | :----- | :------- | :-------------------------------- |
| name        | string | ❌       | The collection's name.            |
| schema      | string | ❌       | A URL to the collection's schema. |
| \_postmanId | string | ❌       | The collection's Postman ID.      |
| description | string | ❌       | The collection's description.     |
