# OAuth2_0Service

A list of all methods in the `OAuth2_0Service` service. Click on the method name to view detailed information about that method.

| Methods                                   | Description                                                                                                                                                                                                                                                                                                                                                          |
| :---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [generateOauthToken](#generateoauthtoken) | Generates an OAuth 2.0 access token for a client application using the `client_credentials` grant type. Use this endpoint with backend services or bots to authenticate and authorize API requests without user interaction. **Note:** This endpoint uses Basic Auth. You must pass a valid client ID and client secret for the username and password, respectively. |
| [revokeOauthToken](#revokeoauthtoken)     | Revokes an active OAuth 2.0 access token and prevents further use of it for authentication. Once revoked, the token can't be used for any API requests. **Note:** - Revocation of an OAuth token is immediate and can't be undone. - This request does not use any authorization.                                                                                    |

## generateOauthToken

Generates an OAuth 2.0 access token for a client application using the `client_credentials` grant type. Use this endpoint with backend services or bots to authenticate and authorize API requests without user interaction. **Note:** This endpoint uses Basic Auth. You must pass a valid client ID and client secret for the username and password, respectively.

- HTTP Method: `POST`
- Endpoint: `/oauth2/token`

**Parameters**

| Name | Type                                                  | Required | Description       |
| :--- | :---------------------------------------------------- | :------- | :---------------- |
| body | [GenerateOauthToken](../models/GenerateOauthToken.md) | ❌       | The request body. |

**Return Type**

`GenerateOauthTokenResponse`

**Example Usage Code Snippet**

```typescript
import { GenerateOauthToken, PostmanApiSdkSourceOverlayed } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
  });

  const generateOauthToken: GenerateOauthToken = {
    grantType: 'client_credentials',
    installationAuthId: 'e868878e40f646ce8b5620736995dc89',
    jwt: 'eyJhXXX',
  };

  const data = await postmanApiSdkSourceOverlayed.oAuth2_0.generateOauthToken(generateOauthToken);

  console.log(data);
})();
```

## revokeOauthToken

Revokes an active OAuth 2.0 access token and prevents further use of it for authentication. Once revoked, the token can't be used for any API requests. **Note:** - Revocation of an OAuth token is immediate and can't be undone. - This request does not use any authorization.

- HTTP Method: `POST`
- Endpoint: `/oauth2/token/revoke`

**Parameters**

| Name | Type                                              | Required | Description       |
| :--- | :------------------------------------------------ | :------- | :---------------- |
| body | [RevokeOauthToken](../models/RevokeOauthToken.md) | ❌       | The request body. |

**Return Type**

`RevokeOauthTokenResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApiSdkSourceOverlayed, RevokeOauthToken } from 'postman-api-sdk-source-overlayed';

(async () => {
  const postmanApiSdkSourceOverlayed = new PostmanApiSdkSourceOverlayed({});

  const revokeOauthToken: RevokeOauthToken = {
    token: 'PMAK-XXX',
  };

  const data = await postmanApiSdkSourceOverlayed.oAuth2_0.revokeOauthToken(revokeOauthToken);

  console.log(data);
})();
```
