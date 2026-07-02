import { z } from 'zod';

export enum AgentFramework {
  OPENAI = 'openai',
  MISTRAL = 'mistral',
  GEMINI = 'gemini',
  ANTHROPIC = 'anthropic',
  LANGCHAIN = 'langchain',
  AUTOGEN = 'autogen',
}
