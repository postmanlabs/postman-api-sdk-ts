# GetCollectionUpdateStatus

**Properties**

| Name   | Type                            | Required | Description                |
| :----- | :------------------------------ | :------- | :------------------------- |
| id     | string                          | ❌       | The task's ID.             |
| status | GetCollectionUpdateStatusStatus | ❌       | The task's current status. |

# GetCollectionUpdateStatusStatus

The task's current status.

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| SUCCESSFUL  | string | ✅       | "successful"  |
| FAILED      | string | ✅       | "failed"      |
| IN_PROGRESS | string | ✅       | "in-progress" |
