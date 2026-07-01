# GetApiCatalogServiceTrafficData

Information about traffic and performance within the time window. If there's no traffic data, this returns a null value.

**Properties**

| Name                  | Type   | Required | Description                                                                         |
| :-------------------- | :----- | :------- | :---------------------------------------------------------------------------------- |
| p95LatencyMs          | number | ❌       | The 95th-percentile response latency, in milliseconds.                              |
| errorRatePct          | number | ❌       | The percentage of requests that resulted in errors.                                 |
| totalRequests         | number | ❌       | The total number of requests.                                                       |
| totalRequestsDeltaPct | number | ❌       | The percentage change in total requests compared to the preceding seven day window. |
| totalErrors           | number | ❌       | The total number of error responses.                                                |
| totalEndpoints        | number | ❌       | The total number of distinct endpoints.                                             |
| p95LatencyMsDeltaPct  | number | ❌       | The percentage change in p95 latency compared to the preceding seven day window.    |
| errorRatePctDeltaPct  | number | ❌       | The percentage change in error rate compared to the preceding seven day window.     |
