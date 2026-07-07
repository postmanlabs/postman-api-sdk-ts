# GetApiSchema

# GetSchema

Information about the schema.

**Properties**

| Name      | Type           | Required | Description                                                                              |
| :-------- | :------------- | :------- | :--------------------------------------------------------------------------------------- |
| id        | string         | ❌       | The schema's ID.                                                                         |
| type      | string         | ❌       | The schema's type.                                                                       |
| files     | GetSchemaFiles | ❌       | Information about the schema's files. The response is paginated and limited to one page. |
| createdAt | string         | ❌       | The date and time at which the schema was created.                                       |
| createdBy | string         | ❌       | The user ID of the user that created the schema.                                         |
| updatedAt | string         | ❌       | The date and time at which the schema was last updated.                                  |
| updatedBy | string         | ❌       | The user ID of the user that last updated the schema.                                    |

# GetSchemaFiles

Information about the schema's files. The response is paginated and limited to one page.

**Properties**

| Name | Type              | Required | Description                                   |
| :--- | :---------------- | :------- | :-------------------------------------------- |
| data | [Data](Data.md)[] | ❌       | A list of the schema files.                   |
| meta | FilesMeta         | ❌       | The response's non-standard meta information. |

# FilesMeta

The response's non-standard meta information.

**Properties**

| Name     | Type   | Required | Description                    |
| :------- | :----- | :------- | :----------------------------- |
| nextPath | string | ❌       | The URL path to the next file. |

# GetBundledSchema

Information about the schema.

**Properties**

| Name      | Type   | Required | Description                                             |
| :-------- | :----- | :------- | :------------------------------------------------------ |
| id        | string | ❌       | The schema's ID.                                        |
| type      | string | ❌       | The schema's type.                                      |
| createdBy | string | ❌       | The user ID of the user that created the schema.        |
| updatedBy | string | ❌       | The user ID of the user that last updated the schema.   |
| createdAt | string | ❌       | The date and time at which the schema was created.      |
| updatedAt | string | ❌       | The date and time at which the schema was last updated. |
| content   | string | ❌       | The schema file, in a bundled format.                   |
