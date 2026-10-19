
Implementa el namespace `Company`, que exporta la función `isEmployeeEmail()`. La función recibe un correo electrónico y un dominio. Si el correo del usuario contiene el dominio indicado, la función devuelve `true`:

```typescript
Company.isEmployeeEmail("tirion@hexlet.io", "hexlet.io");
// true

Company.isEmployeeEmail("user@example.com", "hexlet.io");
// false
```
