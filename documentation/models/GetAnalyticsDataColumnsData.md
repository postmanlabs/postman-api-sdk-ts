# GetAnalyticsDataColumnsData

**Properties**

| Name        | Type                            | Required | Description                                  |
| :---------- | :------------------------------ | :------- | :------------------------------------------- |
| name        | string                          | ❌       | The name of the column.                      |
| type        | GetAnalyticsDataColumnsDataType | ❌       | The data type of the column.                 |
| format      | string                          | ❌       | The data type's format.                      |
| description | string                          | ❌       | A description of what the column represents. |

# GetAnalyticsDataColumnsDataType

The data type of the column.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| DATE      | string | ✅       | "DATE"      |
| STRING\_  | string | ✅       | "STRING"    |
| INTEGER   | string | ✅       | "INTEGER"   |
| TIMESTAMP | string | ✅       | "TIMESTAMP" |
| BOOLEAN\_ | string | ✅       | "BOOLEAN"   |
| NUMBER\_  | string | ✅       | "NUMBER"    |
| FLOAT     | string | ✅       | "FLOAT"     |
