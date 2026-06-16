# MergePullCollectionChanges

**Properties**

| Name        | Type                               | Required | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| :---------- | :--------------------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| strategy    | MergePullCollectionChangesStrategy | ✅       | The fork's merge strategy: - `default` — Make no changes to the fork. You must have **Editor** access to the destination collection. - `updateSourceWithDestination` — Merge changes and apply any differences in the destination collection to the source. You must have **Editor** access to both the source and destination collection. - `deleteSource` — Merge the changes and delete the fork. You must have **Editor** access to both the source and destination collection. |
| source      | string                             | ✅       | The source collection's unique ID.                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| destination | string                             | ✅       | The destination collection's unique ID.                                                                                                                                                                                                                                                                                                                                                                                                                                             |

# MergePullCollectionChangesStrategy

The fork's merge strategy: - `default` — Make no changes to the fork. You must have **Editor** access to the destination collection. - `updateSourceWithDestination` — Merge changes and apply any differences in the destination collection to the source. You must have **Editor** access to both the source and destination collection. - `deleteSource` — Merge the changes and delete the fork. You must have **Editor** access to both the source and destination collection.

**Properties**

| Name                           | Type   | Required | Description                   |
| :----------------------------- | :----- | :------- | :---------------------------- |
| DEFAULT\_                      | string | ✅       | "default"                     |
| UPDATE_SOURCE_WITH_DESTINATION | string | ✅       | "updateSourceWithDestination" |
| DELETE_SOURCE                  | string | ✅       | "deleteSource"                |
