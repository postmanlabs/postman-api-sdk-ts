# CustomFunction

**Properties**

| Name        | Type               | Required | Description                                                       |
| :---------- | :----------------- | :------- | :---------------------------------------------------------------- |
| id          | string             | ❌       | The custom function's ID.                                         |
| name        | string             | ❌       | The custom function's name, derived from its path.                |
| path        | string             | ❌       | The custom function's path, in the form `functions/\<name\>.js`.  |
| description | string             | ❌       | The custom function's description.                                |
| type        | CustomFunctionType | ❌       | The custom function's type.                                       |
| createdBy   | string             | ❌       | The ID of the user who created the custom function.               |
| updatedBy   | string             | ❌       | The ID of the user who last updated the custom function.          |
| createdAt   | string             | ❌       | The date and time at which the custom function was created.       |
| updatedAt   | string             | ❌       | The date and time at which the custom function was last updated.  |
| content     | string             | ❌       | The custom function's content, up to a maximum of 500 KB (UTF-8). |

# CustomFunctionType

The custom function's type.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| SYSTEM | string | ✅       | "system"    |
| CUSTOM | string | ✅       | "custom"    |
