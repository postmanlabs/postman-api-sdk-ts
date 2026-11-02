# CustomFunctionUpdate

Information about the custom function.

**Properties**

| Name        | Type   | Required | Description                                                                                                          |
| :---------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------- |
| path        | string | ❌       | The custom function's path, in the form `functions/\<name\>.js`. Root-level paths and nested paths aren't supported. |
| description | string | ❌       | The custom function's description.                                                                                   |
| content     | string | ❌       | The custom function's content, up to a maximum of 500 KB (UTF-8).                                                    |
