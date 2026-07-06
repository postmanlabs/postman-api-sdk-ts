import { z } from 'zod';

export enum RequestAuthType {
  BASIC = 'basic',
  BEARER = 'bearer',
  APIKEY = 'apikey',
  DIGEST = 'digest',
  OAUTH1 = 'oauth1',
  OAUTH2 = 'oauth2',
  HAWK = 'hawk',
  AWSV4 = 'awsv4',
  NTLM = 'ntlm',
  EDGEGRID = 'edgegrid',
  JWT = 'jwt',
  ASAP = 'asap',
  NOAUTH = 'noauth',
}
