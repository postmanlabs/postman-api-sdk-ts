import { z } from 'zod';

export const importExportFileType = z.literal('file');

export type ImportExportFileType = z.infer<typeof importExportFileType>;
