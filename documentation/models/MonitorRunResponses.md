# MonitorRunResponses

Information about the monitor run's response.

**Properties**

| Name         | Type   | Required | Description                                                                                            |
| :----------- | :----- | :------- | :----------------------------------------------------------------------------------------------------- |
| body         | any    | ❌       | Information about the request body, such as Content-Length.                                            |
| code         | number | ❌       | The response's HTTP status code.                                                                       |
| headers      | any    | ❌       | Information about the response headers, such as Content-Type, Accept, encoding, and other information. |
| responseSize | number | ❌       | The response size, in bytes.                                                                           |
| responseTime | number | ❌       | The response time, in milliseconds.                                                                    |
