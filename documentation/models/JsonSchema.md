# JsonSchema

**Properties**

| Name    | Type                                                      | Required | Description                                                                                                                                                                                                                                                      |
| :------ | :-------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type    | JsonSchemaType                                            | ✅       | The `json` type value.                                                                                                                                                                                                                                           |
| input   | any                                                       | ✅       | An object that contains a valid JSON OpenAPI definition. For more information, read the [OpenAPI documentation](https://swagger.io/docs/specification/basic-structure/).                                                                                         |
| options | [GenerateCollectionOptions](GenerateCollectionOptions.md) | ❌       | The advanced creation options and their values. For more details, see Postman's [OpenAPI to Postman Collection Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive. |

# JsonSchemaType

The `json` type value.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| JSON | string | ✅       | "json"      |
