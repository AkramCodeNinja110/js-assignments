/*Create an empty array with the name is courses. ```example: var courses=[] ``
Get the 5-course name from the user, example: var course1 =prompt("course 1", "computer")  and save all 5 value in "courses" array. example: courses.push(course1)
print courses array in alertexample: alert(courses)
print all full 5-course name one by one in prompt. example: course1=prompt(course1, course1Value)
If the user edit any value (through prompt), then that value is edit in the array. example: course1=prompt(course1, course1ValueEdit)  use Array.splice() to replace and edit index in array
print courses array in alertexample: alert(courses)
with for loop */
// Create an empty array named 'courses'
let courses = [];

// Get 5 course names from the user and save them in the 'courses' array
for (let i = 1; i <= 5; i++) {
  let course = prompt("Course " + i, "Computer");
  courses.push(course);
}

// Print the 'courses' array in an alert box
alert(courses);

// Print the course names one by one using prompt and update the array if the user edits the value
for (let i = 0; i < courses.length; i++) {
  courses[i] = prompt("Course " + (i+1), courses[i]);
}

// Print the updated 'courses' array in an alert box
alert(courses);
