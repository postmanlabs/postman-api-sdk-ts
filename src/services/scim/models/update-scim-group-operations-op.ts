import { z } from 'zod';

export enum UpdateScimGroupOperationsOp {
  REPLACE = 'replace',
  REMOVE = 'remove',
  ADD = 'add',
}
