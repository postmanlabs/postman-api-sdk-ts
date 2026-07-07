# RequestEvents

**Properties**

| Name   | Type                                          | Required | Description                                                                                                      |
| :----- | :-------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| listen | RequestEventsListen                           | ❌       | The event type.                                                                                                  |
| script | [RequestEventsScript](RequestEventsScript.md) | ❌       | Information about the Javascript code that can be used to to perform setup or teardown operations in a response. |

# RequestEventsListen

The event type.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| TEST       | string | ✅       | "test"       |
| PREREQUEST | string | ✅       | "prerequest" |
