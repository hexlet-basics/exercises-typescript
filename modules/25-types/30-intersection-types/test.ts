import reverseDoubleLinkedList, { DoubleLinkedList } from './index';

test('reverseDoubleLinkedList', () => {
  const list: DoubleLinkedList = {
    value: 1,
    next: null,
    prev: null,
  };

  reverseDoubleLinkedList(list);
  expect(list).toEqual(list);

  const list2: DoubleLinkedList = {
    value: 2,
    next: null,
    prev: list,
  };
  list.next = list2;

  const list3: DoubleLinkedList = {
    value: 3,
    prev: list2,
    next: null,
  };
  list2.next = list3;

  reverseDoubleLinkedList(list);

  expect(list.next).toBe(null);
  expect(list.prev).toBe(list2);
  expect(list2.next).toBe(list);
  expect(list2.prev).toBe(list3);
});
