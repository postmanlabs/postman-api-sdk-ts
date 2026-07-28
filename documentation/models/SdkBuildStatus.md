# SdkBuildStatus

The SDK's build lifecycle: - `queued` — Accepted but not yet started. - `in_progress` — The SDK generation is running and in progress. - `succeeded` — The archive is built and available for download. - `failed` — The SDK generation failed. For information, check the `error` response.

**Properties**

| Name        | Type   | Required | Description   |
| :---------- | :----- | :------- | :------------ |
| QUEUED      | string | ✅       | "queued"      |
| IN_PROGRESS | string | ✅       | "in_progress" |
| SUCCEEDED   | string | ✅       | "succeeded"   |
| FAILED      | string | ✅       | "failed"      |
