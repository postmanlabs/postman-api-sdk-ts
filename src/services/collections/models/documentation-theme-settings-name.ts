import { z } from 'zod';

export const documentationThemeSettingsName = z.union([z.literal('dark'), z.literal('light')]);

export type DocumentationThemeSettingsName = z.infer<typeof documentationThemeSettingsName>;
