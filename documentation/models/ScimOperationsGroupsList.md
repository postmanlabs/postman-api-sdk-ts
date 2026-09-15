# ScimOperationsGroupsList

**Properties**

| Name  | Type                          | Required | Description                                                                 |
| :---- | :---------------------------- | :------- | :-------------------------------------------------------------------------- |
| op    | ScimOperationsGroupsListOp    | ❌       | The operation to perform.                                                   |
| path  | string                        | ❌       | The operation's path. Include this value when you update a group's members. |
| value | ScimOperationsGroupsListValue | ❌       | The performed operation's value.                                            |

# ScimOperationsGroupsListOp

The operation to perform.

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| REPLACE | string | ✅       | "replace"   |
| REMOVE  | string | ✅       | "remove"    |
| ADD     | string | ✅       | "add"       |

# ScimOperationsGroupsListValue

The performed operation's value.

**Properties**

| Name        | Type   | Required | Description       |
| :---------- | :----- | :------- | :---------------- |
| id          | string | ❌       | The group's ID.   |
| displayName | string | ❌       | The group's name. |
