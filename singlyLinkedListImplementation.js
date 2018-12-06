// 10 --> 4 --> 16

// let myLinkedList = {
// 	head: {//head
// 		value: 10,
// 		next: {
// 			value: 5,
// 			next:{//Tail bc it is null terminated
// 				value: 16,
// 				next: null 
// 			}
// 		}
// 	}
// }
class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}
class LinkedList{
	constructor(value){
		this.head= {
			value: value,
			next: null //Starts with null bc this is the only node at this point and it needs to terminate
		}
		this.tail = this.head; //the head is the tail for now
		this.length = 1;//bc it has one node the head
	}

	append(value) {
		//Code to append to the end
		//Create Tale Node
		if (this.head === this.tail) {
			this.tail = {
				value: value,
				next: null
			}
			this.head.next = this.tail;
		} else {
			this.tail.next = {
			value: value,
			next: null
			}
		}
		
		this.length++;
	}

	prepend(value) {
		const newHead = {
			value: value,
			next: this.head
		}
		this.head = newHead;
		this.length++;
		return this;
	}
	
	printList() {
		const array = [];
		let currentNode = this.head;
		while(currentNode !== null){ //Traversal
			array.push(currentNode.value);
			currentNode = currentNode.next;//go to the next node
		}
		return array;
	}
	insert(index, value) {
		let counter = 0;
		let newNode = new Node(value);
		let currentNode = this.head;
		if (index === 0) {
			this.prepend(value);
		}
		while(currentNode !== null){ //Traversal
			if (counter === index -1) {//Make previous index point to new value
				newNode.next = currentNode.next; //Point new node to one occupying its place
				currentNode.next = newNode; //Point node in index before it to the new node
				return true;//Able to insert successfully
			}
			currentNode = currentNode.next;//go to the next node
			counter++;
		}
		return false;//Unable to insert successfully
	}

	remove(index){
		let counter = 0;
		let currentNode = this.head;
		while(currentNode !== null) {//Traverse
			if(counter === index - 1){			
				currentNode.next = currentNode.next.next;
				this.length--;
				return true;// succeful deletion
			}
			counter++;
		}
	}
}


//Creates head of linked list
const myLinkedList = new LinkedList(10); 
console.log(myLinkedList);
myLinkedList.append(1);
console.log(myLinkedList);
myLinkedList.append(10);
console.log(myLinkedList);
myLinkedList.prepend(-1);
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(0,4));
console.log(myLinkedList.printList());
console.log(myLinkedList.insert(3,4));
console.log(myLinkedList.printList());
myLinkedList.remove(2);
console.log(myLinkedList.printList());
//Andrei's solution


class LinkedListA{
	constructor(value){
		this.head= {
			value: value,
			next: null //Starts with null bc this is the only node at this point and it needs to terminate
		}
		this.tail = this.head; //the head is the tail for now
		this.length = 1;//bc it has one node the head
	}

	append(value) {
		//Code to append to the end
		//Create Tale Node
		const newNode = new Node(value);
		//Point to the new node instead of tail
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	printList() {
		const array = [];
		let currentNode = this.head;
		while(currentNode !== null){ //Traversal
			array.push(currentNode.value);
			currentNode = currentNode.next;//go to the next node
		}
		return array;
	}

	insert(index, value) {
		//Check params
		if (index >= this.length) {//if it is beyond the index range just append it to end
			return this.append(value);
		}
		const newNode = new Node(value);
		const leader = this.traverseToIndex(index-1); //a -> b | x
		const holdingPointer = leader.next;
		leader.next = newNode; // a -> x       b
		newNode.next = holdingPointer; // x -> b
		this.length++;
		return this.printList(); //a -> x -> b
	}

	traverseToIndex(index) {//O(n)
		//check for params
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	remove(index) {
		//check params
		const leader = this.traverseToIndex(index - 1);//O(n)
		const unwantedNode = leader.next;
		leader.next = unwantedNode.next;//redirect pointer between leader and unwanted node to leader and node after the unwanted one
		//Because JS is garbage-collected, since there is nothing pointing to the unwanted node it will get deleted
		this.length--;
		return this.printList();
	}
}

const myLinkedList2 = new LinkedListA(10); 
console.log(myLinkedList2);
myLinkedList2.append(1);
console.log(myLinkedList2);
myLinkedList2.append(10);
console.log(myLinkedList2);
myLinkedList2.prepend(-1);
console.log(myLinkedList2);
console.log(myLinkedList2.printList());
//console.log(myLinkedList2.insert(0,4));
console.log(myLinkedList2.printList());
console.log(myLinkedList2.insert(3,4));
console.log(myLinkedList2.printList());
console.log(myLinkedList2.insert(20,4));
console.log(myLinkedList2.printList());