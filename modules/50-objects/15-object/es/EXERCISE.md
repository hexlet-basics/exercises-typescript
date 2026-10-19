
Implementa la función `extract(object, keys)`, que devuelve un nuevo objeto con las claves especificadas. Por ejemplo:

```typescript
const user = {
  name: "Tirion",
  email: "tirion@lanister.got",
  age: 35,
};

extract(user, ["name", "age"]); // { name: 'Tirion', age: 35 }
```
