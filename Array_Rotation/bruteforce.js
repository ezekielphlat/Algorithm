/*
Rotating an array is shifting the array element to left or right index
example 
[1,2,3,4,5] shifted to the right at a single rate is [5,1,2,3,4]
The Bruteforce algorithm is below
Start
Declear Variable prev and temp
Repeat the below step for r times
    initialize prev variable to arr[arr.length -1]
    Repeat this steps until j is n
        initialize temp  = arr[j]
        initialize arr[j] = prev
        initialize prev = temp
stop

*/
let arr = [1, 2, 3, 4, 5];
const rotateArray = (arr, r) => {
  if (r == arr.length) {
    return arr;
  }
  // declear temp and prev variable
  let temp, prev;
  let n = arr.length;
  for (let i = 0; i < r; i++) {
    // this is the last element in the array (5)
    prev = arr[n - 1];
    // loop through each element in the array
    for (let j = 0; j < n; j++) {
      // keep the current element inside a temp variable (1)
      temp = arr[j];
      // move last element in current index  arr[j] = 5
      arr[j] = prev;
      // initialize prev value to temp (1)
      prev = temp;
    }
  }
  return arr;
};

// console.log(rotateArray(arr, 2));
console.log(rotateArray(arr, 5));
