class HashTable {
	constructor(size) {
		this.data = new Array(size);
		//[ A bucket/entry ['grapes', 10000] ]
	}

	//_method means it is private as in you can still
	//Access the method publicly but you shouldn't
	_hash(key) {//Generate a hash for us between 0 and length of array - 1
		//In real life this is soooo fast that its O(1) even tho there is a loop
		let hash = 0;
		for (let i=0; i < key.length; i++) {
			//charCodeAt(i) gives character code 0-65535 UTF code
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		           //concat  //get utf code   //multiply by idx for duplicate characters to get unique
		           //Mod so it fits in the hash size
		}
		return hash;
	}

	set(key, val) {//O(1) 
		let address = this._hash(key);
		if(!this.data[address]) {//check if this is full yet
			this.data[address] = [];
		}
		this.data[address].push([key,val]);
		return this.data;
		// const entry = [key, val];
		// this.data[this._hash(key)] = entry;
		// return entry;
	}

	get(key) {//O(1) |    O(n) if there are collisions
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if (currentBucket.length) {//if current bucket has something
			for(let i = 0; i < currentBucket.length; i++) {//Collision resolution
				if(currentBucket[i][0] === key){//There are multiple entries in the same bucket, find the one that matches the key
					return currentBucket[i][1];
				}
			}
		}
		return undefined; // If the bucket is empty return undefined
		//return this.data[this._hash(key)][1];
	}

	keys() {//O(n) Loop through all the keys in the hashtable 
		const keysArray = [];
		for(let i = 0; i < this.data.length; i++ ) {
			if(this.data[i]) {//if the shelf as a full bucket
				keysArray.push(this.data[i][0][0]);
			}
		}
		return keysArray;
	}
	toString() {
		return this.data;
	}

}

const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.set('grapess', 10000));
console.log(myHashTable.set('grapesss', 10000));
console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());
//console.log(myHashTable);

