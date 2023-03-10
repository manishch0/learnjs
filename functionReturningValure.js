// Q1 Create a function addition that takes two numbers and
// returns their addition. Print the value returned by the
// function in the console.

function addition(a, b) {
  return a + b;
}
addition(20, 24);
console.log(addition(20, 24));

// Q2Create a function subtraction that takes two numbers and returns
// their subtraction. Print the value returned by the
// function in the console.

function subtraction(a, b) {
  return a - b;
}
console.log(subtraction(24, 20));

// Q3 Create a function multiplication that takes two numbers and returns
//  their multiplication. Print the value returned by the function
//   in the console.

function multiplication(a, b) {
  return a * b;
}
console.log(multiplication(24, 20));

//Q4 Create a function division that takes two numbers and
// returns their addition. Print the value returned by the
// function in the console.

function division(a, b) {
  return a / b;
}
console.log(division(24, 20));

// Q5 Create a function greeting that takes a name and
// returns the following message. Print the value returned
// by the function in the console.

function takeName(name) {
  console.log(`Hello ` + name + `,  how are you?`);
}
takeName("Anish");

// Q6 Create a function showAge that takes two values,
//  name and age of a person. and returns the following message.
// Print the value returned by the function in the console.

function showAge(name, age) {
  console.log(`Hello , ` + name + ` you are ` + age + ` years old.`);
}
showAge("anish", 21);

// Q7 Create a function checkEqual that takes two numbers and
// checks if the two numbers are equal or not. If the numbers are equal
//  it prints they are equal. Else it prints they are not
//  equal in the console.

// E.g.  checkEqual (10, 20)
// Output: The given numbers are not equal.

function checkEqual(a, b) {
  if (a == b) {
    console.log("equal");
  } else console.log("not equal");
}
checkEqual(20, 50);

// Q8 Create a function multiplyByTwo that takes 1 number and prints
//  that numbers multiplication by 2 in the console..

// E.g.  multiplyByTwo(4)  4 multiplied by 2 is 8 so the output is 8.
// Output: 8

function multiplyByTwo(a) {
  return a * 2;
}
console.log(multiplyByTwo(4));

// Q9 Create a function checkGreater that takes two numbers
// which are stored in a and b inside our function. \
// It prints out which number is greater in the console.

// E.g.  checkGreater(10, 20)
// Output: b is greater than a.

// E.g.  checkGreater(40, 13)
// Output: a is greater than b.

function checkGreater(a, b) {
  if (a > b) {
    console.log("a is greater then b");
  } else console.log("b is greater then a");
}
checkGreater(10, 20);
checkGreater(40, 20);

// Q10 Create a function checkGreaterThanThird that takes 3 numbers
// which are stored in a, b and c inside our function.
//  If the addition of a and b is greater than c then print
//   the following message in the console.

// E.g.  checkGreaterThanThird(10, 20, 40)
// Output: addition of 10 and 20 is less than 40.

// E.g.  checkGreaterThanThird(10, 20, 20)
// Output: addition of 10 and 20 is greater than 40.
let sum = 0;
function checkGreaterThanThird(a, b, c) {
  //   sum = a + b;
  if (a + b > c) {
    console.log(a + b + `is greater then c`);
  } else console.log(a + b + `is less then c`);
}
checkGreaterThanThird(10, 10, 40);
checkGreaterThanThird(80, 20, 90);

// Q11 Create a function calculator that takes three inputs,
// two numbers and operation (what to perform).
// Operation can be “add”, “sub”, “div”, “mul”.
// Depending upon the operation value, perform necessary action and
// print the output:

// E.g.  calculator(20, 30, “add”)
// Output: Addition of 20 and 30 is 50.

