//Build an Array using JavaScript Class
// const  a = []; 
//Data Structures can be built from scratch

class MyArray {
	constructor() {
		this.length = 0;
		this.data = {};
	}

	get(index) {//O(n)
		return this.data[index];
	}

	push(item) {//O(n)
		this.data[this.length] = item; 
		this.length++;//Increment length
		//Adds to the length which is one more than the last occupied index
		return this.length;
	}

	pop() {//O(n) - Bc you need to loop over it
		const lastItem = this.data[this.length -1];
		delete this.data[this.length - 1];
		this.length--;
		return lastItem;
	}

	delete(index) {//O(n)
		const item = this.data[index];
		this.shiftItems(index);
		return item;
	}

	shiftItems(index) {
		for(let i = index; i < this.length - 1; i++) {
			/*Start at index to delete from
			  Take each data item and shift it to
			  the left */
			this.data[i] = this.data[i+1];
		}
		//Delete last untouched duplicate element
		delete this.data[this.length - 1];
		//Decrement length
		this.length--;
	}
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.pop();
newArray.pop();
newArray.delete(1);
console.log(newArray);