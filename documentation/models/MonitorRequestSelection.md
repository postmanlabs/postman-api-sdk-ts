# MonitorRequestSelection

The ordered subset of the monitor's collection that the monitor runs, in run order, instead of the full collection.

**Properties**

| Name          | Type                                                                              | Required | Description                                                                                                                                         |
| :------------ | :-------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| selectedItems | [MonitorRequestSelectionSelectedItems](MonitorRequestSelectionSelectedItems.md)[] | ✅       | The collection items the monitor runs, in run order. Each entry's position in this array is its position in the run, not the collection's ordering. |
| meta          | MonitorRequestSelectionMeta                                                       | ✅       | Additional request-selection metadata, including the collection's structure at the time the selection was made.                                     |

# MonitorRequestSelectionMeta

Additional request-selection metadata, including the collection's structure at the time the selection was made.

**Properties**

| Name                | Type                                                                  | Required | Description                                                                                                                                                                                                                                                                                                                                          |
| :------------------ | :-------------------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| collectionStructure | [MonitorCollectionStructureItem](MonitorCollectionStructureItem.md)[] | ✅       | A snapshot of the collection's complete item tree, in collection order and minimal collection format, that Postman takes each time the selection is set or changed. Later changes to the collection are compared against it, so the monitor's notifications can report requests added to or removed from the collection since the selection was set. |
