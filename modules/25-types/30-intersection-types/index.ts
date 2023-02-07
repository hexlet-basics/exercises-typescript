type SinglyLinkedList = {
    value: unknown;
    next: SinglyLinkedList | null;
}

// BEGIN
type DoubleLinkedList = SinglyLinkedList & {
    prev: DoubleLinkedList | null;
    next: DoubleLinkedList | null;
}

const reverseDoubleLinkedList = (head: DoubleLinkedList): void => {
    let current: DoubleLinkedList | null = head;
    let prev = null;
    let next = null;

    while (current) {
        next = current.next;
        prev = current.prev;

        current.next = prev;
        current.prev = next;

        prev = current;
        current = next;
    }
}
// END

export { DoubleLinkedList };
export default reverseDoubleLinkedList;
