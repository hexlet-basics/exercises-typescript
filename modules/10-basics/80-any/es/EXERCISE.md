
Implementa la función `getParams()`, que recibe una cadena de consulta (query string) y devuelve los parámetros en forma de objeto:

```typescript
getParams("per=10&page=5");
// { per: '10', page: '5' }
getParams("name=hexlet&count=3&order=asc");
// { name: 'hexlet', count: '3', order: 'asc' }
```

Lo mejor es resolver esta tarea con el método `reduce()`.
