const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//finds the min value and switches it with value at
//index i.
function selectionSort(array) {//Time O(n^2) and space O(1)
  const length = array.length;
  for(let i = 0; i < length - 1; i++) {
    let minIdx = i;
    for(let j = i + 1; j < length; j++){
      if(array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    //Swap item min with item at index i
    let temp = array[i];
    array[i] = array[minIdx];
    array[minIdx] = temp;
  }
  return array;
}

selectionSort(numbers);

/*Andrei's solution
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++){
      if (array[j] < array[min]){
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);
*/