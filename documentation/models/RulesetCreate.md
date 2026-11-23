# RulesetCreate

Information about the ruleset.

**Properties**

| Name        | Type                | Required | Description                                                                                                              |
| :---------- | :------------------ | :------- | :----------------------------------------------------------------------------------------------------------------------- |
| name        | string              | ✅       | The ruleset's name. Must be unique within the team and only contain letters, numbers, hyphens, underscores, and periods. |
| description | string              | ✅       | The ruleset's description.                                                                                               |
| engine      | RulesetCreateEngine | ✅       | The governance engine that runs the ruleset.                                                                             |
| format      | RulesetCreateFormat | ✅       | The type of resource the ruleset governs.                                                                                |
| content     | string              | ✅       | The ruleset's content, up to a maximum of 500 KB (UTF-8).                                                                |

# RulesetCreateEngine

The governance engine that runs the ruleset.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| SPECTRAL | string | ✅       | "spectral"  |

# RulesetCreateFormat

The type of resource the ruleset governs.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| SPECTRAL  | string | ✅       | "spectral"  |
| WORKSPACE | string | ✅       | "workspace" |
