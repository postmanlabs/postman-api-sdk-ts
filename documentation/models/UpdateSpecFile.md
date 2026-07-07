# UpdateSpecFile

You must pass one of the accepted values in this request body. Also, this request body does not accept multiple properties in a single call. For example, you cannot pass both the `content` and `type` property at the same time.

**Properties**

| Name    | Type               | Required | Description                                                                                                                                                                                                                                                                 |
| :------ | :----------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name    | string             | ❌       | The file's name.                                                                                                                                                                                                                                                            |
| type    | UpdateSpecFileType | ❌       | The type of file: - `ROOT` — The file containing the full OpenAPI structure. This serves as the entry point for the API spec and references other (`DEFAULT`) spec files. Multi-file specs can only have one root file. - `DEFAULT` — A file referenced by the `ROOT` file. |
| content | string             | ❌       | The specification's stringified contents.                                                                                                                                                                                                                                   |

# UpdateSpecFileType

The type of file: - `ROOT` — The file containing the full OpenAPI structure. This serves as the entry point for the API spec and references other (`DEFAULT`) spec files. Multi-file specs can only have one root file. - `DEFAULT` — A file referenced by the `ROOT` file.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| DEFAULT\_ | string | ✅       | "DEFAULT"   |
| ROOT      | string | ✅       | "ROOT"      |
