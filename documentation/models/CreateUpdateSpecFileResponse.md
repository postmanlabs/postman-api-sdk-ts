# CreateUpdateSpecFileResponse

Information about the API specification file.

**Properties**

| Name      | Type                             | Required | Description                                                                                                                                                                                                                                                                 |
| :-------- | :------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| createdAt | string                           | ❌       | The date and time at which the file was created.                                                                                                                                                                                                                            |
| createdBy | number                           | ❌       | The user ID of the user that created the file.                                                                                                                                                                                                                              |
| id        | string                           | ❌       | The file's ID.                                                                                                                                                                                                                                                              |
| path      | string                           | ❌       | The file's path.                                                                                                                                                                                                                                                            |
| updatedAt | string                           | ❌       | The date and time at which the file was updated.                                                                                                                                                                                                                            |
| updatedBy | number                           | ❌       | The ID of the user who updated the file.                                                                                                                                                                                                                                    |
| type      | CreateUpdateSpecFileResponseType | ❌       | The type of file: - `ROOT` — The file containing the full OpenAPI structure. This serves as the entry point for the API spec and references other (`DEFAULT`) spec files. Multi-file specs can only have one root file. - `DEFAULT` — A file referenced by the `ROOT` file. |

# CreateUpdateSpecFileResponseType

The type of file: - `ROOT` — The file containing the full OpenAPI structure. This serves as the entry point for the API spec and references other (`DEFAULT`) spec files. Multi-file specs can only have one root file. - `DEFAULT` — A file referenced by the `ROOT` file.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| DEFAULT\_ | string | ✅       | "DEFAULT"   |
| ROOT      | string | ✅       | "ROOT"      |
