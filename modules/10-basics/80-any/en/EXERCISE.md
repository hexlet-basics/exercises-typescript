
Implement the `getParams()` function that takes a query string as input and returns the parameters as an object:

```typescript
getParams('per=10&page=5');
// { per: '10', page: '5' }
getParams('name=hexlet&count=3&order=asc');
// { name: 'hexlet', count: '3', order: 'asc' }
```

This task is best accomplished through the `reduce()` method.