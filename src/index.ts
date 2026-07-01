import { Environment } from './http/environment';
import { SdkConfig } from './http/types';
import { BillingService } from './services/billing';
import { AnalyticsService } from './services/analytics';
import { AuditLogsService } from './services/audit-logs';
import { CollectionAccessKeysService } from './services/collection-access-keys';
import { CollectionsService } from './services/collections';
import { CollectionItemsService } from './services/collection-items';
import { CollectionFoldersService } from './services/collection-folders';
import { SpecsService } from './services/specs';
import { CollectionRequestsService } from './services/collection-requests';
import { CollectionResponsesService } from './services/collection-responses';
import { TagsService } from './services/tags';
import { CommentsService } from './services/comments';
import { ComponentsService } from './services/components';
import { SecretScannerService } from './services/secret-scanner';
import { EnvironmentsService } from './services/environments';
import { GroupsService } from './services/groups';
import { Import_Service } from './services/import_';
import { WorkspacesService } from './services/workspaces';
import { UsersService } from './services/users';
import { MocksService } from './services/mocks';
import { MonitorsService } from './services/monitors';
import { PrivateApiNetworkService } from './services/private-api-network';
import { OAuth2_0Service } from './services/o-auth-2-0';
import { PostbotService } from './services/postbot';
import { PullRequestsService } from './services/pull-requests';
import { ApiSecurityService } from './services/api-security';
import { ServiceAccountsService } from './services/service-accounts';
import { TeamsService } from './services/teams';
import { WebhooksService } from './services/webhooks';

export * from './services/billing';
export * from './services/analytics';
export * from './services/audit-logs';
export * from './services/collection-access-keys';
export * from './services/collections';
export * from './services/collection-items';
export * from './services/collection-folders';
export * from './services/specs';
export * from './services/collection-requests';
export * from './services/collection-responses';
export * from './services/tags';
export * from './services/comments';
export * from './services/components';
export * from './services/secret-scanner';
export * from './services/environments';
export * from './services/groups';
export * from './services/import_';
export * from './services/workspaces';
export * from './services/users';
export * from './services/mocks';
export * from './services/monitors';
export * from './services/private-api-network';
export * from './services/o-auth-2-0';
export * from './services/postbot';
export * from './services/pull-requests';
export * from './services/api-security';
export * from './services/service-accounts';
export * from './services/teams';
export * from './services/webhooks';
export * from './services/common';

export * from './http';
export { Environment } from './http/environment';

export class PostmanApiSdk {
  public readonly billing: BillingService;

  public readonly analytics: AnalyticsService;

  public readonly auditLogs: AuditLogsService;

  public readonly collectionAccessKeys: CollectionAccessKeysService;

  public readonly collections: CollectionsService;

  public readonly collectionItems: CollectionItemsService;

  public readonly collectionFolders: CollectionFoldersService;

  public readonly specs: SpecsService;

  public readonly collectionRequests: CollectionRequestsService;

  public readonly collectionResponses: CollectionResponsesService;

  public readonly tags: TagsService;

  public readonly comments: CommentsService;

  public readonly components: ComponentsService;

  public readonly secretScanner: SecretScannerService;

  public readonly environments: EnvironmentsService;

  public readonly groups: GroupsService;

  public readonly import_: Import_Service;

  public readonly workspaces: WorkspacesService;

  public readonly users: UsersService;

  public readonly mocks: MocksService;

  public readonly monitors: MonitorsService;

  public readonly privateApiNetwork: PrivateApiNetworkService;

  public readonly oAuth2_0: OAuth2_0Service;

  public readonly postbot: PostbotService;

  public readonly pullRequests: PullRequestsService;

  public readonly apiSecurity: ApiSecurityService;

  public readonly serviceAccounts: ServiceAccountsService;

  public readonly teams: TeamsService;

  public readonly webhooks: WebhooksService;

