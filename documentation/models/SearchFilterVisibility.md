# SearchFilterVisibility

Filters by workspace visibility. Supported for all element types. One of: - `internal` — Only visible to the organization's team members. - `public` — Visible to all Postman users. - `partner` — Visible to assigned external partner users.

**Properties**

| Name | Type | Required | Description                      |
| :--- | :--- | :------- | :------------------------------- |
| \_eq | Eq   | ❌       | The visibility value to match.   |
| \_ne | Ne   | ❌       | The visibility value to exclude. |

# Eq

The visibility value to match.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| INTERNAL | string | ✅       | "internal"  |
| PUBLIC\_ | string | ✅       | "public"    |
| PARTNER  | string | ✅       | "partner"   |

# Ne

The visibility value to exclude.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| INTERNAL | string | ✅       | "internal"  |
| PUBLIC\_ | string | ✅       | "public"    |
| PARTNER  | string | ✅       | "partner"   |
