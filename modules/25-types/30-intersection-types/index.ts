/* eslint-disable no-param-reassign */
type SinglyLinkedList = {
  value: unknown;
  next: SinglyLinkedList | null;
};

// BEGIN
type DoubleLinkedList = SinglyLinkedList & {
  next: DoubleLinkedList | null;
  prev: DoubleLinkedList | null;
};

const reverseDoubleLinkedList = (list: DoubleLinkedList, map = new WeakMap<DoubleLinkedList, boolean>()): void => {
  if (map.get(list)) {
    return
  }

  const temp = list.prev;
  list.prev = list.next;
  list.next = temp;

  if (list.prev !== null) {
    map.set(list, true)
    reverseDoubleLinkedList(list.prev, map);
  }
};
// END

export { DoubleLinkedList };
export default reverseDoubleLinkedList;
