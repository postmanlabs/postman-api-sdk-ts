# PanRequestElement

Information about the requested element.

**Properties**

| Name        | Type                  | Required | Description                   |
| :---------- | :-------------------- | :------- | :---------------------------- |
| id          | string                | ❌       | The element's ID.             |
| type        | PanRequestElementType | ❌       | The `workspace` element type. |
| name        | string                | ❌       | The element's name.           |
| summary     | string                | ❌       | The element's short summary.  |
| description | string                | ❌       | The element's description.    |

# PanRequestElementType

The `workspace` element type.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| WORKSPACE | string | ✅       | "workspace" |
