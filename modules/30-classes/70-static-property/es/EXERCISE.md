
Otro uso útil de las propiedades y los métodos estáticos es la creación de métodos de fábrica. Un método de fábrica es un método estático que devuelve una nueva instancia de la clase. Implementa la clase `UserResponse` con el campo `user: string` y el método de fábrica `fromArray`, que recibe un array y devuelve un array de instancias de la clase `UserResponse`:

```typescript
const response = UserResponse.fromArray(["user1", "user2", "user3"]);
console.log(response[0].user); // user1
console.log(response[0] instanceof UserResponse); // true
```
