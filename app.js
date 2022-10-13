console.clear();
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  get size() {
    return this.length;
  }

  createNode(element) {
    return { element, next: null };
  }

  add(element) {
    const node = this.createNode(element);

    if (this.length == 0) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    this.length++;
    return this.size;
  }

  popEl() {}

  toString() {
    if (!this.length) return "";

    let str = `${this.head.element}`;
    let current = this.head;

    for (let i = 0; i < this.length - 1; i++) {
      current = current.next;
      str += `, ${current.element}`;
    }
    return str;
  }
}

// class Node {
//   constructor(value, nextNode) {
//     this.element = value;
//     this.next = null;
//   }

//   get property() {
//     return this.value;
//   }
//   set property(prop) {
//     this.value = prop;
//   }
// }

let list = new LinkedList();
console.log(list.size);
list.add("sfvh");
list.add("sfvh");
list.add("sfvh");
console.log(list.toString());
console.log(list.size);

// let node1 = new Node("Shekinah", "node2");
// let node2 = new Node("Marvi", "node3");
// let node3 = new Node("Efe", "node4");

// console.log(node3.property);
