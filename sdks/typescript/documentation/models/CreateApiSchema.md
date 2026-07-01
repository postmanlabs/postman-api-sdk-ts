# CreateApiSchema

Information about the API schema.

**Properties**

| Name  | Type                                              | Required | Description                                    |
| :---- | :------------------------------------------------ | :------- | :--------------------------------------------- |
| type  | CreateApiSchemaType                               | ✅       | The schema's type.                             |
| files | [CreateApiSchemaFiles](CreateApiSchemaFiles.md)[] | ✅       | The list of files that are part of the schema. |

# CreateApiSchemaType

The schema's type.

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| PROTO_2     | string | ✅       | "proto:2"     |
| PROTO_3     | string | ✅       | "proto:3"     |
| GRAPHQL     | string | ✅       | "graphql"     |
| OPENAPI_3_1 | string | ✅       | "openapi:3_1" |
| OPENAPI_3   | string | ✅       | "openapi:3"   |
| OPENAPI_2   | string | ✅       | "openapi:2"   |
| OPENAPI_1   | string | ✅       | "openapi:1"   |
| RAML_1      | string | ✅       | "raml:1"      |
| RAML_0_8    | string | ✅       | "raml:0_8"    |
| WSDL_2      | string | ✅       | "wsdl:2"      |
| WSDL_1      | string | ✅       | "wsdl:1"      |
| ASYNCAPI_2  | string | ✅       | "asyncapi:2"  |
