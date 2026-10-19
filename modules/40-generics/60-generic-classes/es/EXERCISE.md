
Implementa la clase de cola (`Queue`) con los métodos `enqueue` y `dequeue`. El método `enqueue` añade un elemento al final de la cola y el método `dequeue` elimina un elemento del inicio de la cola. Si la cola está vacía, al llamar al método `dequeue` debe lanzarse una excepción `Error`:

```typescript
const queue = new Queue<number>();
queue.enqueue(1);
queue.dequeue(); // 1
queue.dequeue(); // Error: Queue is empty
```
