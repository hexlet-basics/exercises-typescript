import addAdmin, { User, Permission } from './index';

test('addAdmin', () => {
  const user: User = {
    login: 'login1',
  };

  const admin = addAdmin(user);
  expect(admin).toEqual({ ...user, permission: Permission.READ });
});
