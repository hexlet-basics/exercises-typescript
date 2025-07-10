
Implement a queue class (`Queue`) with `enqueue` and `dequeue` methods. The `enqueue` method adds an item to the end of the queue, and the `dequeue` method removes an item from the beginning of the queue. If the queue is empty, an `Error` exception must be thrown when the `dequeue` method is called:

```typescript
const queue = new Queue<number>();
queue.enqueue(1);
queue.dequeue(); // 1
queue.dequeue(); // Error: Queue is empty
```
