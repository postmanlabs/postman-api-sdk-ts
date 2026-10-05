# RulesetAssignmentCreate

Information about the ruleset assignment.

**Properties**

| Name       | Type                              | Required | Description                       |
| :--------- | :-------------------------------- | :------- | :-------------------------------- |
| targetType | RulesetAssignmentCreateTargetType | ✅       | The assignment target type.       |
| targetId   | string                            | ✅       | The target governance group's ID. |

# RulesetAssignmentCreateTargetType

The assignment target type.

**Properties**

| Name             | Type   | Required | Description        |
| :--------------- | :----- | :------- | :----------------- |
| GOVERNANCE_GROUP | string | ✅       | "governance_group" |
