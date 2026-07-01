# CollectionForksInfo

**Properties**

| Name | Type                                                    | Required | Description                                            |
| :--- | :------------------------------------------------------ | :------- | :----------------------------------------------------- |
| data | [CollectionForksInfoData](CollectionForksInfoData.md)[] | ❌       | A list of the collection's forks.                      |
| meta | CollectionForksInfoMeta                                 | ❌       | The response's meta information for paginated results. |

# CollectionForksInfoMeta

The response's meta information for paginated results.

**Properties**

| Name       | Type   | Required | Description                                                              |
| :--------- | :----- | :------- | :----------------------------------------------------------------------- |
| nextCursor | string | ❌       | The pagination cursor that points to the next record in the results set. |
| total      | number | ❌       | The total number of forked collections.                                  |
