import { z } from 'zod';

export enum ReviewPullRequestAction {
  APPROVE = 'approve',
  DECLINE = 'decline',
  MERGE = 'merge',
  UNAPPROVE = 'unapprove',
}
