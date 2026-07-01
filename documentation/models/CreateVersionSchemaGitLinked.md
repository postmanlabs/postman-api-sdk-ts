# CreateVersionSchemaGitLinked

Information about the API version.

**Properties**

| Name         | Type                                                                                    | Required | Description                                                              |
| :----------- | :-------------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------- |
| name         | string                                                                                  | ✅       | The version's name.                                                      |
| branch       | string                                                                                  | ✅       | The branch ID.                                                           |
| schemas      | [CreateVersionSchemaGitLinkedSchemas](CreateVersionSchemaGitLinkedSchemas.md)[]         | ✅       | A list of the version's schemas.                                         |
| collections  | [CreateVersionSchemaGitLinkedCollections](CreateVersionSchemaGitLinkedCollections.md)[] | ✅       | A list of the version's collections.                                     |
| releaseNotes | string                                                                                  | ❌       | Information about the API version release. For example, changelog notes. |
