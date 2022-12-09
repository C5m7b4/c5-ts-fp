type Node<T> = {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;
};

export class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.length = 0;
  }

  prepend(item: T): void {
    return undefined;
  }

  insertAt(item: T, idx: number): void {
    return undefined;
  }

  append(item: T): void {
    return undefined;
  }

  remove(item: T): T | undefined {
    return undefined;
  }

  get(idx: number): T | undefined {
    let curr = this.head;
    for (let i = 0; i < idx && curr; i++) {
      curr = curr.next;
    }

    return curr?.value;
  }

  removeAt(idx: number): T | undefined {
    return undefined;
  }
}
