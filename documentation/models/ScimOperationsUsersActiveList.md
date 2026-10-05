# ScimOperationsUsersActiveList

**Properties**

| Name  | Type                               | Required | Description                      |
| :---- | :--------------------------------- | :------- | :------------------------------- |
| op    | ScimOperationsUsersActiveListOp    | ❌       | The operation to perform.        |
| value | ScimOperationsUsersActiveListValue | ❌       | The performed operation's value. |

# ScimOperationsUsersActiveListOp

The operation to perform.

**Properties**

| Name    | Type   | Required | Description |
| :------ | :----- | :------- | :---------- |
| REPLACE | string | ✅       | "replace"   |

# ScimOperationsUsersActiveListValue

The performed operation's value.

**Properties**

| Name   | Type    | Required | Description                                                                                                                                                                                                                                                  |
| :----- | :------ | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| active | boolean | ❌       | Sets the user's `active` state: - `true` — Activates the user. This lets them authenticate in to your Postman team. - `false` — Removes the user from your Postman team and deactivates the account. This blocks the user from authenticating in to Postman. |
