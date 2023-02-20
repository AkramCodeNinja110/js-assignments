/*input your name through prompt. for example name is  "Ameen Alam"

input your DOB(date) through prompt. for example date is  "24"

input your DOB(month) through prompt. for example month is  "05"

input your DOB(year) through prompt. for example year is  "1999"

print meassage in console.log() "Hello Ameen Alam, Good Morning, AfterNoon, Evening or Night"

print meassage in console.log() "Your DOB is {in pakistan standard time format}"

print meassage in console.log() "You are 20 years 7 Month 10 Days 19 Hours 20 Minutes 25 Seconds old"

"Your Age in Days 7510"

print meassage in console.log() "How much time left in your next birthday? 161 days 4 hours 39 minutes 34 seconds" or "happy Birth Day Ameen Alam.  Today is Your 20th Birthday"*/
// Get name input from user
var name = prompt("Please enter your name:");

// Get date of birth input from user
var dobDate = prompt("Please enter your date of birth (date only):");
var dobMonth = prompt("Please enter your date of birth (month in numeric form):");
var dobYear = prompt("Please enter your date of birth (year in YYYY format):");

// Create a new Date object with the user's date of birth
var dob = new Date(dobYear, dobMonth - 1, dobDate);

// Define an array of messages for different times of the day
var messages = [
  "Good Night",
  "Good Morning",
  "Good Afternoon",
  "Good Evening",
  "Good Night"
];

// Determine the appropriate message based on the current time of day
let now = new Date();
let hours = now.getHours();
let message = messages[Math.floor(hours / 6)];

// Calculate the user's age
let ageInMs = now.getTime() - dob.getTime();
let ageInSecs = ageInMs / 1000;
let ageInMins = ageInSecs / 60;
let ageInHours = ageInMins / 60;
let ageInDays = ageInHours / 24;
let ageInMonths = ageInDays / 30.44; // Average number of days in a month
let ageInYears = ageInDays / 365.25; // Average number of days in a year

// Calculate the time remaining until the user's next birthday
let nextBirthday = new Date(now.getFullYear(), dob.getMonth(), dob.getDate());
if (nextBirthday < now) {
  nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
}
let timeUntilNextBirthday = nextBirthday.getTime() - now.getTime();
let daysUntilNextBirthday = Math.floor(timeUntilNextBirthday / (1000 * 60 * 60 * 24));
let hoursUntilNextBirthday = Math.floor((timeUntilNextBirthday / (1000 * 60 * 60)) % 24);
let minsUntilNextBirthday = Math.floor((timeUntilNextBirthday / (1000 * 60)) % 60);
let secsUntilNextBirthday = Math.floor((timeUntilNextBirthday / 1000) % 60);

// Print the messages in the console
console.log("Hello " + name + ", " + message + "!");
console.log("Your DOB is " + dob.toLocaleString("en-PK", { timeZone: "Asia/Karachi" }));
console.log("You are " + Math.floor(ageInYears) + " years " + Math.floor(ageInMonths % 12) + " months " + Math.floor(ageInDays % 30.44) + " days " + Math.floor(ageInHours % 24) + " hours " + Math.floor(ageInMins % 60) + " minutes " + Math.floor(ageInSecs % 60) + " seconds old.");
console.log("Your age in days: " + Math.floor(ageInDays));
if (daysUntilNextBirthday === 0) {
  console.log("Happy birthday, " + name + "!");
} else {
  console.log("How much time left in your next birthday? " + daysUntilNextBirthday + " days " + hoursUntilNextBirthday + " hours " + minsUntilNextBirthday + " minutes " + secsUntilNextBirthday + " seconds");
}
