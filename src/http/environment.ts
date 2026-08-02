/**
 * Available API environments with their base URLs.
 * Use these constants to configure the SDK for different environments (production, staging, etc.).
 */
export enum Environment {
  /** DEFAULT environment base URL */
  DEFAULT = 'https://api.postman.com',
  /** API environment base URL */
  API = 'https://api.postman.com',
  /** API_EU environment base URL */
  API_EU = 'https://api.eu.postman.com',
}
