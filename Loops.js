// Q1 Write JS code to print up to 10 numbers.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log("--next q---");
// Q2 Write JS code to print numbers in reverse order from 100 to 1

for (let i = 100; i >= 1; i--) {
  console.log(i);
}

// Q3 Write JS code to print odd numbers up to 100
console.log("question 3 ans ");

for (let i = 1; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// Q4 create a variable n with any value. e.g n = 3 Write JS code to print up to n numbers.

let n = 10;
for (i = 0; i <= n; i++) {
  console.log(i);
}

// Q5 create a variable n with any value. e.g n = 10 Write JS code to print only even numbers up to n.
let num = 10;
for (let i = 0; i <= num; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// Q6 create a variable n with any value. e.g n = 10. Write JS code to print only odd numbers up to n.

let no = 10;
for (let i = 1; i <= no; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// Q7 create a variable n with any value. e.g n = 10 Write JS code to print only the numbers divisible by 3 up to n.

for (let i = 0; i <= no; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// Q8 Write a JS program to print only the numbers divisible by 2 and 3 both up to 100.

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0 && i % 3 == 0) {
    console.log(i);
  }
}

//Q9  Write JS code to print numbers divisible by 3 or 5 up to 100.
// Output: 3   5   6   9   10   12   15    (upto 100)

for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log(i);
  }
}

// Q10 create a variable n. Write a JS code to print the table of a given number up to 10 in the following format. E.g. n = 3;
// Output: 3 * 1 = 3          3 * 2 = 6         3 * 3 = 9           Upto 3 * 10 = 30

for (let i = 1; i <= 10; i++) {
  console.log("3*", i, "=", i * 3);
}

// Q11 Create a variable n. Write a JS program to print numbers from n to 0 in reverse order. E.g. n = 9

for (let i = no; i >= 0; i--) {
  console.log(i);
}

// Q12 Create a variable n. Write a program to print the sum of all the numbers starting from 1 up to n. e.g. n = 4;
// Output:    10 (1+2+3+4)
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

// Q13 Write a program to print a square of numbers from 1 to 100.
// Output:           1          4             9              16            (upto 100).

for (let i = 1; i <= 100; i++) {
  console.log(i * i);
}

// Q14 Take two variables: start and end.
// The start variable will contain the start of the loop and the end variable will contain the end of the loop.
// Write a for loop to print numbers from start to end.
// E.g. start = 14, end = 20
// Output: 14 15 16 17 18 19 20

let a = 14;
let b = 20;
for (i = a; i <= b; i++) {
  console.log(i);
}

// Q15 Create an array of any random numbers and name it num.
// Write a program to print all the elements of that array.
// E.g. num = [232,45,67,64,56,90];
// Output: 232 64 56 90

let nums = [232, 45, 67, 64, 56, 90];
for (let i = 0; i <= nums.length; i++) {
  console.log(nums[i]);
}

// Q16Create an array of any random numbers and name it num. Write a program to print all even numbers of that array.
// E.g. num = [232,45,67,64,56,90].
// Output: 232 64 56 90

for (let i = 0; i <= nums.length; i++) {
  if (nums[i] % 2 == 0) {
    console.log(nums[i]);
  }
}
//  Q17Create an array of any random numbers and name it num. Write a program to print the addition of all numbers of that array.
//  E.g. num = [10,20,30,40,50].
//  Output: 150

let numss = [10, 20, 30, 40, 50];
let sums = 0;
for (let i = 0; i <= numss.length; i++) {
  sums += numss[i];
  console.log(sums);
}