  constructor(public config: SdkConfig) {
    this.billing = new BillingService(this.config);

    this.analytics = new AnalyticsService(this.config);

    this.auditLogs = new AuditLogsService(this.config);

    this.collectionAccessKeys = new CollectionAccessKeysService(this.config);

    this.collections = new CollectionsService(this.config);

    this.collectionItems = new CollectionItemsService(this.config);

    this.collectionFolders = new CollectionFoldersService(this.config);

    this.specs = new SpecsService(this.config);

    this.collectionRequests = new CollectionRequestsService(this.config);

    this.collectionResponses = new CollectionResponsesService(this.config);

    this.tags = new TagsService(this.config);

    this.comments = new CommentsService(this.config);

    this.components = new ComponentsService(this.config);

    this.secretScanner = new SecretScannerService(this.config);

    this.environments = new EnvironmentsService(this.config);

    this.groups = new GroupsService(this.config);

    this.import_ = new Import_Service(this.config);

    this.workspaces = new WorkspacesService(this.config);

    this.users = new UsersService(this.config);

    this.mocks = new MocksService(this.config);

    this.monitors = new MonitorsService(this.config);

    this.privateApiNetwork = new PrivateApiNetworkService(this.config);

    this.oAuth2_0 = new OAuth2_0Service(this.config);

    this.postbot = new PostbotService(this.config);

    this.pullRequests = new PullRequestsService(this.config);

    this.apiSecurity = new ApiSecurityService(this.config);

    this.serviceAccounts = new ServiceAccountsService(this.config);

    this.teams = new TeamsService(this.config);

    this.webhooks = new WebhooksService(this.config);
  }

  set baseUrl(baseUrl: string) {
    this.billing.baseUrl = baseUrl;
    this.analytics.baseUrl = baseUrl;
    this.auditLogs.baseUrl = baseUrl;
    this.collectionAccessKeys.baseUrl = baseUrl;
    this.collections.baseUrl = baseUrl;
    this.collectionItems.baseUrl = baseUrl;
    this.collectionFolders.baseUrl = baseUrl;
    this.specs.baseUrl = baseUrl;
    this.collectionRequests.baseUrl = baseUrl;
    this.collectionResponses.baseUrl = baseUrl;
    this.tags.baseUrl = baseUrl;
    this.comments.baseUrl = baseUrl;
    this.components.baseUrl = baseUrl;
    this.secretScanner.baseUrl = baseUrl;
    this.environments.baseUrl = baseUrl;
    this.groups.baseUrl = baseUrl;
    this.import_.baseUrl = baseUrl;
    this.workspaces.baseUrl = baseUrl;
    this.users.baseUrl = baseUrl;
    this.mocks.baseUrl = baseUrl;
    this.monitors.baseUrl = baseUrl;
    this.privateApiNetwork.baseUrl = baseUrl;
    this.oAuth2_0.baseUrl = baseUrl;
    this.postbot.baseUrl = baseUrl;
    this.pullRequests.baseUrl = baseUrl;
    this.apiSecurity.baseUrl = baseUrl;
    this.serviceAccounts.baseUrl = baseUrl;
    this.teams.baseUrl = baseUrl;
    this.webhooks.baseUrl = baseUrl;
  }

  set environment(environment: Environment) {
    this.billing.baseUrl = environment;
    this.analytics.baseUrl = environment;
    this.auditLogs.baseUrl = environment;
    this.collectionAccessKeys.baseUrl = environment;
    this.collections.baseUrl = environment;
    this.collectionItems.baseUrl = environment;
    this.collectionFolders.baseUrl = environment;
    this.specs.baseUrl = environment;
    this.collectionRequests.baseUrl = environment;
    this.collectionResponses.baseUrl = environment;
    this.tags.baseUrl = environment;
    this.comments.baseUrl = environment;
    this.components.baseUrl = environment;
    this.secretScanner.baseUrl = environment;
    this.environments.baseUrl = environment;
    this.groups.baseUrl = environment;
    this.import_.baseUrl = environment;
    this.workspaces.baseUrl = environment;
    this.users.baseUrl = environment;
    this.mocks.baseUrl = environment;
    this.monitors.baseUrl = environment;
    this.privateApiNetwork.baseUrl = environment;
    this.oAuth2_0.baseUrl = environment;
    this.postbot.baseUrl = environment;
    this.pullRequests.baseUrl = environment;
    this.apiSecurity.baseUrl = environment;
    this.serviceAccounts.baseUrl = environment;
    this.teams.baseUrl = environment;
    this.webhooks.baseUrl = environment;
  }

