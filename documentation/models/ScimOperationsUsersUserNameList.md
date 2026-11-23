# ScimOperationsUsersUserNameList

**Properties**

| Name  | Type                                | Required | Description                                            |
| :---- | :---------------------------------- | :------- | :----------------------------------------------------- |
| op    | ScimOperationsUsersUserNameListOp   | ❌       | The operation to perform. Accepts the `replace` value. |
| path  | ScimOperationsUsersUserNameListPath | ❌       | The operation's path. Accepts the `userName` value.    |
| value | string                              | ❌       | The user's email address.                              |

# ScimOperationsUsersUserNameListOp

The operation to perform. Accepts the `replace` value.

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| REPLACE | string | ✅       | "replace"   |

# ScimOperationsUsersUserNameListPath

The operation's path. Accepts the `userName` value.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| USER_NAME | string | ✅       | "userName"  |
