# CreateAccessRequest

**Properties**

| Name        | Type                                  | Required | Description                                                 |
| :---------- | :------------------------------------ | :------- | :---------------------------------------------------------- |
| entityList  | [TeamEntityInfo](TeamEntityInfo.md)[] | ✅       | A list of the entities for which to create access requests. |
| role        | CreateAccessRequestRole               | ✅       | The team role to request.                                   |
| reason      | string                                | ✅       | The reason for the access request.                          |
| requestType | RequestType                           | ✅       | The type of access request.                                 |

# CreateAccessRequestRole

The team role to request.

**Properties**

| Name                   | Type   | Required | Description              |
| :--------------------- | :----- | :------- | :----------------------- |
| TEAM_MANAGER           | string | ✅       | "TEAM_MANAGER"           |
| TEAM_DEVELOPER         | string | ✅       | "TEAM_DEVELOPER"         |
| TEAM_GUEST_DEVELOPER   | string | ✅       | "TEAM_GUEST_DEVELOPER"   |
| TEAM_GUEST_VIEWER      | string | ✅       | "TEAM_GUEST_VIEWER"      |
| TEAM_PARTNER_MANAGER   | string | ✅       | "TEAM_PARTNER_MANAGER"   |
| TEAM_PARTNER_LEAD      | string | ✅       | "TEAM_PARTNER_LEAD"      |
| TEAM_GUEST             | string | ✅       | "TEAM_GUEST"             |
| TEAM_PARTNER           | string | ✅       | "TEAM_PARTNER"           |
| TEAM_COMMUNITY_MANAGER | string | ✅       | "TEAM_COMMUNITY_MANAGER" |

# RequestType

The type of access request.

**Properties**

| Name                   | Type   | Required | Description              |
| :--------------------- | :----- | :------- | :----------------------- |
| REQUEST_TO_ADD_MEMBERS | string | ✅       | "REQUEST_TO_ADD_MEMBERS" |
| REQUEST_TO_JOIN        | string | ✅       | "REQUEST_TO_JOIN"        |
| UPGRADE_ROLE           | string | ✅       | "UPGRADE_ROLE"           |
