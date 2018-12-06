// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; //O(1) Runs once per function call some people don't count assignment towards Big O
  a = 50 + 3;//O(1) Runs once per function call

  for (let i = 0; i < input.length; i++) {//O(n) Loops are always linear time
    anotherFunction();//O(n) //Runs as many times as their are elements
    let stranger = true;//O(n) //Runs as many times as their are elements
    a++;//O(n) //Runs as many times as there are elements
  }
  return a;//O(1) Some don't count returns towards Big O but this only happens once per function
}

//Add Them
// O( 1 + 1 + n + n + n + n + 1 )
// = O(3 + 4n) rounded to O(n) linear time