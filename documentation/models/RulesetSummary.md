# RulesetSummary

Information about a ruleset, without its content.

**Properties**

| Name        | Type                 | Required | Description                                                                                                                                                                                                                            |
| :---------- | :------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | string               | ❌       | The ruleset's ID.                                                                                                                                                                                                                      |
| name        | string               | ❌       | The ruleset's name.                                                                                                                                                                                                                    |
| description | string               | ❌       | The ruleset's description.                                                                                                                                                                                                             |
| engine      | RulesetSummaryEngine | ❌       | The governance engine the ruleset targets.                                                                                                                                                                                             |
| format      | RulesetSummaryFormat | ❌       | The resource the ruleset governs.                                                                                                                                                                                                      |
| type        | RulesetSummaryType   | ❌       | The ruleset's type: - `system` — Rulesets managed by Postman (for example, the Postman standard and OWASP rulesets that ship with governance) and can't be updated or deleted. - `custom` — Rulesets created and managed by your team. |
| createdBy   | string               | ❌       | The ID of the user who created the ruleset.                                                                                                                                                                                            |
| updatedBy   | string               | ❌       | The ID of the user who last updated the ruleset.                                                                                                                                                                                       |
| createdAt   | string               | ❌       | The date and time at which the ruleset was created.                                                                                                                                                                                    |
| updatedAt   | string               | ❌       | The date and time at which the ruleset was last updated.                                                                                                                                                                               |

# RulesetSummaryEngine

The governance engine the ruleset targets.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| SPECTRAL | string | ✅       | "spectral"  |

# RulesetSummaryFormat

The resource the ruleset governs.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| SPECTRAL  | string | ✅       | "spectral"  |
| WORKSPACE | string | ✅       | "workspace" |

# RulesetSummaryType

The ruleset's type: - `system` — Rulesets managed by Postman (for example, the Postman standard and OWASP rulesets that ship with governance) and can't be updated or deleted. - `custom` — Rulesets created and managed by your team.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| SYSTEM | string | ✅       | "system"    |
| CUSTOM | string | ✅       | "custom"    |
