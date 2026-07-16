# SdkDownload

**Properties**

| Name      | Type                          | Required | Description                                                  |
| :-------- | :---------------------------- | :------- | :----------------------------------------------------------- |
| id        | string                        | ✅       | The SDK's ID.                                                |
| language  | [SdkLanguage](SdkLanguage.md) | ✅       | The target output language for the generated SDK.            |
| url       | string                        | ✅       | A short-lived signed URL to the generated SDK archive (zip). |
| expiresAt | string                        | ✅       | The date and time at which the signed URL expires.           |
