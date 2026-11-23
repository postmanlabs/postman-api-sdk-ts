# GetWorkspacesOkResponse

**Properties**

| Name       | Type                                                          | Required | Description                                                                                                              |
| :--------- | :------------------------------------------------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------- |
| workspaces | [GetWorkspacesWorkspaceData](GetWorkspacesWorkspaceData.md)[] | ❌       | A list of workspaces.                                                                                                    |
| meta       | SuccessfulResponseMeta2                                       | ❌       | The response's meta information for paginated results. This object only returns if you pass the `limit` query parameter. |

# SuccessfulResponseMeta2

The response's meta information for paginated results. This object only returns if you pass the `limit` query parameter.

**Properties**

| Name       | Type   | Required | Description                                                              |
| :--------- | :----- | :------- | :----------------------------------------------------------------------- |
| nextCursor | string | ❌       | The pagination cursor that points to the next record in the results set. |
