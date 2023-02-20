/* Take a input from user in number with decimal point  user input is 3.4
Convert it into greater number Example: Math.ceil(3.4); to 4
Declear a variable of string and assign some text var text="This is my dummy text"
Slice the text into a new variable from 0 to the rounded number 0 to 4;  Example: text.slice(0, 4) | sliceText = This
Use for loop and concatination to reverse the sliced string; 0==>4 ==> This ===> shiT 
print value in alert "shiT"*/
// Get a number with decimal point from the user and round it up using Math.ceil()
let num = parseFloat(prompt("Enter a number with decimal point:"));
let roundedNum = Math.ceil(num);

// Declare a string variable and assign some text to it
let text = "This is my dummy text";

// Slice the text into a new variable from 0 to the rounded number using the slice() method
let slicedText = text.slice(0, roundedNum);

// Use a for loop and concatenation to reverse the sliced string
let reversedText = "";
for (let i = slicedText.length - 1; i >= 0; i--) {
  reversedText += slicedText.charAt(i);
}

// Print the reversed text in an alert box
alert(reversedText);


/*input value from user in String var inputValue="cloUd naTive computinG"
Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing"
print value in console.log() console.log(inputValue) | check result in browser console*/
// Get a string input from the user
let inputValue = prompt("Enter a string:");

// Convert the first letter of each word in the string to uppercase using the toUpperCase() and slice() methods
let words = inputValue.toLowerCase().split(" ");
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
}
let capitalizedInputValue = words.join(" ");

// Print the capitalized string in the console using console.log()
console.log(capitalizedInputValue);

