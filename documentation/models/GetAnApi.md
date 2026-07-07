# GetAnApi

# ApiData

**Properties**

| Name        | Type   | Required | Description                                      |
| :---------- | :----- | :------- | :----------------------------------------------- |
| id          | string | ❌       | The API's ID.                                    |
| name        | string | ❌       | The API's name.                                  |
| summary     | string | ❌       | The API's short summary.                         |
| createdAt   | string | ❌       | The date and time at which the API was created.  |
| createdBy   | number | ❌       | The Postman ID of the user that created the API. |
| updatedAt   | string | ❌       | The date and time at which the API was updated.  |
| updatedBy   | number | ❌       | The Postman ID of the user that updated the API. |
| description | string | ❌       | The API's description.                           |

# ExtendedApiData

**Properties**

| Name        | Type                                                          | Required | Description                                             |
| :---------- | :------------------------------------------------------------ | :------- | :------------------------------------------------------ |
| id          | string                                                        | ❌       | The API's ID.                                           |
| name        | string                                                        | ❌       | The API's name.                                         |
| summary     | string                                                        | ❌       | The API's short summary.                                |
| createdAt   | string                                                        | ❌       | The date and time at which the API was created.         |
| createdBy   | number                                                        | ❌       | The Postman ID of the user that created the API.        |
| updatedAt   | string                                                        | ❌       | The date and time at which the API was updated.         |
| updatedBy   | number                                                        | ❌       | The Postman ID of the user that updated the API.        |
| description | string                                                        | ❌       | The API's description.                                  |
| gitInfo     | GitRepoDataSchema                                             | ❌       | Information about the API's Git repository integration. |
| schemas     | [ExtendedApiDataSchemas](ExtendedApiDataSchemas.md)[]         | ❌       | The API's schemas.                                      |
| versions    | [Versions](Versions.md)[]                                     | ❌       | The API's versions.                                     |
| collections | [ExtendedApiDataCollections](ExtendedApiDataCollections.md)[] | ❌       | The API's collections.                                  |

# GitRepoDataSchema

Information about the API's Git repository integration.

**Properties**

| Name             | Type   | Required | Description                                                 |
| :--------------- | :----- | :------- | :---------------------------------------------------------- |
| domain           | string | ❌       | The domain at which the Git repository is hosted.           |
| repository       | string | ❌       | The repository's name.                                      |
| organization     | string | ❌       | The organization that owns the repository.                  |
| schemaFolder     | string | ❌       | The API definition's repository folder location.            |
| collectionFolder | string | ❌       | The API definition's collection repository folder location. |
