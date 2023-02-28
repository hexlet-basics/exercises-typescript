import * as ta from 'type-assertions';

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

  list.next = list3
  list.prev = list2
  list2.next = list
  list2.prev = list3
  list3.prev = list
  list3.next = list2

  reverseDoubleLinkedList(list);

  expect(list.next).toBe(list2);
  expect(list.prev).toBe(list3);
  expect(list2.next).toBe(list3);
  expect(list2.prev).toBe(list);
  expect(list3.next).toBe(list);
  expect(list3.prev).toBe(list2);

  ta.assert<ta.Equal<ReturnType<typeof reverseDoubleLinkedList>, void>>();
  ta.assert<ta.Equal<Parameters<typeof reverseDoubleLinkedList>, [DoubleLinkedList]>>();
});
