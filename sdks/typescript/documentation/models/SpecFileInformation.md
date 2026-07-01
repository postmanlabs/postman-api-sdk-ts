# SpecFileInformation

Information about the API specification file.

**Properties**

| Name      | Type                    | Required | Description                                                                                                                                                              |
| :-------- | :---------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id        | string                  | ❌       | The file's ID.                                                                                                                                                           |
| path      | string                  | ❌       | The file's path.                                                                                                                                                         |
| name      | string                  | ❌       | The file's name.                                                                                                                                                         |
| createdBy | number                  | ❌       | The user ID of the user that created the file.                                                                                                                           |
| updatedBy | number                  | ❌       | The ID of the user who updated the file.                                                                                                                                 |
| createdAt | string                  | ❌       | The date and time at which the file was created.                                                                                                                         |
| updatedAt | string                  | ❌       | The date and time at which the file was updated.                                                                                                                         |
| type      | SpecFileInformationType | ❌       | The type of file: - `ROOT` — A file containing the full OpenAPI structure and references other (DEFAULT) spec files. - `DEFAULT` — A file referenced by the `ROOT` file. |

# SpecFileInformationType

The type of file: - `ROOT` — A file containing the full OpenAPI structure and references other (DEFAULT) spec files. - `DEFAULT` — A file referenced by the `ROOT` file.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| ROOT      | string | ✅       | "ROOT"      |
| DEFAULT\_ | string | ✅       | "DEFAULT"   |
