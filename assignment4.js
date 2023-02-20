/*input a value from user for example num1 is 7
input a second value from user for example num2 is 3
input a third value from user for example sign is "+" or "-" or "*" or "/" or "%"
print operation in alert() 7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1*/




// Prompt the user for the first number
let num1 = parseInt(prompt("Enter the first number:"));

// Prompt the user for the second number
let num2 = parseInt(prompt("Enter the second number:"));

// Prompt the user for the operation sign
let sign = prompt("Enter the operation sign (+, -, *, /, %):");

// Perform the operation based on the sign entered by the user
let result;
if (sign === "+") {
  result = num1 + num2;
  alert(`${num1} + ${num2} = ${result}`);
} else if (sign === "-") {
  result = num1 - num2;
  alert(`${num1} - ${num2} = ${result}`);
} else if (sign === "*") {
  result = num1 * num2;
  alert(`${num1} * ${num2} = ${result}`);
} else if (sign === "/") {
  result = num1 / num2;
  alert(`${num1} / ${num2} = ${result}`);
} else if (sign === "%") {
  result = num1 % num2;
  alert(`${num1} % ${num2} = ${result}`);
} else {
  alert("Invalid operation sign entered!");
}
//// 
////////
/*Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
Calculate the total percentage formula:  obtainedMarks * 100/ totalMarks
print output in alert.*/
// Prompt the user for the five course numbers
let course1 = parseInt(prompt("Enter marks for course 1:"));
let course2 = parseInt(prompt("Enter marks for course 2:"));
let course3 = parseInt(prompt("Enter marks for course 3:"));
let course4 = parseInt(prompt("Enter marks for course 4:"));
let course5 = parseInt(prompt("Enter marks for course 5:"));

// Calculate the total obtained marks
let obtainedMarks = course1 + course2 + course3 + course4 + course5;

// Set the total marks to 500
let totalMarks = 500;

// Calculate the percentage
let percentage = obtainedMarks * 100 / totalMarks;

// Print the percentage in an alert
alert(`Total percentage: ${percentage}%`);

