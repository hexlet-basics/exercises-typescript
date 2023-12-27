
Реализуйте функцию `getParams()`, которая принимает на вход строку запроса (query string) и возвращает параметры в виде объекта:

```typescript
getParams('per=10&page=5');
// { per: '10', page: '5' }
getParams('name=hexlet&count=3&order=asc');
// { name: 'hexlet', count: '3', order: 'asc' }
```

Эту задачу лучше всего решать через метод `reduce()`.
