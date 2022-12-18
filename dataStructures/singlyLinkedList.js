// push only

class Node {
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val){
      var newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }
  pop(){
    let current = this.head;
    let newTail;
    if(!current) return undefined;
    while(current.next) {
        newTail = current;
        current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    return current;
  }
  shift(){
    if(!this.head) return undefined;

    let cur_head = this.head;
    this.head = this.head.next;
    this.length--;
    return cur_head;
  }
  unshift(val){
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index){
    if(index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index){
      current = current.next;
      counter++;
    }
    return current;
  }
  set(value, index){
    let select_node = this.get(index)
    if(!select_node){
      return false;
    } else {
      select_node.val = value;
      return true;
    }
  }
  insert(index, val){
    if(index < 0 || index > this.length) return false;
    // !! will convert into a boolean because at current
    // they both return the entire list
    if(index === this.length) return !!this.push(val);
    if(index === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("goodbye")
