// enum OutType {
//   Array,
//   Chain,
// }

interface TreeInterface<T> {
  dfs: () => void; // 前中后的深度优先
  bfs: () => void; // 层序遍历
  depth: () => number; // 树的深
  search: () => boolean; // 查找是否存在子树
  output: () => Array<number> | object; // 输出：数组/链式
  size: () => number; // 节点个数
}

class Tree<T> implements TreeInterface<T> {
  private data: T[] = [];
  constructor(value?: T[] | T) {
    if (typeof value !== 'undefined') {
    }
  }

  dfs() {}

  bfs() {}

  depth() {
    return 1;
  }

  search() {
    return true;
  }

  output() {
    return [1];
  }

  size() {
    return this.data.length;
  }
}

export default Tree;
