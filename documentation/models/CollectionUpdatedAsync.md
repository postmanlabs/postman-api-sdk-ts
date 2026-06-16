# CollectionUpdatedAsync

**Properties**

| Name | Type                       | Required | Description |
| :--- | :------------------------- | :------- | :---------- |
| task | CollectionUpdatedAsyncTask | ❌       |             |

# CollectionUpdatedAsyncTask

**Properties**

| Name   | Type   | Required | Description                                                                                                                            |
| :----- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| id     | string | ❌       | The collection update task's ID. Use this value to get the update's status with the GET `/collection-updates-tasks/{taskId}` endpoint. |
| status | string | ❌       | The task's current status.                                                                                                             |
