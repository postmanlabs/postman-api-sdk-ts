# CollectionAuth

The [authorization type supported by Postman](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/).

**Properties**

| Name     | Type                                  | Required | Description                                                                                                                                           |
| :------- | :------------------------------------ | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| type     | AuthMethodType2                       | ✅       | The authorization type.                                                                                                                               |
| apikey   | [AuthAttributes](AuthAttributes.md)[] | ❌       | The API key's authentication information.                                                                                                             |
| awsv4    | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for [AWS Signature](https://learning.postman.com/docs/sending-requests/authorization/aws-signature/) authentication.                   |
| basic    | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for [Basic Auth](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/#basic-auth).                    |
| bearer   | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for [Bearer Token](https://learning.postman.com/docs/sending-requests/authorization/authorization-types/#bearer-token) authentication. |
| digest   | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for [Digest](https://learning.postman.com/docs/sending-requests/authorization/digest-auth/) access authentication.                     |
| edgegrid | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for [Akamai Edgegrid](https://learning.postman.com/docs/sending-requests/authorization/akamai-edgegrid/) authentication.               |
| hawk     | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for [Hawk](https://learning.postman.com/docs/sending-requests/authorization/hawk-authentication/) authentication.                      |
| ntlm     | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for [NTLM](https://learning.postman.com/docs/sending-requests/authorization/ntlm-authentication/) authentication.                      |
| oauth1   | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for [OAuth1](https://learning.postman.com/docs/sending-requests/authorization/oauth-10/) authentication.                               |
| oauth2   | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for [OAuth2](https://learning.postman.com/docs/sending-requests/authorization/oauth-20/) authentication.                               |
| jwt      | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for JWT (JSON Web Token). Includes the `payload`, `secret`, `algorithm`, `addTokenTo`, and `headerPrefix` properties.                  |
| asap     | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for ASAP (Atlassian S2S Authentication Protocol). Includes the `kid`, `aud`, `iss`, `alg`, `privateKey`, and `claims` properties.      |

# AuthMethodType2

The authorization type.

**Properties**

| Name     | Type   | Required | Description |
| :------- | :----- | :------- | :---------- |
| BASIC    | string | ✅       | "basic"     |
| BEARER   | string | ✅       | "bearer"    |
| APIKEY   | string | ✅       | "apikey"    |
| DIGEST   | string | ✅       | "digest"    |
| OAUTH1   | string | ✅       | "oauth1"    |
| OAUTH2   | string | ✅       | "oauth2"    |
| HAWK     | string | ✅       | "hawk"      |
| AWSV4    | string | ✅       | "awsv4"     |
| NTLM     | string | ✅       | "ntlm"      |
| EDGEGRID | string | ✅       | "edgegrid"  |
| JWT      | string | ✅       | "jwt"       |
| ASAP     | string | ✅       | "asap"      |
