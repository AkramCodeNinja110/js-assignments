// Create an empty array named 'courses'
var courses = [];

// Get 5 course names from the user and save them in the 'courses' array
var course1 = prompt("Course 1", "Computer");
courses.push(course1);

var course2 = prompt("Course 2", "Math");
courses.push(course2);

var course3 = prompt("Course 3", "Science");
courses.push(course3);

var course4 = prompt("Course 4", "English");
courses.push(course4);

var course5 = prompt("Course 5", "History");
courses.push(course5);

// Print the 'courses' array in an alert box
alert(courses);

// Print the course names one by one using prompt and update the array if the user edits the value
courses[0] = prompt("Course 1", course1);
courses[1] = prompt("Course 2", course2);
courses[2] = prompt("Course 3", course3);
courses[3] = prompt("Course 4", course4);
courses[4] = prompt("Course 5", course5);

// Print the updated 'courses' array in an alert box
alert(courses);
