class TrieNode<T> {
  children: Map<string, TrieNode<T>>;

  constructor(public isLeaf = false, public label?: T) {
    this.children = new Map();
  }

  get hasChildren(): boolean {
    return this.children.size > 0;
  }

  addChild(value: string, node: TrieNode<T>): void {
    this.children.set(value, node);
  }

  getChild(value: string): TrieNode<T> | undefined {
    return this.children.get(value);
  }
}

export class Trie<T> {
  private root: TrieNode<T>;

  constructor() {
    this.root = new TrieNode();
  }

  add(value: string, label: T, parentNode = this.root) {
    const values = value.split("");
    if (parentNode.hasChildren) {
      const parentCandidate = parentNode.getChild(values[0]);
      if (parentCandidate) {
        this.searchLastParent(parentCandidate, label, value);
      } else {
        this.addNodes(parentNode, values, label);
      }
    } else {
      this.addNodes(parentNode, values, label);
    }
  }

  private searchLastParent(parentNode: TrieNode<T>, label: T, value: string) {
    const values = value.split("");
    if (this.isLastValue(values)) {
      parentNode.isLeaf = true;
      parentNode.label = label;
    } else {
      this.add(value.substr(1), label, parentNode);
    }
  }

  private isLastValue(values: string[]) {
    return values.length === 1;
  }

  private addNodes(parentNode: TrieNode<T>, values: string[], label: T) {
    values.forEach((value, index) => {
      const isLeaf = index === values.length - 1;
      const node = new TrieNode<T>(isLeaf, isLeaf ? label : undefined);
      parentNode.addChild(value, node);
      parentNode = node;
    });
  }

  find(value: string): T | undefined {
    const values = value.split("");
    let node = this.root;

    for (let i = 0; i < values.length; i++) {
      const childNode = node.getChild(values[i]);
      if (childNode) {
        node = childNode;
      } else {
        break;
      }
    }

    return node.isLeaf ? node.label : undefined;
  }
}
