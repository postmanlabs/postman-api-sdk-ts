# ImportExportFile

**Properties**

| Name  | Type                 | Required   | Description            |
| :---- | :------------------- | :--------- | :--------------------- | ---- | --- | ------------------------------------------- |
| type  | ImportExportFileType | ✅         | The `file` type value. |
| input | ArrayBuffer          | Uint8Array | Buffer                 | Blob | ✅  | A .zip file containing the definition file. |

# ImportExportFileType

The `file` type value.

**Properties**

| Name | Type   | Required | Description |
| :--- | :----- | :------- | :---------- |
| FILE | string | ✅       | "file"      |
