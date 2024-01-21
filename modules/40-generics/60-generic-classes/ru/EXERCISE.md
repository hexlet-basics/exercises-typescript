
Реализуйте класс очереди (`Queue`) с методами `enqueue` и `dequeue`. Метод `enqueue` добавляет элемент в конец очереди, а метод `dequeue` удаляет элемент из начала очереди. Если очередь пуста, то при вызове метода `dequeue` должно быть выброшено исключение `Error`:

```typescript
const queue = new Queue<number>();
queue.enqueue(1);
queue.dequeue(); // 1
queue.dequeue(); // Error: Queue is empty
```
