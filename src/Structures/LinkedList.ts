type SingleNode<T> = {
  value: T;
  next: SingleNode<T>;
};

export class LinkedList<T> {
  public length: number;
  private head?: SingleNode<T>;
  private tail?: SingleNode<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  push(v: T) {
    const node = { value: v } as SingleNode<T>;
    this.length++;
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      // this.tail = node;
      // @ts-ignore
      this.tail.next = node;
    }
    this.tail = node;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  find(idx: number): SingleNode<T> | null | undefined {
    if (idx >= this.length) return null;

    let curr = this.head;

    for (let i = 0; i <= idx - 1; i++) {
      curr = curr?.next;
    }
    return curr;
  }

  get(idx: number): T | null {
    const node = this.find(idx);
    if (!node) return null;
    return node.value;
  }

  delete(idx: number) {
    if (idx === 0) {
      const head = this.head;
      if (head) {
        this.head = head.next;
      } else {
        this.head = undefined;
      }
      if (head) {
        this.length--;
        return head?.value;
      } else {
        return null;
      }
    }

    const node = this.find(idx - 1);
    const excise = node?.next;
    if (!excise) return null;

    node.next = excise.next;
    if (!node.next) this.tail = node.next;
    this.length--;
    return excise.value;
  }
}