  set timeoutMs(timeoutMs: number) {
    this.billing.timeoutMs = timeoutMs;
    this.analytics.timeoutMs = timeoutMs;
    this.auditLogs.timeoutMs = timeoutMs;
    this.collectionAccessKeys.timeoutMs = timeoutMs;
    this.collections.timeoutMs = timeoutMs;
    this.collectionItems.timeoutMs = timeoutMs;
    this.collectionFolders.timeoutMs = timeoutMs;
    this.specs.timeoutMs = timeoutMs;
    this.collectionRequests.timeoutMs = timeoutMs;
    this.collectionResponses.timeoutMs = timeoutMs;
    this.tags.timeoutMs = timeoutMs;
    this.comments.timeoutMs = timeoutMs;
    this.components.timeoutMs = timeoutMs;
    this.secretScanner.timeoutMs = timeoutMs;
    this.environments.timeoutMs = timeoutMs;
    this.groups.timeoutMs = timeoutMs;
    this.import_.timeoutMs = timeoutMs;
    this.workspaces.timeoutMs = timeoutMs;
    this.users.timeoutMs = timeoutMs;
    this.mocks.timeoutMs = timeoutMs;
    this.monitors.timeoutMs = timeoutMs;
    this.privateApiNetwork.timeoutMs = timeoutMs;
    this.oAuth2_0.timeoutMs = timeoutMs;
    this.postbot.timeoutMs = timeoutMs;
    this.pullRequests.timeoutMs = timeoutMs;
    this.apiSecurity.timeoutMs = timeoutMs;
    this.serviceAccounts.timeoutMs = timeoutMs;
    this.teams.timeoutMs = timeoutMs;
    this.webhooks.timeoutMs = timeoutMs;
  }

  set username(username: string) {
    this.billing.username = username;
    this.analytics.username = username;
    this.auditLogs.username = username;
    this.collectionAccessKeys.username = username;
    this.collections.username = username;
    this.collectionItems.username = username;
    this.collectionFolders.username = username;
    this.specs.username = username;
    this.collectionRequests.username = username;
    this.collectionResponses.username = username;
    this.tags.username = username;
    this.comments.username = username;
    this.components.username = username;
    this.secretScanner.username = username;
    this.environments.username = username;
    this.groups.username = username;
    this.import_.username = username;
    this.workspaces.username = username;
    this.users.username = username;
    this.mocks.username = username;
    this.monitors.username = username;
    this.privateApiNetwork.username = username;
    this.oAuth2_0.username = username;
    this.postbot.username = username;
    this.pullRequests.username = username;
    this.apiSecurity.username = username;
    this.serviceAccounts.username = username;
    this.teams.username = username;
    this.webhooks.username = username;
  }

  set password(password: string) {
    this.billing.password = password;
    this.analytics.password = password;
    this.auditLogs.password = password;
    this.collectionAccessKeys.password = password;
    this.collections.password = password;
    this.collectionItems.password = password;
    this.collectionFolders.password = password;
    this.specs.password = password;
    this.collectionRequests.password = password;
    this.collectionResponses.password = password;
    this.tags.password = password;
    this.comments.password = password;
    this.components.password = password;
    this.secretScanner.password = password;
    this.environments.password = password;
    this.groups.password = password;
    this.import_.password = password;
    this.workspaces.password = password;
    this.users.password = password;
    this.mocks.password = password;
    this.monitors.password = password;
    this.privateApiNetwork.password = password;
    this.oAuth2_0.password = password;
    this.postbot.password = password;
    this.pullRequests.password = password;
    this.apiSecurity.password = password;
    this.serviceAccounts.password = password;
    this.teams.password = password;
    this.webhooks.password = password;
  }

