# UpdateWorkspaceUpdate

**Properties**

| Name             | Type                                                                            | Required | Description                                                                                                                                          |
| :--------------- | :------------------------------------------------------------------------------ | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| description      | string                                                                          | ✅       | The content of the workspace update.                                                                                                                 |
| topic            | string                                                                          | ✅       | The title of the workspace update.                                                                                                                   |
| category         | [WorkspaceUpdateCategoryData](WorkspaceUpdateCategoryData.md)                   | ✅       | The update's assigned category.                                                                                                                      |
| isPinned         | boolean                                                                         | ❌       | If true, the workspace update is pinned to the top of the workspace updates list.                                                                    |
| relatedResources | [WorkspaceUpdateRelatedResourcesData](WorkspaceUpdateRelatedResourcesData.md)[] | ❌       | A list containing the update's related elements. Related elements include links to collections, requests, folders, and saved examples in the update. |
