# CollectionVariable

Information about the variable.

**Properties**

| Name        | Type               | Required | Description                                                                      |
| :---------- | :----------------- | :------- | :------------------------------------------------------------------------------- |
| id          | string             | ❌       | The variable's ID. Doesn't apply to collection-level variables.                  |
| key         | string             | ❌       | The variable's key (name).                                                       |
| description | string             | ❌       | The variable's description.                                                      |
| value       | VariableInfoValue2 | ❌       | The key's value.                                                                 |
| disabled    | boolean            | ❌       | If true, the variable is not enabled. Doesn't apply to path parameter variables. |

# VariableInfoValue2

The key's value.
