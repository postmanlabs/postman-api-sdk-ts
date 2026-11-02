# MonitorRequestSelectionPayload

The ordered subset of the monitor's collection to run. If set, the monitor runs exactly these items in the given order instead of the full collection. Pass a `null` value to clear the selection and run the full collection again.

**Properties**

| Name          | Type                                                                                            | Required | Description                                                                                                                                                                                                                                         |
| :------------ | :---------------------------------------------------------------------------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| selectedItems | [MonitorRequestSelectionPayloadSelectedItems](MonitorRequestSelectionPayloadSelectedItems.md)[] | ✅       | The collection items to run, in run order. Each entry's position in this array is its position in the run, not the collection's ordering. Each item must exist in the monitor's collection, or the request returns an HTTP `400 Bad Request` error. |
