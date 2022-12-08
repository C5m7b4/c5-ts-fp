export class RingBuffer<T> {
  private buffer = [];
  private size: number;

  constructor(size: number) {
    this.size = size;
  }

  public getSize(): number {
    return this.size;
  }

  public add(...items: T[]) {
    // @ts-ignore
    this.buffer.push(...items);
    this.crop();
  }

  public clear() {
    this.buffer = [];
  }

  public toArray() {
    return this.buffer.slice();
  }

  public fromArray(value: T[]) {
    this.clear();
    this.add(...value);
  }

  public crop() {
    while (this.buffer.length > this.size) {
      this.buffer.shift();
    }
  }
}
