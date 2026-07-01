# RequestData

**Properties**

| Name        | Type            | Required | Description                              |
| :---------- | :-------------- | :------- | :--------------------------------------- |
| key         | string          | ❌       | The form data's key.                     |
| value       | string          | ❌       | The form data's value.                   |
| description | string          | ❌       | The form data's description.             |
| enabled     | boolean         | ❌       | If true, the form data entry is enabled. |
| type        | RequestDataType | ❌       | The form data's type.                    |
| uuid        | string          | ❌       | The form data entry's unique identifier. |

# RequestDataType

The form data's type.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| TEXT | string | ✅       | "text"      |
| FILE | string | ✅       | "file"      |
