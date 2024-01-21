
Реализуйте функцию `createAccessChecker()`, которая принимает на вход объект с разрешениями для ролей и возвращает функцию, проверяющую, есть ли у пользователя доступ к ресурсу.

```typescript
type UserRole = 'admin' | 'user' | 'guest';
type UserResource = 'document' | 'user' | 'adminPanel';

const userRolePermissions: Record<UserRole, Array<UserResource>> = {
  admin: ['document', 'user', 'adminPanel'],
  user: ['document', 'user'],
  guest: ['document'],
};

const checkUserAccess = createAccessChecker<UserRole, UserResource>(userRolePermissions);

const isAdminAllowed = checkUserAccess('admin', 'adminPanel');
console.log(isAdminAllowed); // => true

const isUserAllowed = checkUserAccess('user', 'adminPanel');
console.log(isUserAllowed); // => false
```
