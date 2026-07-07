# GenerateOauthTokenResponse

**Properties**

| Name        | Type      | Required | Description                                  |
| :---------- | :-------- | :------- | :------------------------------------------- |
| accessToken | string    | ❌       | A Postman OAuth 2.0 access token.            |
| expiresIn   | number    | ❌       | The time the token expires, in milliseconds. |
| tokenType   | TokenType | ❌       | The `Bearer` token type.                     |

# TokenType

The `Bearer` token type.

**Properties**

| Name   | Type   | Required | Description |
| :----- | :----- | :------- | :---------- |
| BEARER | string | ✅       | "Bearer"    |
