Реализуйте функцию `deepFreeze()`, которая принимает на вход объект и делает его самого, его поля и все вложенные объекты неизменяемыми и возвращает этот объект.
Предполагается что поля объекта и поля вложенных объектов не содержат массивы, только простые типы данных и объекты.

```typescript
const user = deepFreeze({
  name: 'John',
  password: '1q2w3e',
  token: 'test',
});

user.name = 'Alex'; // Error: Cannot assign to 'name' because it is a read-only property.
```

Нужно использовать встроенный в JavaScript метод [Object.freeze()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze).
