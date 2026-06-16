# AsyncTaskFailed

**Properties**

| Name    | Type                  | Required | Description                                   |
| :------ | :-------------------- | :------- | :-------------------------------------------- |
| details | string                | ❌       | Details about the generation error.           |
| meta    | AsyncTaskFailedMeta   | ❌       | The response's non-standard meta information. |
| status  | AsyncTaskFailedStatus | ❌       | The task's current status.                    |

# AsyncTaskFailedMeta

The response's non-standard meta information.

**Properties**

| Name   | Type                     | Required | Description                                               |
| :----- | :----------------------- | :------- | :-------------------------------------------------------- |
| action | string                   | ❌       | The task's action.                                        |
| model  | AsyncTaskFailedMetaModel | ❌       | The model for which the task is performing the operation. |

# AsyncTaskFailedMetaModel

The model for which the task is performing the operation.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| COLLECTION | string | ✅       | "collection" |
| SPEC       | string | ✅       | "spec"       |

# AsyncTaskFailedStatus

The task's current status.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| FAILED | string | ✅       | "failed"    |
