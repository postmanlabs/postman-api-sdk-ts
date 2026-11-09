# Ruleset

**Properties**

| Name        | Type          | Required | Description                                                                                                                                                                                                                            |
| :---------- | :------------ | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id          | string        | ❌       | The ruleset's ID.                                                                                                                                                                                                                      |
| name        | string        | ❌       | The ruleset's name.                                                                                                                                                                                                                    |
| description | string        | ❌       | The ruleset's description.                                                                                                                                                                                                             |
| engine      | RulesetEngine | ❌       | The governance engine the ruleset targets.                                                                                                                                                                                             |
| format      | RulesetFormat | ❌       | The resource the ruleset governs.                                                                                                                                                                                                      |
| type        | RulesetType   | ❌       | The ruleset's type: - `system` — Rulesets managed by Postman (for example, the Postman standard and OWASP rulesets that ship with governance) and can't be updated or deleted. - `custom` — Rulesets created and managed by your team. |
| createdBy   | string        | ❌       | The ID of the user who created the ruleset.                                                                                                                                                                                            |
| updatedBy   | string        | ❌       | The ID of the user who last updated the ruleset.                                                                                                                                                                                       |
| createdAt   | string        | ❌       | The date and time at which the ruleset was created.                                                                                                                                                                                    |
| updatedAt   | string        | ❌       | The date and time at which the ruleset was last updated.                                                                                                                                                                               |
| content     | string        | ❌       | The ruleset's content, up to a maximum of 500 KB (UTF-8).                                                                                                                                                                              |

# RulesetEngine

The governance engine the ruleset targets.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| SPECTRAL | string | ✅       | "spectral"  |

# RulesetFormat

The resource the ruleset governs.

**Properties**

| Name      | Type   | Required | Description |
| :-------- | :----- | :------- | :---------- |
| SPECTRAL  | string | ✅       | "spectral"  |
| WORKSPACE | string | ✅       | "workspace" |

# RulesetType

The ruleset's type: - `system` — Rulesets managed by Postman (for example, the Postman standard and OWASP rulesets that ship with governance) and can't be updated or deleted. - `custom` — Rulesets created and managed by your team.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| SYSTEM | string | ✅       | "system"    |
| CUSTOM | string | ✅       | "custom"    |
