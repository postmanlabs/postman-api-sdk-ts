# CreateCollectionSchemaEvent

Information about the collection's events.

**Properties**

| Name   | Type                          | Required | Description                                                                                                      |
| :----- | :---------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------- |
| listen | EventListen1                  | ✅       | Can be set to `test` or `prerequest` for test scripts or pre-request scripts respectively.                       |
| script | [EventScript](EventScript.md) | ❌       | Information about the Javascript code that can be used to to perform setup or teardown operations in a response. |

# EventListen1

Can be set to `test` or `prerequest` for test scripts or pre-request scripts respectively.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| TEST       | string | ✅       | "test"       |
| PREREQUEST | string | ✅       | "prerequest" |
