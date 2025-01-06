import { CBA_ORG_STRUCTURE } from './ventures';

export const USER_ROLES = {
  global: [
    'admin',
    'x15-risk',
    'x15-lt',
    'practice-lead',
    'cba-risk',
    'x15-security'
  ],
  scoped: [
    'x15-observer',
    'x15-reviewer',
    'venture-staff',
    'venture-lt',
    'venture-base',
    'venture-risk'
  ]
} as const;

export type GlobalUserRole = typeof USER_ROLES['global'][number];
export type ScopedUserRole = typeof USER_ROLES['scoped'][number];

export type USER = {
  cbaOrg?: keyof typeof CBA_ORG_STRUCTURE,
  roles?: {
    global: GlobalUserRole,
    scoped: ScopedUserRole
  },
  theme?: string;
}
