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

const reverseDoubleLinkedList = (list: DoubleLinkedList): void => {
  const temp = list.prev;
  list.prev = list.next;
  list.next = temp;

  if (list.prev !== null) {
    reverseDoubleLinkedList(list.prev);
  }
};
// END

export { DoubleLinkedList };
export default reverseDoubleLinkedList;
