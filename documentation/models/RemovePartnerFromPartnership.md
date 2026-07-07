# RemovePartnerFromPartnership

The request body for removing partners from partnership with a team.

**Properties**

| Name           | Type                                                                                                  | Required | Description                                |
| :------------- | :---------------------------------------------------------------------------------------------------- | :------- | :----------------------------------------- |
| targetEntity   | RemovePartnerFromPartnershipTargetEntity                                                              | ✅       | The `team` value.                          |
| targetEntityId | string                                                                                                | ✅       | The team ID from which to remove partners. |
| action         | RemovePartnerFromPartnershipAction                                                                    | ✅       | The `remove_partner` action.               |
| target         | [ManagePartnerWorkspaceInvitesTargetObjectUserId](ManagePartnerWorkspaceInvitesTargetObjectUserId.md) | ✅       |                                            |

# RemovePartnerFromPartnershipTargetEntity

The `team` value.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| TEAM | string | ✅       | "team"      |

# RemovePartnerFromPartnershipAction

The `remove_partner` action.

**Properties**

| Name           | Type   | Required | Description      |
| :------------- | :----- | :------- | :--------------- |
| REMOVE_PARTNER | string | ✅       | "remove_partner" |
