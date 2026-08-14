
Implement a `createAccessChecker()` function that takes an object with role permissions as input and returns a function that checks whether a user has access to a resource.

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

The returned function takes exactly two arguments — a role and a resource — and returns a `boolean`. The types of the arguments come from the parameters of `createAccessChecker()`: in the example above they are `UserRole` and `UserResource`.
