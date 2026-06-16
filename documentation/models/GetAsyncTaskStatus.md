# GetAsyncTaskStatus

**Properties**

| Name    | Type                              | Required | Description                                   |
| :------ | :-------------------------------- | :------- | :-------------------------------------------- |
| meta    | GetAsyncTaskStatusMeta            | ❌       | The response's non-standard meta information. |
| details | [TaskResources](TaskResources.md) | ❌       | Information about the task's resources.       |
| status  | GetAsyncTaskStatusStatus          | ❌       | The task's current status.                    |

# GetAsyncTaskStatusMeta

The response's non-standard meta information.

**Properties**

| Name   | Type                        | Required | Description                                               |
| :----- | :-------------------------- | :------- | :-------------------------------------------------------- |
| action | string                      | ❌       | The task's action.                                        |
| model  | GetAsyncTaskStatusMetaModel | ❌       | The model for which the task is performing the operation. |

# GetAsyncTaskStatusMetaModel

The model for which the task is performing the operation.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| COLLECTION | string | ✅       | "collection" |
| SPEC       | string | ✅       | "spec"       |

# GetAsyncTaskStatusStatus

The task's current status.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| PENDING   | string | ✅       | "pending"   |
| FAILED    | string | ✅       | "failed"    |
| COMPLETED | string | ✅       | "completed" |
