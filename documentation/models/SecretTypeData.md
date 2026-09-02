# SecretTypeData

Information about the secret type.

**Properties**

| Name | Type               | Required | Description                                                                                                                                                                                                                                                                                    |
| :--- | :----------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name | string             | ❌       | The name of the secret type.                                                                                                                                                                                                                                                                   |
| id   | string             | ❌       | The ID of the secret type.                                                                                                                                                                                                                                                                     |
| type | SecretTypeDataType | ❌       | The origin of the secret type: - `DEFAULT` — Supported by default in Postman. - `TEAM_REGEX` — A custom regex added by an Admin or Super Admin user in the **Configure Alerts** section of the [**Team Settings**](https://learning.postman.com/docs/administration/team-settings/) interface. |

# SecretTypeDataType

The origin of the secret type: - `DEFAULT` — Supported by default in Postman. - `TEAM_REGEX` — A custom regex added by an Admin or Super Admin user in the **Configure Alerts** section of the [**Team Settings**](https://learning.postman.com/docs/administration/team-settings/) interface.

**Properties**

| Name       | Type   | Required | Description  |
| :--------- | :----- | :------- | :----------- |
| DEFAULT\_  | string | ✅       | "DEFAULT"    |
| TEAM_REGEX | string | ✅       | "TEAM_REGEX" |
