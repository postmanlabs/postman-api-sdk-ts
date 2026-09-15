# TaskStatusResponse

**Properties**

| Name    | Type                      | Required | Description                                                           |
| :------ | :------------------------ | :------- | :-------------------------------------------------------------------- |
| id      | string                    | ❌       | The task's ID.                                                        |
| status  | TaskStatusResponseStatus  | ❌       | The task's current status.                                            |
| details | TaskStatusResponseDetails | ❌       | If the task failed, an object containing information about the error. |

# TaskStatusResponseStatus

The task's current status.

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| SUCCESSFUL  | string | ✅       | "successful"  |
| IN_PROGRESS | string | ✅       | "in-progress" |
| FAILED      | string | ✅       | "failed"      |

# TaskStatusResponseDetails

If the task failed, an object containing information about the error.

**Properties**

| Name  | Type         | Required | Description                  |
| :---- | :----------- | :------- | :--------------------------- |
| error | DetailsError | ❌       | Information about the error. |

# DetailsError

Information about the error.

**Properties**

| Name    | Type   | Required | Description        |
| :------ | :----- | :------- | :----------------- |
| message | string | ❌       | The error message. |
