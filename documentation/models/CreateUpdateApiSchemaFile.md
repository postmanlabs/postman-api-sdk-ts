# CreateUpdateApiSchemaFile

Information about schema file.

**Properties**

| Name    | Type                          | Required | Description                               |
| :------ | :---------------------------- | :------- | :---------------------------------------- |
| name    | string                        | ❌       | The schema file's name.                   |
| root    | CreateUpdateApiSchemaFileRoot | ❌       | Information about the schema's root file. |
| content | string                        | ❌       | The schema file's stringified contents.   |

# CreateUpdateApiSchemaFileRoot

Information about the schema's root file.

**Properties**

| Name    | Type    | Required | Description                                                                                           |
| :------ | :------ | :------- | :---------------------------------------------------------------------------------------------------- |
| enabled | boolean | ❌       | If true, tag the file as the root file. You can only update the root tag for protobuf specifications. |
