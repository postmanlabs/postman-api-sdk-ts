# TransferWorkspaceElementResponse

**Properties**

| Name      | Type                                      | Required | Description                                                            |
| :-------- | :---------------------------------------- | :------- | :--------------------------------------------------------------------- |
| workspace | TransferWorkspaceElementResponseWorkspace | ❌       | Information about the workspace that received the transferred element. |

# TransferWorkspaceElementResponseWorkspace

Information about the workspace that received the transferred element.

**Properties**

| Name             | Type             | Required | Description                             |
| :--------------- | :--------------- | :------- | :-------------------------------------- |
| elementTransfers | ElementTransfers | ❌       | Information about the element transfer. |

# ElementTransfers

Information about the element transfer.

**Properties**

| Name | Type   | Required | Description                                               |
| :--- | :----- | :------- | :-------------------------------------------------------- |
| type | string | ❌       | The type of element transferred.                          |
| from | string | ❌       | The ID of the workspace the element was transferred from. |
| id   | string | ❌       | The element's ID.                                         |
| to   | string | ❌       | The ID of the workspace the element was transferred to.   |
