# CollectionAccessKeys

**Properties**

| Name | Type                                                      | Required | Description                                       |
| :--- | :-------------------------------------------------------- | :------- | :------------------------------------------------ |
| data | [CollectionAccessKeysData](CollectionAccessKeysData.md)[] | ❌       | A list of collection access keys.                 |
| meta | CollectionAccessKeysMeta                                  | ❌       | The response's non-standard metadata information. |

# CollectionAccessKeysMeta

The response's non-standard metadata information.

**Properties**

| Name       | Type   | Required | Description                                                              |
| :--------- | :----- | :------- | :----------------------------------------------------------------------- |
| nextCursor | string | ❌       | The pagination cursor that points to the next record in the results set. |
| prevCursor | string | ❌       | The pagination cursor to previous set of response data.                  |
