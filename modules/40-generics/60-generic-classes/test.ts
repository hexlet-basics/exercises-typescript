import Queue from './index';

test('Queue', () => {
  const queue = new Queue<number>();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(2);
  expect(queue.dequeue()).toBe(3);
  expect(() => queue.dequeue()).toThrow();

  const queue2 = new Queue<string>();
  queue2.enqueue('one');
  queue2.enqueue('two');
  expect(queue2.dequeue()).toBe('one');
  expect(queue2.dequeue()).toBe('two');
  expect(() => queue2.dequeue()).toThrow();
});
