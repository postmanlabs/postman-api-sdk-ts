# SchemaValidationRequestBody

**Properties**

| Name   | Type                              | Required | Description                     |
| :----- | :-------------------------------- | :------- | :------------------------------ |
| schema | SchemaValidationRequestBodySchema | ❌       | The API definition to validate. |

# SchemaValidationRequestBodySchema

The API definition to validate.

**Properties**

| Name     | Type           | Required | Description                     |
| :------- | :------------- | :------- | :------------------------------ |
| language | SchemaLanguage | ✅       | The definition format.          |
| schema   | string         | ✅       | The stringified API definition. |
| type     | SchemaType     | ✅       | The definition type.            |

# SchemaLanguage

The definition format.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| JSON | string | ✅       | "json"      |
| YAML | string | ✅       | "yaml"      |

# SchemaType

The definition type.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| OPENAPI3 | string | ✅       | "openapi3"  |
| OPENAPI2 | string | ✅       | "openapi2"  |
