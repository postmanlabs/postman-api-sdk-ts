# ApiVersion

**Properties**

| Name    | Type    | Required | Description                        |
| :------ | :------ | :------- | :--------------------------------- |
| version | Version | ❌       | Information about the API version. |

# Version

Information about the API version.

**Properties**

| Name         | Type                                          | Required | Description                                              |
| :----------- | :-------------------------------------------- | :------- | :------------------------------------------------------- |
| id           | string                                        | ❌       | The version's ID.                                        |
| name         | string                                        | ❌       | The version's name.                                      |
| createdAt    | string                                        | ❌       | The date and time at which the version was created.      |
| updatedAt    | string                                        | ❌       | The date and time at which the version was last updated. |
| releaseNotes | string                                        | ❌       | The version's release notes.                             |
| schemas      | [VersionSchemas](VersionSchemas.md)[]         | ❌       | A list of the API's schemas.                             |
| collections  | [VersionCollections](VersionCollections.md)[] | ❌       | A list of the API's collections.                         |
