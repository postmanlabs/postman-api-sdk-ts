import { z } from 'zod';

export enum HttpMethodsToRetry {
  GET_ = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE_ = 'DELETE',
  PATCH = 'PATCH',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS',
  CONNECT = 'CONNECT',
  TRACE = 'TRACE',
}
