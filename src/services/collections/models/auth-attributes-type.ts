import { z } from 'zod';

export enum AuthAttributesType {
  STRING_ = 'string',
  BOOLEAN_ = 'boolean',
  NUMBER_ = 'number',
  ARRAY = 'array',
  OBJECT = 'object',
  ANY_ = 'any',
}
