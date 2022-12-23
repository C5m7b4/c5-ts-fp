export type AdjacencyVertex<T> = {
  node: T;
  edges: number[];
};

/**
 * AdjacencyGraph<T>
 */
export class AdjacencyGraph<T> {
  public adjList = new Map<number, AdjacencyVertex<T>>();
  private key?: keyof T;

  constructor(key?: keyof T) {
    this.adjList = new Map<number, AdjacencyVertex<T>>();
    this.key = key;
  }

  addVertex(v: T): void {
    if (this.key) {
      if (!this.adjList.get(v[this.key] as number)) {
        this.adjList.set(v[this.key] as number, {
          node: v,
          edges: [],
        });
      }
    } else {
      if (!this.adjList.get(v as number)) {
        this.adjList.set(v as number, {
          node: v,
          edges: [],
        });
      }
    }
  }

  /**
   * add Edge
   * @param src{T}
   * @param dest{T}
   * @returns {void}
   */
  addEdge(src: T, dest: T): void {
    if (this.key) {
      if (!this.adjList.get(src[this.key] as number)) {
        this.addVertex(src);
      }
      if (!this.adjList.get(dest[this.key] as number)) {
        this.addVertex(dest);
      }
      if (
        !this.adjList
          .get(src[this.key] as number)
          ?.edges.includes(dest[this.key] as number)
      ) {
        this.adjList
          .get(src[this.key] as number)
          ?.edges.push(dest[this.key] as number);
      }
      if (
        !this.adjList
          .get(dest[this.key] as number)
          ?.edges.includes(src[this.key] as number)
      ) {
        this.adjList
          .get(dest[this.key] as number)
          ?.edges.push(src[this.key] as number);
      }
    } else {
      if (!this.adjList.get(src as number)) {
        this.addVertex(src);
      }
      if (!this.adjList.get(dest as number)) {
        this.addVertex(dest);
      }
      // make sure there are no duplicates
      if (!this.adjList.get(src as number)?.edges.includes(dest as number)) {
        this.adjList.get(src as number)?.edges.push(dest as number);
      }
      if (!this.adjList.get(dest as number)?.edges.includes(src as number)) {
        this.adjList.get(dest as number)?.edges.push(src as number);
      }
    }
  }

  /**
   *
   * @param src
   * @param dest
   */
  removeEdge(src: T, dest: T): void {
    if (this.key) {
      let obj = this.adjList.get(src[this.key] as number);
      if (obj) {
        const destKey = dest[this.key] as number;
        obj.edges = obj.edges.filter((v) => v != destKey);
      }
      obj = this.adjList.get(dest[this.key] as number);
      if (obj) {
        const srcKey = src[this.key] as number;
        obj.edges = obj.edges.filter((v) => v != srcKey);
      }
    } else {
      let obj = this.adjList.get(src as number);
      if (obj) {
        obj.edges = obj.edges.filter((v) => v != dest);
      }
      obj = this.adjList.get(dest as number);
      if (obj) {
        obj.edges = obj.edges.filter((v) => v != src);
      }
    }
  }

  /**
   *
   * @param v
   */
  removeVertex(v: T) {
    if (this.key) {
      const parent = this.adjList.get(v[this.key] as number);
      const edges = parent?.edges;
      edges?.forEach((edge) => {
        const child = this.adjList.get(edge);
        if (child) {
          if (this.key) {
            const childKey = v[this.key] as number;
            child.edges = child.edges.filter((x) => x != childKey);
          }
        }
      });
      this.adjList.delete(v[this.key] as number);
    } else {
      const parent = this.adjList.get(v as number);
      const edges = parent?.edges;
      edges?.forEach((edge) => {
        const child = this.adjList.get(edge);
        if (child) {
          child.edges = child?.edges.filter((x) => x != v);
        }
      });
      this.adjList.delete(v as number);
    }
  }

  /**
   *
   * @param start
   * @param func
   * @returns
   */
  depthFirstTraversal(start: T, func?: Function): T[] {
    const stack: T[] | number = [];
    if (this.key) {
      // @ts-ignore
      stack.push(this.adjList.get(start[this.key] as number));
    } else {
      // @ts-ignore
      stack.push(start as number);
    }

    const visited = new Map<number, boolean>();
    const result: T[] = [];
    if (this.key) {
      const startKey = start[this.key] as number;
      visited.set(startKey, true);
    } else {
      visited.set(start as number, true);
    }

    while (stack.length) {
      const current = stack.pop();
      if (func) {
        func(current);
      }
      if (current) {
        // @ts-ignore
        result.push(current);
        if (this.key) {
          const neighbors = this.adjList.get(
            // @ts-ignore
            current.node[this.key] as number
          )!.edges;
          neighbors.forEach((neighbor) => {
            if (!visited.get(neighbor)) {
              // @ts-ignore
              stack.push(this.adjList.get(neighbor));
              visited.set(neighbor, true);
            }
          });
        } else {
          if (current) {
            const neighbors = this.adjList.get(current as number)!.edges;
            neighbors.forEach((neighbor) => {
              if (!visited.get(neighbor)) {
                // @ts-ignore
                stack.push(neighbor);
                visited.set(neighbor, true);
              }
            });
          }
        }
      }
    }

    return result;
  }

  breadthFirstTraversal(start: T, func?: Function) {
    const queue = [];
    const visited = new Map<number, boolean>();
    const result = [];
    if (this.key) {
      const startKey = start[this.key] as number;
      visited.set(startKey, true);
      queue.push(this.adjList.get(startKey));
    } else {
      visited.set(start as number, true);
      queue.push(start);
    }

    while (queue.length) {
      const current = queue.shift();
      if (this.key) {
        // @ts-ignore
        const neighbors = this.adjList.get(
          // @ts-ignore
          current.node[this.key as number] as number
        )!.edges;
        if (func) {
          func(current);
        }
        // @ts-ignore
        result.push(this.adjList.get(current.node[this.key]));
        neighbors.forEach((neighbor) => {
          if (!visited.get(neighbor)) {
            visited.set(neighbor, true);
            queue.push(this.adjList.get(neighbor));
          }
        });
      } else {
        const neighbors = this.adjList.get(current as number)!.edges;
        if (func) {
          func(current);
        }
        result.push(current);
        neighbors.forEach((neighbor) => {
          if (!visited.get(neighbor)) {
            queue.push(neighbor);
            visited.set(neighbor, true);
          }
        });
      }
    }

    return result;
  }
}
