# ServiceAccountsService

A list of all methods in the `ServiceAccountsService` service. Click on the method name to view detailed information about that method.

| Methods                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :---------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [generateServiceAccountToken](#generateserviceaccounttoken) | Exchanges a service account API key for a short-lived access token. On success, the response contains an access token that can be used to authenticate downstream service-to-service requests on behalf of the service account. The token is a JWT that encodes the service account's identity and permissions, and is valid for 15 minutes. **Note:** - The API key must belong to a service account. API keys that belong to regular users aren't supported. - This endpoint authorizes the service account API through the `x-api-key` passed as a header. - This endpoint has a rate limit of 10 requests per 10 second window per user. |

## generateServiceAccountToken

Exchanges a service account API key for a short-lived access token. On success, the response contains an access token that can be used to authenticate downstream service-to-service requests on behalf of the service account. The token is a JWT that encodes the service account's identity and permissions, and is valid for 15 minutes. **Note:** - The API key must belong to a service account. API keys that belong to regular users aren't supported. - This endpoint authorizes the service account API through the `x-api-key` passed as a header. - This endpoint has a rate limit of 10 requests per 10 second window per user.

- HTTP Method: `POST`
- Endpoint: `/service-account-tokens`

**Parameters**

| Name    | Type   | Required | Description                                  |
| :------ | :----- | :------- | :------------------------------------------- |
| xApiKey | string | ✅       | The service account API key, in PMAK format. |

**Return Type**

`GenerateServiceAccountTokenResponse`

**Example Usage Code Snippet**

```typescript
import { PostmanApi } from '@postman/api-sdk';

(async () => {
  const postmanApi = new PostmanApi({
    apiKey: 'YOUR_API_KEY',
  });

  const data = await postmanApi.serviceAccounts.generateServiceAccountToken({
    xApiKey: 'PMAK-xxxx-xxxx-xxxx-xxxx',
  });

  console.log(data);
})();
```
