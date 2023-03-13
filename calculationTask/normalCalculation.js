// let number1 = document.getElementById("addItem1");
// let number2 = document.getElementById("addItem2");
// let results = document.getElementById("result");
// let button = document.getElementById("buttonAdd");

// function AddCal() {
//   let sum = +number1.value + +number2.value;
//   results.innerHTML = sum;
// }
console.log("-- result --");

// let number1 = document.getElementById("subItem1");
// let number2 = document.getElementById("subItem2");
// let results = document.getElementById("resultsub");
// let button = document.getElementById("buttonSub");

// function SubCal() {
//   let sub = +number1.value - +number2.value;
//   results.innerHTML = sub;
// }

console.log("== Result ==");

// let number1 = document.getElementById("mulItem1");
// let number2 = document.getElementById("mulItem2");
// let results = document.getElementById("resultmul");
// let button = document.getElementById("buttonMul");

// function MulCal() {
//   let mul = +number1.value * +number2.value;
//   results.innerHTML = mul;
// }

console.log("-- mul --");

// let number1 = document.getElementById("divItem1");
// let number2 = document.getElementById("divItem2");
// let results = document.getElementById("resultdiv");
// let button = document.getElementById("buttonDiv");

// function DivCal() {
//   let div = +number1.value / +number2.value;
//   results.innerHTML = div;
// }

console.log("-- Div -- ");

// let input1 = document.getElementById("NameStudent");
// let input2 = document.getElementById("3PerItem1");
// let input3 = document.getElementById("3PerItem2");
// let results = document.getElementById("resultPer");
// let button = document.getElementById("buttonPer");
// let student = document.getElementById("Student");

// function PerCal() {
//   let percentage = (+input2.value / +input3.value) * 100;
//   let name = input1.value;
//   results.innerHTML = percentage;
//   student.innerHTML = name;
//   console.log(percentage);
//   if (percentage <= 0 || percentage <= 35) {
//     console.log("fail");
//   } else if (percentage <= 36 || percentage <= 50) {
//     console.log(`${input1.value} c grade`);
//   } else if (percentage <= 51 || percentage <= 75) {
//     console.log(" grade B");
//   } else if (percentage <= 76 || percentage <= 90) {
//     console.log("grade A");
//   } else if (percentage <= 90 || percentage <= 100) {
//     console.log("Grade- bass lar bhai kitna padega");
//   }
// }

console.log("== per 3==");

let input1 = document.getElementById("NameStudents");
let input2 = document.getElementById("2PerItem1");
let input3 = document.getElementById("2PerItem2");
let results = document.getElementById("resultPer2");
let button = document.getElementById("buttonPer2");
let student = document.getElementById("Student2");
function PerCal2() {
  let percentage = (+input2.value / +input3.value) * 100;
  results.innerHTML = percentage;
  let StudentName = input1.value;
  student.innerHTML = StudentName;
}

console.log("--Per 2--");

// let input1 = document.getElementById("Per1Item1");
// let input2 = document.getElementById("Per1Item2");
// let results = document.getElementById("resultPer1");
// let button = document.getElementById("buttonPer1");
// function PerCal1() {
//   let percentage = (+input1.value / +input2.value) * 100;
//   results.innerHTML = percentage;
// }

function TableMul() {
  let num = document.getElementById("Table").value;
  var table;
  table = '<table id="data">';
  for (i = 1; i <= 10; i++) {
    table += "<tr><td>" + num + "*" + i + "=" + num * i + "</td></tr>";
  }
  table += "</table>";
  document.getElementById("resultTable").innerHTML = table;
}
