# AuthAttributes

Information about the supported Postman [authorization type](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/).

**Properties**

| Name  | Type                | Required | Description                  |
| :---- | :------------------ | :------- | :--------------------------- |
| key   | string              | ✅       | The auth method's key value. |
| value | AuthAttributesValue | ❌       | The key's value.             |
| type  | AuthAttributesType  | ❌       | The value's type.            |

# AuthAttributesValue

The key's value.

# AuthAttributesType

The value's type.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| STRING\_  | string | ✅       | "string"    |
| BOOLEAN\_ | string | ✅       | "boolean"   |
| NUMBER\_  | string | ✅       | "number"    |
| ARRAY     | string | ✅       | "array"     |
| OBJECT    | string | ✅       | "object"    |
| ANY\_     | string | ✅       | "any"       |
