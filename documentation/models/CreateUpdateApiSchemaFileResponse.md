# CreateUpdateApiSchemaFileResponse

Information about the schema file.

**Properties**

| Name      | Type                                  | Required | Description                                           |
| :-------- | :------------------------------------ | :------- | :---------------------------------------------------- |
| createdBy | string                                | ❌       | The user ID of the user that created the file.        |
| createdAt | string                                | ❌       | The date and time at which the file was created.      |
| root      | CreateUpdateApiSchemaFileResponseRoot | ❌       | Information about the schema's root file.             |
| name      | string                                | ❌       | The schema file's name.                               |
| path      | string                                | ❌       | The file system path to the schema file.              |
| updatedBy | string                                | ❌       | The user ID of the user that last updated the file.   |
| id        | string                                | ❌       | The schema file's ID.                                 |
| updatedAt | string                                | ❌       | The date and time at which the file was last updated. |

# CreateUpdateApiSchemaFileResponseRoot

Information about the schema's root file.

**Properties**

| Name    | Type    | Required | Description                                      |
| :------ | :------ | :------- | :----------------------------------------------- |
| enabled | boolean | ❌       | If true, the file is the schema's the root file. |
