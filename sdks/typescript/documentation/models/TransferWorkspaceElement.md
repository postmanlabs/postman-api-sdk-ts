# TransferWorkspaceElement

**Properties**

| Name | Type                         | Required | Description                                    |
| :--- | :--------------------------- | :------- | :--------------------------------------------- |
| id   | Id                           | ✅       | The workspace element's ID.                    |
| type | TransferWorkspaceElementType | ✅       | The type of element to transfer.               |
| to   | string                       | ✅       | The workspace ID to transfer the element into. |

# Id

The workspace element's ID.

# TransferWorkspaceElementType

The type of element to transfer.

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| COLLECTION  | string | ✅       | "collection"  |
| ENVIRONMENT | string | ✅       | "environment" |
| API         | string | ✅       | "api"         |
| FLOW        | string | ✅       | "flow"        |
| MOCK        | string | ✅       | "mock"        |
| MONITOR     | string | ✅       | "monitor"     |
