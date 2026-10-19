
Implementa la función `createAccessChecker()`, que recibe un objeto con los permisos de cada rol y devuelve una función que comprueba si un usuario tiene acceso a un recurso.

```typescript
type UserRole = "admin" | "user" | "guest";
type UserResource = "document" | "user" | "adminPanel";

const userRolePermissions: Record<UserRole, Array<UserResource>> = {
  admin: ["document", "user", "adminPanel"],
  user: ["document", "user"],
  guest: ["document"],
};

const checkUserAccess = createAccessChecker<UserRole, UserResource>(userRolePermissions);

const isAdminAllowed = checkUserAccess("admin", "adminPanel");
console.log(isAdminAllowed); // => true

const isUserAllowed = checkUserAccess("user", "adminPanel");
console.log(isUserAllowed); // => false
```

La función devuelta recibe exactamente dos argumentos, un rol y un recurso, y devuelve `boolean`. Los tipos de los argumentos se definen con los parámetros de `createAccessChecker()`: en el ejemplo anterior son `UserRole` y `UserResource`.
