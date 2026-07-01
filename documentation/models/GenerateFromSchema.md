# GenerateFromSchema

**Properties**

| Name          | Type                            | Required | Description                                                                                                                                                                                                                                                                                                        |
| :------------ | :------------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name          | string                          | ❌       | The collection's name.                                                                                                                                                                                                                                                                                             |
| operationType | GenerateFromSchemaOperationType | ❌       | The `GENERATE_FROM_SCHEMA` method.                                                                                                                                                                                                                                                                                 |
| options       | any                             | ❌       | The advanced creation options for collections and their values. For a complete list of properties and their values, see Postman's [OpenAPI to Postman Collection Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive. |

# GenerateFromSchemaOperationType

The `GENERATE_FROM_SCHEMA` method.

**Properties**

| Name                 | Type   | Required | Description            |
| :------------------- | :----- | :------- | :--------------------- |
| GENERATE_FROM_SCHEMA | string | ✅       | "GENERATE_FROM_SCHEMA" |
