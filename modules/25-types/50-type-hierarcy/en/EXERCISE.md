
Implement a function `getUserFriends(userResponseJSON, userId)` that takes a JSON string and the `userId` of a user as input. The JSON contains an array of users `users` and with an array of friends `friends` as `[userId, userId]` pairs. The function returns the list of user's friends by the passed `userId`.

If the user with the specified ID is not found, the function should return an empty array.

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
