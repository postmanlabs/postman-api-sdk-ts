# GetSecretTypesOkResponse

**Properties**

| Name | Type                                                                      | Required | Description                                    |
| :--- | :------------------------------------------------------------------------ | :------- | :--------------------------------------------- |
| data | [SecretTypeData](SecretTypeData.md)[]                                     | ❌       | A list of secret types the scanner can detect. |
| meta | [SecretScannerMetaTotalSecretsData](SecretScannerMetaTotalSecretsData.md) | ❌       | Aggregate counts across the returned records.  |
