// learn and implement with ts
class Vertex {
  val: number;
  neighbors: number[];
  constructor(val: number, neighbors: number[]) {
    this.val = val || 0;
    this.neighbors = neighbors || [];
  }
}