  set apiKey(apiKey: string) {
    this.billing.apiKey = apiKey;
    this.analytics.apiKey = apiKey;
    this.auditLogs.apiKey = apiKey;
    this.collectionAccessKeys.apiKey = apiKey;
    this.collections.apiKey = apiKey;
    this.collectionItems.apiKey = apiKey;
    this.collectionFolders.apiKey = apiKey;
    this.specs.apiKey = apiKey;
    this.collectionRequests.apiKey = apiKey;
    this.collectionResponses.apiKey = apiKey;
    this.tags.apiKey = apiKey;
    this.comments.apiKey = apiKey;
    this.components.apiKey = apiKey;
    this.secretScanner.apiKey = apiKey;
    this.environments.apiKey = apiKey;
    this.groups.apiKey = apiKey;
    this.import_.apiKey = apiKey;
    this.workspaces.apiKey = apiKey;
    this.users.apiKey = apiKey;
    this.mocks.apiKey = apiKey;
    this.monitors.apiKey = apiKey;
    this.privateApiNetwork.apiKey = apiKey;
    this.oAuth2_0.apiKey = apiKey;
    this.postbot.apiKey = apiKey;
    this.pullRequests.apiKey = apiKey;
    this.apiSecurity.apiKey = apiKey;
    this.serviceAccounts.apiKey = apiKey;
    this.teams.apiKey = apiKey;
    this.webhooks.apiKey = apiKey;
  }

  set apiKeyHeader(apiKeyHeader: string) {
    this.billing.apiKeyHeader = apiKeyHeader;
    this.analytics.apiKeyHeader = apiKeyHeader;
    this.auditLogs.apiKeyHeader = apiKeyHeader;
    this.collectionAccessKeys.apiKeyHeader = apiKeyHeader;
    this.collections.apiKeyHeader = apiKeyHeader;
    this.collectionItems.apiKeyHeader = apiKeyHeader;
    this.collectionFolders.apiKeyHeader = apiKeyHeader;
    this.specs.apiKeyHeader = apiKeyHeader;
    this.collectionRequests.apiKeyHeader = apiKeyHeader;
    this.collectionResponses.apiKeyHeader = apiKeyHeader;
    this.tags.apiKeyHeader = apiKeyHeader;
    this.comments.apiKeyHeader = apiKeyHeader;
    this.components.apiKeyHeader = apiKeyHeader;
    this.secretScanner.apiKeyHeader = apiKeyHeader;
    this.environments.apiKeyHeader = apiKeyHeader;
    this.groups.apiKeyHeader = apiKeyHeader;
    this.import_.apiKeyHeader = apiKeyHeader;
    this.workspaces.apiKeyHeader = apiKeyHeader;
    this.users.apiKeyHeader = apiKeyHeader;
    this.mocks.apiKeyHeader = apiKeyHeader;
    this.monitors.apiKeyHeader = apiKeyHeader;
    this.privateApiNetwork.apiKeyHeader = apiKeyHeader;
    this.oAuth2_0.apiKeyHeader = apiKeyHeader;
    this.postbot.apiKeyHeader = apiKeyHeader;
    this.pullRequests.apiKeyHeader = apiKeyHeader;
    this.apiSecurity.apiKeyHeader = apiKeyHeader;
    this.serviceAccounts.apiKeyHeader = apiKeyHeader;
    this.teams.apiKeyHeader = apiKeyHeader;
    this.webhooks.apiKeyHeader = apiKeyHeader;
  }
}

// c029837e0e474b76bc487506e8799df5e3335891efe4fb02bda7a1441840310c
