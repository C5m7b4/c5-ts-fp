export class ArrayList<T> {
  public length: number;
  public data: any;

  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(x: T): void {
    this.data[this.length] = x;
    this.length++;
  }

  pop(): T | null {
    if (this.length === 0) {
      return null;
    }
    const response = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return response;
  }

  get(idx: number): T | null {
    if (idx > this.length) {
      return null;
    }
    return this.data[idx];
  }

  delete(idx: number): void {
    const response = this.data[idx];
    this._collapseTo(idx);
    return response;
  }

  private _collapseTo(idx: number) {
    for (let i = idx; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
