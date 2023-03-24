// BEGIN
class Queue<T> {
  private data: T[] = [];

  enqueue(element: T): void {
    this.data.push(element);
  }

  dequeue(): T {
    if (this.data.length === 0) {
      throw new Error('Queue is empty');
    }
    return this.data.shift() as T;
  }
}
// END

export default Queue;
