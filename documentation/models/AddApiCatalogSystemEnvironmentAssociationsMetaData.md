# AddApiCatalogSystemEnvironmentAssociationsMetaData

The response's meta information for paginated results.

**Properties**

| Name     | Type   | Required | Description                                                                                                                |
| :------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------- |
| created  | number | ✅       | The number of new associations created.                                                                                    |
| existing | number | ✅       | The number of associations that already existed and were unchanged.                                                        |
| replaced | number | ✅       | The number of associations that were moved from a different system environment.                                            |
| excluded | number | ✅       | The number of associations that were skipped. This only returns if you pass the `allowPartial` query parameter as `true`). |
