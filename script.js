console.clear();

class LinkedList {
  constructor(name = "LinkedList") {
    this.name = name;
    this.length = 0;
    this.head = null;
  }

  createNode(element) {
    return {
      element,
      nextNode: null,
    };
  }

  get size() {
    console.log("Length: ", this.length);
    return this.length;
  }

  get header() {
    return this.head;
  }

  get tail() {
    let currentNode = this.head;
    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  at(index) {
    if (index > this.length - 1) return undefined;
    let currentNode = this.head;
    for (let i = 0; i < this.length - 1; i++) {
      if (i == index) {
        console.log(`At ${index}: ${currentNode.element}`);
        return currentNode;
      }
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  append(element) {
    const newNode = this.createNode(element);

    if (this.length == 0) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.nextNode != null) {
        // console.log("Current Node: ", currentNode.element);
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = newNode;
    }
    this.length++;
  }

  prepend(element) {
    let newNode = this.createNode(element);
    let currentNode = this.head;

    newNode.nextNode = currentNode;
    this.head = newNode;
    list.length++;

    // newNode.nextNode = this.head;
    // this.head = newNode;
    // list.length++;
  }

  pop() {
    if (!this.length) return;
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (i == this.length - 2) {
        currentNode.nextNode = null;
      } else currentNode = currentNode.nextNode;
    }
    this.length--;
  }

  shift() {
    let currentNode = this.head;
    if (this.length > 1) {
      this.head = this.head.nextNode;
      this.length--;
    } else {
      this.head = null;
      this.length = 0;
    }
  }

  insertAt(element, index) {
    if (index > this.length) return;
    index--;
    let newNode = this.createNode(element);
    let currentNode = this.head;
    for (let i = 0; i <= index; i++) {
      if (index == i) {
        newNode.nextNode = currentNode.nextNode;
        currentNode.nextNode = newNode;
      }
      currentNode = currentNode.nextNode;
    }
    this.length++;
  }

  removeAt(index) {
    if (index > this.length) return;
    let currentNode = this.head;
    index--;
    for (let i = 0; i < this.length - 1; i++) {
      if (index == i) {
        currentNode.nextNode = currentNode.nextNode.nextNode;
        this.length--;
        return;
      }
      currentNode = currentNode.nextNode;
    }
  }

  contains(item) {
    let currentNode = this.head;
    while (currentNode.nextNode != null) {
      if (currentNode.element == item) {
        return true;
      }

      currentNode = currentNode.nextNode;

      if (currentNode.element == item) {
        return true;
      }
    }
    return false;
  }

  find(item) {
    let currentNode = this.head;
    for (let i = 0; i < this.length - 1; i++) {
      if (item == currentNode.element) {
        return i;
      }
      currentNode = currentNode.nextNode;
      if (item == currentNode.element) {
        return i + 1;
      }
    }
    return undefined;
  }

  toString() {
    if (this.length == 0) return "";

    let string = `${this.head.element}`;

    let currentNode = this.head;

    while (currentNode.nextNode != null) {
      currentNode = currentNode.nextNode;
      string += ", " + currentNode.element;
    }
    return string;
  }
}

let list = new LinkedList();
list.append("sj");
list.append("another");
list.append("comeOn");
list.prepend("First");
list.prepend("Hello");

list.find(23);
// console.log(list.toString());
// console.log("Find: ", list.find("comeOn"));
// console.log(list.toString());

// console.log(list.size);
// console.log(list.toString());
list.size;
// list.insertAt("insert", 3);
// list.insertAt("4", 4);
// list.prepend("24678");
// list.append("3e89");
list.at(4);
// console.log(list.contains("3e89adc"));
// console.log("sdc", list.find("insert"));
list.size;
// list.prepend(["Man", "Woman", 2, 4]);
console.log(list.toString());

list.removeAt(4);
list.size;
list.size;
console.log(list.toString());

/*
  Done:
  size, append, prepend, pop, shift, insertAt, 
  at, find, head, tail, contains
*/

/* 
  Will do. Hopefully: 
  insert("ede", , 1, ["Kind", enough], "prince", "wifte")
*/
