# UsersForkedCollections

**Properties**

| Name | Type                                                          | Required | Description                                            |
| :--- | :------------------------------------------------------------ | :------- | :----------------------------------------------------- |
| data | [UsersForkedCollectionsData](UsersForkedCollectionsData.md)[] | ❌       | A list of the user's forked collections.               |
| meta | UsersForkedCollectionsMeta                                    | ❌       | The response's meta information for paginated results. |

# UsersForkedCollectionsMeta

The response's meta information for paginated results.

**Properties**

| Name             | Type   | Required | Description                                                              |
| :--------------- | :----- | :------- | :----------------------------------------------------------------------- |
| total            | number | ❌       | The total number of forked collections.                                  |
| nextCursor       | string | ❌       | The pagination cursor that points to the next record in the results set. |
| inaccessibleFork | number | ❌       | The total number of forked collections that the user cannot access.      |
