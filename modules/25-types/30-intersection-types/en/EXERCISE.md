Implement `Admin` type, which is the intersection of `AdminPermission` and `User` types. Implement the `addAdmin()` function that takes a value with the `User` type and returns a value with the `Admin` type. The value for the `permission` property should be `Permission.READ`.

```typescript
const user: User = { login: 'login1' };
const admin = addAdmin(user); // { login: 'login1', permission: Permission.READ }
```
