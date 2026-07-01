# CreateComponentVersion

**Properties**

| Name   | Type                         | Required | Description                                                                                                                                                                                               |
| :----- | :--------------------------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| label  | string                       | ✅       | The component version's label. This must begin and end with a an alphanumeric character and may only contain letters, digits, dots, underscores, plus signs, and hyphens and cannot exceed 60 characters. |
| source | CreateComponentVersionSource | ❌       | The source to publish the version from. Defaults to the component's current draft.                                                                                                                        |

# CreateComponentVersionSource

The source to publish the version from. Defaults to the component's current draft.

**Properties**

| Name | Type       | Required | Description        |
| :--- | :--------- | :------- | :----------------- |
| type | SourceType | ❌       | The `draft` value. |

# SourceType

The `draft` value.

**Properties**

| Name  | Type   | Required | Description |
| :---- | :----- | :------- | :---------- |
| DRAFT | string | ✅       | "draft"     |
