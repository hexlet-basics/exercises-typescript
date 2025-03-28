import * as ta from 'type-assertions';
import { expect, test } from 'vitest';

import createAccessChecker from './index';

test('function', () => {
  type UserRole = 'admin' | 'user' | 'guest';
  type UserResource = 'document' | 'user' | 'adminPanel';

  const userRolePermissions: Record<UserRole, Array<UserResource>> = {
    admin: ['document', 'user', 'adminPanel'],
    user: ['document', 'user'],
    guest: ['document'],
  };

  const checkUserAccess = createAccessChecker<UserRole, UserResource>(userRolePermissions);

  const isAdminAllowed = checkUserAccess('admin', 'adminPanel');
  expect(isAdminAllowed).toBe(true);

  const isUserAllowed = checkUserAccess('user', 'adminPanel');
  expect(isUserAllowed).toBe(false);

  ta.assert<ta.Equal<Parameters<typeof checkUserAccess>, [UserRole, UserResource]>>();
});