// E.g.  calculator(20, 30, “multiplication”)
// Output: Multiplication of 20 and 30 is 600.
console.log("Operation solution");
function calculator(a, b, Operation) {
  if (Operation === "add") {
    console.log(a + b);
  } else if (Operation === "sub") {
    return a - b;
  } else if (Operation === "mul") {
    return a * b;
  } else if (Operation === "div") {
    return a / b;
  }
}
calculator(10, 20, "add");
console.log(calculator(100, 20, "sub"));
console.log(calculator(101, 20, "mul"));
console.log(calculator(110, 20, "div"));

//need help in this question

// Q12 Create a function printUpto that takes a number as an argument.
// The function prints numbers from 1 to that number in the console.
// If the argument passed to the function is less than 1.
// It prints necessary message

// E.g.  printUpto(20)
// Output: 1
// 2
// 3
// …
// 20

function printUpto(b) {
  if (b > 1) {
    for (let i = 1; i <= b; i++) {
      console.log(i);
    }
  }
}
printUpto(20);
console.log("check");
printUpto(-1);
console.log("check");

printUpto(2);

// Q13 Create a function printDirection that takes 1 argument
// and its  value is  either “forward” or “backward”.
// Depending Upon the second value. Output will change.
function printDirection(direction) {
  if (direction === "forward") {
    for (let i = 0; i <= 100; i++) {
      console.log(i);
    }
  } else if (direction === "backward") {
    for (let i = 100; i >= 1; i--) {
      console.log(i);
    }
  }
}
console.log("forward data check");

printDirection("forward");

console.log("forward data check down");
printDirection("backward");

// Q14 Create a function calculateGST that takes 1 argument
// e.g. totalAmount.
// The function then applies 18% GST on the totalAmount passed to
// the function and prints the necessary message in the console.

function calculateGST(amount) {
  let gst = 18;
  gstCal = (amount / 100) * gst;
  return amount + gstCal;
}
console.log(calculateGST(1000));

// Q15 Create a function GSTType that takes 1 argument e.g. typeOfService.
// The value of typeOfService can be one of the following:
// Goods
// Entertainment
// IT
// Electronics
// Vehicles
// Alcohol
// Healthcare.
// Dine

// 	Following are the GST applied on above values:
// Dine and Healthcare -> 5% GST.
// Entertainment and Goods -> 12% GST.
// IT and Alcohol -> 18%
// Electronics and Vehicles -> 28% GST.

// Depending upon what value is passed to GSTType. Print appropriate message.

// E.g.  GSTType(“Goods”)
// Output: GST for Goods will be 12%.
// E.g.  GSTType(“Healthcare”)
// Output: GST for  Healthcare will be 5%.
// E.g.  GSTType(“Electronics”)
// Output: GST for Electronics will be 28%.

// Now using the above 2 examples. Create a function CalculateGSTOnService function which takes 2 arguments.
// 1st argument -> totalAmount
// 2nd argument -> typeOfService
// Depending upon the values passed, calculate and print the message as shown in example below.

// E.g.  CalculateGSTOnService(1000, “Electronics”)
// Output: GST for Electronics is 28%. Total amount after GST is 1280.

// E.g.  CalculateGSTOnService(1000, “Healthcare”)
// Output: GST for Electronics is 5%. Total amount after GST is 1050.

// E.g.  CalculateGSTOnService(1000, “Goods”)
// Output: GST for Electronics is 12%. Total amount after GST is 1120.

function GSTType(totalAmount, typeOfService) {
  if (typeOfService === "dine" || typeOfService == "healthcare") {
    gstCal = (totalAmount / 100) * 5;
    return totalAmount + gstCal;
  }
  if (typeOfService === "Goods" || typeOfService === "Entertainment") {
    gstCal = (totalAmount / 100) * 12;
    return totalAmount + gstCal;
  }
  if (typeOfService === "Electronics" || typeOfService === "Vehicles") {
    gstCal = (totalAmount / 100) * 28;
    return totalAmount + gstCal;
  }
}
console.log(GSTType(1000, "dine"), "hello check data");
console.log(GSTType(100, "Electronics"), "hello check data");
console.log(GSTType(1200, "Goods"), "hello check data");
