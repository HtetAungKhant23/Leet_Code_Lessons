// learn and implement with ts
class Vertex {
  val: number;
  neighbors: Vertex[];
  constructor(val?: number, neighbors?: Vertex[]) {
    this.val = val || 0;
    this.neighbors = neighbors || [];
  }
}

class Solution {
  dfs(cur: Vertex | null, mp: Map<Vertex, Vertex>): Vertex | null {
    if (cur === null) {
      return null;
    }

    const neighbour: Vertex[] = [];
    const clone: Vertex = new Vertex(cur.val);
    mp.set(cur, clone);

    for (const it of cur.neighbors) {
      if (mp.has(it)) {
        neighbour.push(mp.get(it)!);
      } else {
        neighbour.push(this.dfs(it, mp)!);
      }
    }

    clone.neighbors = neighbour;
    return clone;
  }

  cloneGraph(node: Vertex | null): Vertex | null {
    const mp: Map<Vertex, Vertex> = new Map();

    if (node === null) {
      return null;
    }

    if (node.neighbors.length === 0) {
      return new Vertex(node.val);
    }

    return this.dfs(node, mp);
  }
}
