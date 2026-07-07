# MergeCollectionFork

**Properties**

| Name        | Type                        | Required | Description                                                                                                                                                                                                                                                                                                                                                                           |
| :---------- | :-------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| destination | string                      | ✅       | The destination (parent) collection's unique ID.                                                                                                                                                                                                                                                                                                                                      |
| source      | string                      | ✅       | The source collection's unique ID.                                                                                                                                                                                                                                                                                                                                                    |
| strategy    | MergeCollectionForkStrategy | ❌       | The fork's merge strategy: - `deleteSource` — Merge the changes into the parent collection. After the merge process is complete, Postman deletes the fork. You must have Editor access to both the parent and forked collections. - `updateSourceWithDestination` — Merge the changes into the parent collection. Any differences in the parent collection are also made to the fork. |

# MergeCollectionForkStrategy

The fork's merge strategy: - `deleteSource` — Merge the changes into the parent collection. After the merge process is complete, Postman deletes the fork. You must have Editor access to both the parent and forked collections. - `updateSourceWithDestination` — Merge the changes into the parent collection. Any differences in the parent collection are also made to the fork.

**Properties**

| Name                           | Type   | Required | Description                   |
| :----------------------------- | :----- | :------- | :---------------------------- |
| DELETE_SOURCE                  | string | ✅       | "deleteSource"                |
| UPDATE_SOURCE_WITH_DESTINATION | string | ✅       | "updateSourceWithDestination" |
