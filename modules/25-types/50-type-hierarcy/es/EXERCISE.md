
Implementa la función `getUserFriends(userResponseJSON, userId)`, que recibe una cadena JSON y el `userId` de un usuario. El JSON contiene el array de usuarios `users` y el array de amigos `friends` en forma de pares `[userId, userId]`. La función devuelve la lista de amigos del usuario con el `userId` recibido.

Si no se encuentra el usuario con el id indicado, la función debe devolver un array vacío.

```typescript
const userJson = JSON.stringify({
  users: [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Mary", age: 21 },
  ],
  friends: [[1, 2]],
});

getUserFriends(userJson, 1); // [{ id: 2, name: 'Mary', age: 21 }]
getUserFriends(userJson, 2); // [{ id: 1, name: 'John', age: 20 }]
getUserFriends(userJson, 3); // []
```
