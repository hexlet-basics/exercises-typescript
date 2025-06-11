
Реализуйте функцию `getUserFriends(userResponseJSON, userId)`, которая принимает на вход JSON-строку и `userId` пользователя. JSON содержит массив пользователей `users` и массив друзей `friends` в виде пар `[userId, userId]`. Функция возвращает список друзей пользователя по переданному `userId``.

Если пользователь с указанным id не найден, то функция должна вернуть пустой массив.

```typescript
const userJson = JSON.stringify({
  users: [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Mary', age: 21 },
  ],
  friends: [
    [1, 2],
  ],
});

getUserFriends(userJson, 1); // [{ id: 2, name: 'Mary', age: 21 }]
getUserFriends(userJson, 2); // [{ id: 1, name: 'John', age: 20 }]
getUserFriends(userJson, 3); // []
```
