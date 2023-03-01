// Q1 create a variable num. give it any number. write a Javascript program to check
// if num is odd or even.
// If num is odd, print in the console "The number is odd".
// else print in console "The number is even".

let n = 13;
if (n % 2 == 0) {
  console.log("even");
} else console.log("odd");

// Q2 create a variable num. give it any number. write a Javascript program to check
// if num is greater than 100 or not.
// If num is greater than 100 print in the console "The number is greater than 100".
// else print in console "The number is less than 100".

let number = 101;
if (number > 100) {
  console.log("the number or greater than 100");
} else console.log("the number or less than 100");

// Q3 create a variable num. give it any number. write a Javascript program to print
// square of that number in the console

// let a = 12;
function square(a) {
  return a * a;
}
console.log(square(12));

// Q4 create a variable num. give it any number. write a Javascript program to print
// the division of that number by 2.

function division(a) {
  return a / 2;
}
console.log(division(12));

// Q5 create a variable num. give it any number.
// write a Javascript program to add 100 to that number and print it in the console.

function add() {
  let a = 100;
  let b = 12;
  return a + b;
}
console.log(add());

// Q6 Create two variables a and b.  give both variables any number.
// Write a program to check which number is greater.
// if a is greater print 'A is greater'
// else print 'B is greater'

function greaterNumber(a, b) {
  //   let a = 12;
  //   let b = 24;
  if (a > b) {
    console.log("A is grater");
  } else console.log("B is greater");
}
console.log(greaterNumber(244, 48));
// it is giving the correct result but in console in 2nd line undefined??
// it is giving me undefined but i don't know why it is giving me undefined

console.log("---next Q----");

// Q7 Create two variables x and y. Give both variables any number.
// Write a program to check which variable x is greater than or less than or equal to y.
// if x is greater print 'x is greater than y'
// if x is less print 'x is less than y'
// if x is equal print 'x is equal than y'

let a = 21;
let b = 21;
if (a === b) {
  console.log("a is equal to b");
} else if (a > b) {
  console.log("a is greater then b");
} else console.log("b is greater then a");

// next tasks
console.log("-- next task questions --");

// Q8 Write pseudocode to make Maggi. Step by step and in detail.

// step 1: buy a maggi .
// step 2: take a container and add water in it.
// step 3 : gas on and put container on it and boil the water for sometime
// step 4: and add the masala to the container wait for some time .
// step 5: and add the maggi to the container .
// Step 6: water absorb by the maggi and no water in the container .
// step 7: your maggi is ready u can now eat the maggi severe the maggi to the plate .

// Q9 You are at Mindscript Classes. Write pseudocode to reach your home from class.

// step 1: wake up in the morning and fresh up .
// step 2: ready for the class .
// step 3: i will pack my bag .
// step 4: then i will open my gate of my home then .
// step 5: then i will take the lift to the ground floor
// step 6: then i will go to the main rood to take auto for the metro station .
// step 7: i will the reached the metro station
// step 8: ad enter to the metro station go for the security check
// step 9: i have to wait for the metro when arrive then i will seat into the metro .
// step 10: i have to wait for the station and my station arrive and then i will come out form the station
// step 11: then i will cover the distance by the walk .
// step 12: then i reached the location then will take the lift to my class room .
// step 13 : i reached my class .

// Q10 Write pseudocode to check if a given number is even or odd.

// Step 1: i will create the variable and assign the value .
// step 2: then i will the right the if condition n%2==0;
// step 3 : then my codition is true the it will return even
// step 4 : if my condition is false the it will return odd number .

// Q11 Write pseudocode to print all odd numbers between 1 to 100.

// step 1: first will create a function allOddNumber .
// step 2: write the for loop then .
// step 3: write the condition if (n%2)!=0
// step 4: if my condition is true the it will read the if condition and retrun the value;
// step 5: if my condition is false then it will return the it is not a odd number;
