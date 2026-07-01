# GetStatusOfAnAsyncApiTaskOkResponse

**Properties**

| Name      | Type                      | Required | Description                                           |
| :-------- | :------------------------ | :------- | :---------------------------------------------------- |
| id        | string                    | ❌       | The task's ID.                                        |
| meta      | GetAsyncTaskStatusMeta1   | ❌       | The response's non-standard meta information.         |
| status    | GetAsyncTaskStatusStatus1 | ❌       | The task's current status.                            |
| details   | GetAsyncTaskStatusDetails | ❌       |                                                       |
| createdAt | string                    | ❌       | The date and time at which the task was created.      |
| updatedAt | string                    | ❌       | The date and time at which the task was last updated. |

# GetAsyncTaskStatusMeta1

The response's non-standard meta information.

**Properties**

| Name   | Type                         | Required | Description                                               |
| :----- | :--------------------------- | :------- | :-------------------------------------------------------- |
| url    | string                       | ❌       | The endpoint URL that created the task.                   |
| model  | GetAsyncTaskStatusMetaModel1 | ❌       | The model for which the task is performing the operation. |
| action | MetaAction                   | ❌       | The task's action.                                        |

# GetAsyncTaskStatusMetaModel1

The model for which the task is performing the operation.

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| COLLECTION  | string | ✅       | "collection"  |
| API_VERSION | string | ✅       | "api-version" |

# MetaAction

The task's action.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| UPDATE | string | ✅       | "update"    |
| CREATE | string | ✅       | "create"    |

# GetAsyncTaskStatusStatus1

The task's current status.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| PENDING   | string | ✅       | "pending"   |
| FAILED    | string | ✅       | "failed"    |
| COMPLETED | string | ✅       | "completed" |

# GetAsyncTaskStatusDetails

# Details1

Information about the task's resources.

**Properties**

| Name      | Type                                                    | Required | Description |
| :-------- | :------------------------------------------------------ | :------- | :---------- |
| resources | [TaskResourcesResources1](TaskResourcesResources1.md)[] | ❌       |             |

# TaskErrorInformation

Information about the error that occurred during the task's processing.

**Properties**

| Name  | Type                      | Required | Description |
| :---- | :------------------------ | :------- | :---------- |
| error | TaskErrorInformationError | ❌       |             |

# TaskErrorInformationError

**Properties**

| Name    | Type   | Required | Description               |
| :------ | :----- | :------- | :------------------------ |
| message | string | ❌       | The task's error message. |
