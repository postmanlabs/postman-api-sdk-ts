# PanRequestResponse

Information about the response to the element's request. This object only returns when the request is denied with a message.

**Properties**

| Name      | Type   | Required | Description                                    |
| :-------- | :----- | :------- | :--------------------------------------------- |
| createdAt | string | ❌       | The date and time at which request was denied. |
| createdBy | number | ❌       | The ID of the user who denied the request.     |
| message   | string | ❌       | The request's response message.                |
