# GenerateSpecFromCollection

**Properties**

| Name   | Type                           | Required | Description                          |
| :----- | :----------------------------- | :------- | :----------------------------------- |
| name   | string                         | ✅       | The API specification's name.        |
| type   | GenerateSpecFromCollectionType | ❌       | The specification's type.            |
| format | Format                         | ❌       | The format of the API specification. |

# GenerateSpecFromCollectionType

The specification's type.

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| OPENAPI_2_0 | string | ✅       | "OPENAPI:2.0" |
| OPENAPI_3_0 | string | ✅       | "OPENAPI:3.0" |
| OPENAPI_3_1 | string | ✅       | "OPENAPI:3.1" |

# Format

The format of the API specification.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| JSON | string | ✅       | "JSON"      |
| YAML | string | ✅       | "YAML"      |
