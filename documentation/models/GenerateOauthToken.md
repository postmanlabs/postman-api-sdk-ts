# GenerateOauthToken

**Properties**

| Name               | Type   | Required | Description                                                                                                                                       |
| :----------------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| grantType          | string | ✅       | The `client_credentials` OAuth grant type.                                                                                                        |
| installationAuthId | string | ✅       | The client's installation authentication ID.                                                                                                      |
| jwt                | string | ✅       | A signed JWT token. The token must include `iss` (issuer), `aud` (audience), `iat` (issued at), `exp` (expiration timestamp), and `jti` (JWT ID). |
