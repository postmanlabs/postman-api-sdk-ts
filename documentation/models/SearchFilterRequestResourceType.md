# SearchFilterRequestResourceType

Filters by resource type variant (for example, `http` or `grpc`). Supported for `requests` only.

**Properties**

| Name  | Type     | Required | Description                          |
| :---- | :------- | :------- | :----------------------------------- |
| \_eq  | string   | ❌       | The resource type to match.          |
| \_ne  | string   | ❌       | The resource type to exclude.        |
| \_in  | string[] | ❌       | A list of resource types to match.   |
| \_nin | string[] | ❌       | A list of resource types to exclude. |
