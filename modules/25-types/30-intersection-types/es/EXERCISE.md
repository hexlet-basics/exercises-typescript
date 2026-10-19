Implementa el tipo `Admin`, que es la intersección de los tipos `AdminPermission` y `User`. Implementa la función `addAdmin()`, que recibe un valor de tipo `User` y devuelve un valor de tipo `Admin`. El valor de la propiedad `permission` debe ser `Permission.READ`.

```typescript
const user: User = { login: "login1" };
const admin = addAdmin(user); // { login: 'login1', permission: Permission.READ }
```
