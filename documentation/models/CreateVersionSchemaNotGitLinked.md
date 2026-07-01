# CreateVersionSchemaNotGitLinked

Information about the API version.

**Properties**

| Name         | Type                                                                                          | Required | Description                                                              |
| :----------- | :-------------------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------- |
| name         | string                                                                                        | ✅       | The version's name.                                                      |
| schemas      | [CreateVersionSchemaNotGitLinkedSchemas](CreateVersionSchemaNotGitLinkedSchemas.md)[]         | ✅       | A list of the version's schemas.                                         |
| collections  | [CreateVersionSchemaNotGitLinkedCollections](CreateVersionSchemaNotGitLinkedCollections.md)[] | ✅       | A list of the version's collections.                                     |
| releaseNotes | string                                                                                        | ❌       | Information about the API version release. For example, changelog notes. |
