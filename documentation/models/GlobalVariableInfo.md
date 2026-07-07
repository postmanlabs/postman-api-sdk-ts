# GlobalVariableInfo

Information about the global variable.

**Properties**

| Name        | Type                   | Required | Description                                                                                           |
| :---------- | :--------------------- | :------- | :---------------------------------------------------------------------------------------------------- |
| key         | string                 | ❌       | The variable's name.                                                                                  |
| type        | GlobalVariableInfoType | ❌       | The [type](https://learning.postman.com/docs/sending-requests/variables/#variable-types) of variable. |
| value       | string                 | ❌       | The variable's value.                                                                                 |
| enabled     | boolean                | ❌       | If true, the variable is enabled.                                                                     |
| description | string                 | ❌       | The variable's description.                                                                           |

# GlobalVariableInfoType

The [type](https://learning.postman.com/docs/sending-requests/variables/#variable-types) of variable.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| DEFAULT\_ | string | ✅       | "default"   |
| SECRET    | string | ✅       | "secret"    |
