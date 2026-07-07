# JsonStringified

**Properties**

| Name    | Type                                                      | Required | Description                                                                                                                                                                                                                                                      |
| :------ | :-------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type    | JsonStringifiedType                                       | ✅       | The `string` type value.                                                                                                                                                                                                                                         |
| input   | string                                                    | ✅       | The stringified OpenAPI definition.                                                                                                                                                                                                                              |
| options | [GenerateCollectionOptions](GenerateCollectionOptions.md) | ❌       | The advanced creation options and their values. For more details, see Postman's [OpenAPI to Postman Collection Converter OPTIONS documentation](https://github.com/postmanlabs/openapi-to-postman/blob/develop/OPTIONS.md). These properties are case-sensitive. |

# JsonStringifiedType

The `string` type value.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| STRING\_ | string | ✅       | "string"    |
