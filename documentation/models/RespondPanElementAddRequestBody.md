# RespondPanElementAddRequestBody

**Properties**

| Name     | Type                                     | Required | Description                                                   |
| :------- | :--------------------------------------- | :------- | :------------------------------------------------------------ |
| status   | RespondPanElementAddRequestBodyStatus    | ✅       | The request's approval status.                                |
| response | RespondPanElementAddRequestBodyResponse1 | ❌       | If the request is denied, the response to the user's request. |

# RespondPanElementAddRequestBodyStatus

The request's approval status.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| DENIED   | string | ✅       | "denied"    |
| APPROVED | string | ✅       | "approved"  |

# RespondPanElementAddRequestBodyResponse1

If the request is denied, the response to the user's request.

**Properties**

| Name    | Type   | Required | Description                                               |
| :------ | :----- | :------- | :-------------------------------------------------------- |
| message | string | ❌       | A message that details why the user's request was denied. |
