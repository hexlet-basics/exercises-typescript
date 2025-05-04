
Another useful use of static properties and methods is to create factory methods. A factory method is a static method that returns a new instance of a class. Implement a `UserResponse` class with a `user: string` field and a factory method `fromArray` that takes an array and returns an array of instances of the `UserResponse` class:

```typescript
const response = UserResponse.fromArray(['user1', 'user2', 'user3']);
console.log(response[0].user); // user1
console.log(response[0] instanceof UserResponse); // true
```
