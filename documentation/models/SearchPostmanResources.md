# SearchPostmanResources

**Properties**

| Name        | Type                              | Required | Description                                                                                                                                                                                                              |
| :---------- | :-------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| elementType | SearchPostmanResourcesElementType | ✅       | The type of Postman resource to search for.                                                                                                                                                                              |
| q           | string                            | ❌       | The search query text. This is case-insensitive.                                                                                                                                                                         |
| ownership   | Ownership                         | ❌       | The ownership scope for search results. One of: - `organization` (default) — Resources owned by the user's team. - `external` — Resources not owned by the user's team. - `all` — All resources regardless of ownership. |
| filters     | Filters                           | ❌       | The search filters to narrow results.                                                                                                                                                                                    |

# SearchPostmanResourcesElementType

The type of Postman resource to search for.

**Properties**

| Name         | Type   | Required | Description    |
| :----------- | :----- | :------- | :------------- |
| REQUESTS     | string | ✅       | "requests"     |
| COLLECTIONS  | string | ✅       | "collections"  |
| WORKSPACES   | string | ✅       | "workspaces"   |
| ENVIRONMENTS | string | ✅       | "environments" |
| FLOWS        | string | ✅       | "flows"        |
| SPECS        | string | ✅       | "specs"        |

# Ownership

The ownership scope for search results. One of: - `organization` (default) — Resources owned by the user's team. - `external` — Resources not owned by the user's team. - `all` — All resources regardless of ownership.

**Properties**

| Name         | Type   | Required | Description    |
| :----------- | :----- | :------- | :------------- |
| ORGANIZATION | string | ✅       | "organization" |
| EXTERNAL     | string | ✅       | "external"     |
| ALL          | string | ✅       | "all"          |

# Filters

The search filters to narrow results.

**Properties**

| Name  | Type                                | Required | Description                                                                                   |
| :---- | :---------------------------------- | :------- | :-------------------------------------------------------------------------------------------- |
| \_and | [SearchFilters](SearchFilters.md)[] | ✅       | A list of filter conditions that must all be true. Each item must contain exactly one filter. |
