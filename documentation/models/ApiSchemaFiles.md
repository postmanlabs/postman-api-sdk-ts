# ApiSchemaFiles

**Properties**

| Name  | Type                | Required | Description                                 |
| :---- | :------------------ | :------- | :------------------------------------------ |
| meta  | ApiSchemaFilesMeta  | ❌       | The schema's non-standard meta information. |
| files | [Files](Files.md)[] | ❌       | A list of the schema's files.               |

# ApiSchemaFilesMeta

The schema's non-standard meta information.

**Properties**

| Name       | Type   | Required | Description                                                     |
| :--------- | :----- | :------- | :-------------------------------------------------------------- |
| nextCursor | string | ❌       | The pointer to the next record in the set of paginated results. |
