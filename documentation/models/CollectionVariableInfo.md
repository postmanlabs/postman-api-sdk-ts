# CollectionVariableInfo

Information about a collection-level variable. Collection variables don't support `id`, `description`, or `enabled` fields. Use `disabled` to control whether a variable is active.

**Properties**

| Name     | Type                        | Required | Description                           |
| :------- | :-------------------------- | :------- | :------------------------------------ |
| key      | string                      | ❌       | The variable's key (name).            |
| value    | CollectionVariableInfoValue | ❌       | The key's value.                      |
| disabled | boolean                     | ❌       | If true, the variable is not enabled. |

# CollectionVariableInfoValue

The key's value.
