# ManageTeamMemberRolesAdd

Information about the bulk `add` operation.

**Properties**

| Name   | Type                                | Required | Description                                    |
| :----- | :---------------------------------- | :------- | :--------------------------------------------- |
| users  | [UsersInfo](UsersInfo.md)           | ❌       | The role assignments keyed by user ID.         |
| groups | [UserGroupsInfo](UserGroupsInfo.md) | ❌       | The role assignments keyed by user group ID.   |
| orgs   | [OrgsInfo](OrgsInfo.md)             | ❌       | The role assignments keyed by organization ID. |
| teams  | [TeamsInfo](TeamsInfo.md)           | ❌       | The role assignments keyed by team ID.         |
