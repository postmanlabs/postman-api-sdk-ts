# WorkspaceUpdateData

Information about the workspace update.

**Properties**

| Name             | Type                                                                            | Required | Description                                                                                                                                          |
| :--------------- | :------------------------------------------------------------------------------ | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| id               | number                                                                          | ❌       | The workspace update's ID.                                                                                                                           |
| topic            | string                                                                          | ❌       | The title of the workspace update.                                                                                                                   |
| description      | string                                                                          | ❌       | The content of the workspace update.                                                                                                                 |
| workspaceId      | string                                                                          | ❌       | The ID of the workspace in which the workspace update was created.                                                                                   |
| createdBy        | [WorkspaceUpdateCreatedByData](WorkspaceUpdateCreatedByData.md)                 | ❌       | Information about the user that created the workspace update.                                                                                        |
| updatedBy        | number                                                                          | ❌       | The ID of the user who last updated the workspace update.                                                                                            |
| createdAt        | string                                                                          | ❌       | The date and time at which the workspace update was created.                                                                                         |
| updatedAt        | string                                                                          | ❌       | The date and time at which the workspace update was last updated.                                                                                    |
| category         | [WorkspaceUpdateCategoryData](WorkspaceUpdateCategoryData.md)                   | ❌       | The update's assigned category.                                                                                                                      |
| isPinned         | boolean                                                                         | ❌       | If true, the workspace update is pinned to the top of the workspace updates list.                                                                    |
| relatedResources | [WorkspaceUpdateRelatedResourcesData](WorkspaceUpdateRelatedResourcesData.md)[] | ❌       | A list containing the update's related elements. Related elements include links to collections, requests, folders, and saved examples in the update. |
