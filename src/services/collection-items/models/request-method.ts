import { z } from 'zod';

export enum RequestMethod {
  GET_ = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  PATCH = 'PATCH',
  DELETE_ = 'DELETE',
  COPY = 'COPY',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  LINK = 'LINK',
  UNLINK = 'UNLINK',
  PURGE = 'PURGE',
  LOCK = 'LOCK',
  UNLOCK = 'UNLOCK',
  PROPFIND = 'PROPFIND',
  VIEW = 'VIEW',
}
