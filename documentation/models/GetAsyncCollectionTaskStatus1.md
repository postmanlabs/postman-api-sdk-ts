# GetAsyncCollectionTaskStatus1

**Properties**

| Name    | Type                      | Required | Description                                   |
| :------ | :------------------------ | :------- | :-------------------------------------------- |
| meta    | GetAsyncTaskStatusMeta2   | ❌       | The response's non-standard meta information. |
| details | [Details](Details.md)     | ❌       | Information about the task's resources.       |
| status  | GetAsyncTaskStatusStatus2 | ❌       | The task's current status.                    |

# GetAsyncTaskStatusMeta2

The response's non-standard meta information.

**Properties**

| Name   | Type                         | Required | Description                                               |
| :----- | :--------------------------- | :------- | :-------------------------------------------------------- |
| action | string                       | ❌       | The task's action.                                        |
| model  | GetAsyncTaskStatusMetaModel2 | ❌       | The model for which the task is performing the operation. |

# GetAsyncTaskStatusMetaModel2

The model for which the task is performing the operation.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| COLLECTION | string | ✅       | "collection" |
| SPEC       | string | ✅       | "spec"       |

# GetAsyncTaskStatusStatus2

The task's current status.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| PENDING   | string | ✅       | "pending"   |
| FAILED    | string | ✅       | "failed"    |
| COMPLETED | string | ✅       | "completed" |
