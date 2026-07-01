// Type declarations for the self-contained enrich script (enrich-pr.mjs).
export function extractSpecVersion(specYaml: string): string;

export interface OasdiffSummary {
  breaking: boolean;
  summary: string;
}
export function summarizeOasdiff(breakingParsed: unknown): OasdiffSummary;

export interface RenderPrBodyInput {
  version: string;
  diffMarkdown: string;
  breaking: boolean;
  ciRunUrl?: string;
  existingBody?: string;
}
export function renderPrBody(input: RenderPrBodyInput): string;
