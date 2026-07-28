import { z } from 'zod';

export enum RequestType {
  REQUEST_TO_ADD_MEMBERS = 'REQUEST_TO_ADD_MEMBERS',
  REQUEST_TO_JOIN = 'REQUEST_TO_JOIN',
  UPGRADE_ROLE = 'UPGRADE_ROLE',
}
