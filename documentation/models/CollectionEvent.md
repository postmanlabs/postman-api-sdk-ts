# CollectionEvent

Information about the collection's events.

**Properties**

| Name   | Type                                          | Required | Description                                                                                                      |
| :----- | :-------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| listen | EventListen2                                  | ✅       | The `prerequest` (pre-request) or `test` (post-response) value.                                                  |
| id     | string                                        | ❌       | The event's ID.                                                                                                  |
| script | [RequestEventsScript](RequestEventsScript.md) | ❌       | Information about the Javascript code that can be used to to perform setup or teardown operations in a response. |

# EventListen2

The `prerequest` (pre-request) or `test` (post-response) value.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| TEST       | string | ✅       | "test"       |
| PREREQUEST | string | ✅       | "prerequest" |
