//#5 Space complexity O(1)
function boooo(n) {
    for (let i = 0; i < n; i++) {//let i = 0 is O(1)
        console.log('booooo');
    }
}
//Space Complexity: O(1)
booooo([1,2,3,4,5]); 


// #6 Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];//Create Data Structure O(1)
    for (let i = 0; i < n; i++) {//Create increment variable O(1)
        hiArray[i] = 'hi';//Allocation O(n)
    }
    return hiArray;
}
//O(1 + 1 + n) => O(n) Space complexity
arrayOfHiNTimes(6)