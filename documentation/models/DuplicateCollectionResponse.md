# DuplicateCollectionResponse

**Properties**

| Name | Type                            | Required | Description                             |
| :--- | :------------------------------ | :------- | :-------------------------------------- |
| task | DuplicateCollectionResponseTask | ❌       | Information about the duplication task. |

# DuplicateCollectionResponseTask

Information about the duplication task.

**Properties**

| Name   | Type       | Required | Description                                               |
| :----- | :--------- | :------- | :-------------------------------------------------------- |
| id     | string     | ❌       | The duplication task's ID.                                |
| status | TaskStatus | ❌       | The status of the collection duplication task.            |
| reason | string     | ❌       | If the task failed, the reason why it failed to complete. |

# TaskStatus

The status of the collection duplication task.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| PROCESSING | string | ✅       | "processing" |
| COMPLETED  | string | ✅       | "completed"  |
| FAILED     | string | ✅       | "failed"     |
