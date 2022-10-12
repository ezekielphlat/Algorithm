/*
Using auxiliary array to implement array rotation

Steps for left rotation
last element must move to the left at r times
Start
Declear temp array of size r   (rotation count)
Repeat this steps for r times (2)
    temp[i]  = arr[i]  here we copy first two elements into the aux array
Repeat this step for n - r times (5-2 = 3) repeat for 3 times  start i from r
    arr[i] = arr[n-r+i]
Repeat this steps for r times i will start from 0
    (1+3) 4th
    arr[i+n-r] = temp[i];

Stop

1st element must move to the right at r times
Steps for Right rotation

Start
Declear temp array of size r   (rotation count)
Repeat this steps for r times (2)
    temp[i]  = arr[n - r + i];  we get the last two element
Repeat this step for n - r (3) times desc
    arr[i] = arr[i - r];
Repeat this steps for r times i will start from 0
    (1+3) 4th
    arr[i] = temp[i];

Stop
*/

var arr = [1, 2, 3, 4, 5];

var r = 2;
const rotateLeft = (arr, r) => {
  // declare the auxiliary array
  let temp = [];
  var n = arr.length;
  for (let i = 0; i < r; i++) {
    // copy the members of array to temp till r position
    temp[i] = arr[i];
  }
  for (let i = r; i < n; i++) {
    // shift the arrays from n-r position to the left
    arr[i - r] = arr[i]; //
  }
  for (let i = 0; i < r; i++) {
    arr[i + n - r] = temp[i];
  }

  return arr;
};

const rotateRight = (arr, r) => {
  // declare the auxiliary array
  let temp = [];
  var n = arr.length;
  for (let i = 0; i < r; i++) {
    // copy the last members of the array
    temp[i] = arr[n - r + i];
  }
  // console.log(temp);
  for (let i = n - 1; i >= r; i--) {
    // shift the element from the n-r position to the end of the array
    arr[i] = arr[i - r]; //
  }
  for (let i = 0; i < r; i++) {
    arr[i] = temp[i];
  }

  return arr;
};
console.log(rotateRight(arr, r));
