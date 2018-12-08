const numbers = [99, 44, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
	for(let i = 1; i < array.length; i++) {
		let insertedItem = false;
		for (let j = i -1; j >= 0 && !insertedItem; j--) {
			if( (array[i] <= array[j]) && (j - 1 === -1) ) {
				//Move array[i] to index 1
				let target = array.splice(i, 1)[0];
				array.splice(j, 0, target);
				insertedItem = true;
			} else if ( (array[i] <= array[j]) && (array[i] >= array[j-1])) {
				//move array[i] to the index of j-1
				let target = array.splice(i, 1)[0];
				array.splice(j, 0, target);
				insertedItem = true;
			}
		}
		console.log(array);
	}
	return array;
}

console.log(numbers);
console.log(insertionSort(numbers));