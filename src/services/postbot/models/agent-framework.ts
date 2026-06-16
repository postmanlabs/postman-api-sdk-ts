import { z } from 'zod';

export const agentFramework = z.union([
  z.literal('openai'),
  z.literal('mistral'),
  z.literal('gemini'),
  z.literal('anthropic'),
  z.literal('langchain'),
  z.literal('autogen'),
]);

export type AgentFramework = z.infer<typeof agentFramework>;
