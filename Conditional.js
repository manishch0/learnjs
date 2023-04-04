// Q1 Given a variable var n = 30;
// Write a program to check if a given variable is greater than 100.
// Output: The given number 30 is less than 100
let n = 330;
if (n < 100) {
  console.log("the given number 30 is less than 100");
} else console.log("the given number is greater then 100");

// Q2 Given a variable var monthOfYear = 1;
// monthOfYear can take any value between 1 to 12. If we change its value accordingly, display a message.
// E.g.  monthOfYear  = 4;
// Output: We are in April month

let monthOfYear = 5;
if (monthOfYear == 1) {
  console.log("jan");
} else if (monthOfYear == 2) {
  console.log("feb");
} else if (monthOfYear == 3) {
  console.log("mar");
} else if (monthOfYear == 4) {
  console.log("Apr");
} else if (monthOfYear == 5) {
  console.log("may");
} else if (monthOfYear == 6) {
  console.log("jun");
} else if (monthOfYear == 7) {
  console.log("jul");
} else if (monthOfYear == 8) {
  console.log("aug");
} else if (monthOfYear == 9) {
  console.log("sep");
} else if (monthOfYear == 10) {
  console.log("oct");
} else if (monthOfYear == 11) {
  console.log("nov");
} else console.log("dec");

// Q3 Given two variables a, b. Check if that variable is even and it is less than  b.
// If a is even and less than b. Print: a is even and less than b.
// If a is odd and less than b. Print: a is odd and less than b.
// If a is odd and greater than b Print: a is odd and greater than b.
// If a is even and greater than b Print: a is even and greater than b.

let a = 12;
let b = 21;
if (a % 2 == 0 && b % 2 == 0) {
  console.log(a);
}

// Q4 Create an array of any numbers e.g. arr = [14, 35, 65, 78, 92, 42];
// Create a variable index which takes any value e.g. index = 4.
// Now write a program to check if the element in array at index 4 is odd or even.
// E.g. index = 3;  Output: 78 is an even number.
// E.g. index = 1;  Output: 35 is an odd number.

let arr = [14, 35, 65, 78, 92, 42];
for (let i = 0; i <= arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log("even no", arr[i]);
  } else console.log("odd no", arr[i]);
}

// Q5 Create an array of any numbers e.g. arr = [14,  36, 45, 78, 92, 42];
// Create a variable index which takes any value e.g. index = 4.
// Now write a program to check if the element in the array at index 4 is divisible by 2 and 3 both and print messages accordingly.
// Index = 3 Output: 78 is not divisible by 2 and 3.
// Index = 3 Output: 36 is divisible by 2 and 3.

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] % 2 == 0 && arr[i] % 3 == 0) {
    console.log("divisible by 2 and 3 both", arr[3]);
  } else console.log(arr[3], "is not divisible by 2 and 3");
}


