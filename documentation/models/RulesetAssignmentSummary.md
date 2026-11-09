# RulesetAssignmentSummary

Information about the ruleset assignment.

**Properties**

| Name       | Type                               | Required | Description                       |
| :--------- | :--------------------------------- | :------- | :-------------------------------- |
| rulesetId  | string                             | ✅       | The assigned ruleset's ID.        |
| targetType | RulesetAssignmentSummaryTargetType | ✅       | The assignment target type.       |
| targetId   | string                             | ✅       | The target governance group's ID. |

# RulesetAssignmentSummaryTargetType

The assignment target type.

**Properties**

| Name             | Type   | Required | Description        |
| :--------------- | :----- | :------- | :----------------- |
| GOVERNANCE_GROUP | string | ✅       | "governance_group" |
