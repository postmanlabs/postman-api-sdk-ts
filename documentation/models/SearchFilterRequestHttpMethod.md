# SearchFilterRequestHttpMethod

Filters by HTTP method (for example, `GET` or `POST`). Supported for `requests` only.

**Properties**

| Name  | Type     | Required | Description                        |
| :---- | :------- | :------- | :--------------------------------- |
| \_eq  | string   | ❌       | The HTTP method to match.          |
| \_ne  | string   | ❌       | The HTTP method to exclude.        |
| \_in  | string[] | ❌       | A list of HTTP methods to match.   |
| \_nin | string[] | ❌       | A list of HTTP methods to exclude. |
