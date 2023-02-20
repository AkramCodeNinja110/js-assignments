/*Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
Calculate the total percentage formula:  obtainedMarks * 100/ totalMarks
Calculate the grade use switch case  Grade A+ 90% to 100% , Grade A 75% to 89% , Grade B 60% to 74% , Grade C 45% to 60% , Grade D 30% to 44% Grade F 0% to 29%
print output in alert.*/

// Get course marks from user
let course1 = parseInt(prompt("Enter marks for course 1"));
let course2 = parseInt(prompt("Enter marks for course 2"));
let course3 = parseInt(prompt("Enter marks for course 3"));
let course4 = parseInt(prompt("Enter marks for course 4"));
let course5 = parseInt(prompt("Enter marks for course 5"));

let totalMarks = 500;
let obtainedMarks = course1 + course2 + course3 + course4 + course5;
let percentage = (obtainedMarks / totalMarks) * 100;

// Calculate the grade using switch case
let grade;
switch (true) {
  case (percentage >= 90 && percentage <= 100):
    grade = "A+";
    break;
  case (percentage >= 75 && percentage < 90):
    grade = "A";
    break;
  case (percentage >= 60 && percentage < 75):
    grade = "B";
    break;
  case (percentage >= 45 && percentage < 60):
    grade = "C";
    break;
  case (percentage >= 30 && percentage < 45):
    grade = "D";
    break;
  default:
    grade = "F";
}

// Print output in alert
alert("Obtained marks: " + obtainedMarks + "\nTotal marks: " + totalMarks + "\nPercentage: " + percentage + "%" + "\nGrade: " + grade);
