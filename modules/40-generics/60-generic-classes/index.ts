// BEGIN
class Queue<T> {
  private data: T[] = [];

  enqueue(element: T) {
    this.data.push(element);
  }

  dequeue() {
    if (this.data.length === 0) {
      throw new Error('Queue is empty');
    }
    return this.data.shift();
  }
}
// END

export default Queue;
