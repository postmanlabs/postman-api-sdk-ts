# CustomFunctionCreate

Information about the custom function.

**Properties**

| Name        | Type   | Required | Description                                                                                                                                                                                                                                                                        |
| :---------- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| path        | string | ✅       | The custom function's path, in the form `functions/\<name\>.js`. Root-level paths and nested paths are not supported. The name must be at least two characters, start with a letter, underscore, or dollar sign, and contain only letters, numbers, underscores, and dollar signs. |
| content     | string | ✅       | The custom function's content, up to a maximum of 500 KB (UTF-8).                                                                                                                                                                                                                  |
| description | string | ❌       | The custom function's description.                                                                                                                                                                                                                                                 |
