# ProvenanceStep

A single read-only tool call the ask made while answering the question.

**Properties**

| Name     | Type   | Required | Description                                                                                                    |
| :------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------- |
| tool     | string | ✅       | The name of the read-only tool that was called.                                                                |
| type     | string | ❌       | The preset query type the tool was called with. This property is only present if the tool was called with one. |
| rowCount | number | ❌       | The number of rows the tool returned.                                                                          |
| error    | string | ❌       | The error message for this step. This property is only present if the step failed.                             |
