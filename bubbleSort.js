const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


//Space Complexity O(1)
function bubbleSort(array) {//O(n^2) - Quadratic Time
	const length = array.length;
	for (let i = 0; i < length; i++) {//do ladders for every element
		for (let j = 0; j < length; j++) {//go across the array
			if (array[j] > array[j+1]) {
				//Swap numbers
				let temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
			}
		}
	}
	return array;
}

console.log(numbers);
console.log(bubbleSort(numbers));