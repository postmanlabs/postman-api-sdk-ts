# RequestAuth

The request's authentication information.

**Properties**

| Name     | Type                                  | Required | Description                                        |
| :------- | :------------------------------------ | :------- | :------------------------------------------------- |
| type     | RequestAuthType                       | ✅       | The authorization type.                            |
| apikey   | [AuthAttributes](AuthAttributes.md)[] | ❌       | The API key's authentication information.          |
| awsv4    | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for AWS Signature authentication.   |
| basic    | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for Basic Auth.                     |
| bearer   | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for Bearer Token authentication.    |
| digest   | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for Digest access authentication.   |
| edgegrid | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for Akamai Edgegrid authentication. |
| hawk     | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for Hawk authentication.            |
| ntlm     | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for NTLM authentication.            |
| oauth1   | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for OAuth1 authentication.          |
| oauth2   | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for OAuth2 authentication.          |
| jwt      | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for JWT authentication.             |
| asap     | [AuthAttributes](AuthAttributes.md)[] | ❌       | The attributes for ASAP authentication.            |

# RequestAuthType

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
| NOAUTH   | string | ✅       | "noauth"    |
